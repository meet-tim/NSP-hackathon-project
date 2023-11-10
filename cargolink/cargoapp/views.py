from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.http import HttpResponse,HttpResponseRedirect
from .forms import CreateUserForm,ActivationForm
from django.contrib.auth.forms import UserCreationForm,PasswordChangeForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .decorators import unauthenticated_user,allowed_users
from django.contrib.auth.models import Group
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth.tokens import default_token_generator
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.shortcuts import get_object_or_404
from django.forms import modelformset_factory
from datetime import datetime
from django.db.models.query import Q,F
from django.db.models import Count,Sum

from .forms import TripForm,BookingForm,DriverForm
from cargoapp.models import Trip,Booking,Driver


@login_required(login_url='login')
def dashboard(request):
    trips = Trip.objects.filter(Q(departure_time__gte=datetime.now()) | Q(driver__car_space__gte=F('space_left')) | Q(space_left__lte=5000))[0:4]
    bookings = Booking.objects.filter(passenger=request.user.pk).annotate(total_trips=Count('trip'))

    context = {
        "trips":trips,
        "bookings":bookings,
    }
    return render(request,'cargoapp/dashboard.html',context)

@login_required(login_url='login')
def driverDashboard(request):
    driver = Driver.objects.get(user=request.user.pk)

    if driver:
        #bookings = Bookings.objects.filter(user=request.user)
        trips = Trip.objects.filter(Q(departure_time__gte=datetime.now()) | Q(driver__car_space__gte=F('space_left')) | Q(space_left__lte=5000))[0:5]
        mytrips = Trip.objects.filter(driver=request.user.pk).annotate(total_gains=Sum('booking__price')).annotate(total_bookings=Count('booking'))
        
        

        print(mytrips)
        context = {
            "trips":trips, 
            "mytrips":mytrips    
        }
        return render(request,'cargoapp/driverdashboard.html',context)
    
    return HttpResponse("You are unauthorized")

@login_required(login_url='login')
def trips(request):
    trips = Trip.objects.filter(Q(departure_time__gte=datetime.now()) | Q(driver__car_space__gte=F('space_left')) | Q(space_left__lte=5000))

    context = {
        "trips":trips
    }
 
    trips = Trip.objects.filter(Q(departure_time__gte=datetime.now()) | Q(driver__car_space__gte=F('space_left')) | Q(space_left__lte=5000))
    return render(request,'cargoapp/trips.html',context)

@login_required(login_url='login')
def search(request):
    query = request.GET.get('q')
    queryset = ''
    if query:
        queryset = Trip.objects.filter(
            Q(departure_time__gte=datetime.now()) | Q(driver__car_space__gte=F('space_left')) | Q(space_left__lte=5000)|
        Q(destination__icontains = query)|
        Q(location__icontains = query)
        )
    context = {
        'trips':queryset,
        'count':len(queryset),
        'query':query,
    }
    return render(request,'cargoapp/trips.html',context)

@login_required(login_url='login')
def tripDetail(request, trip_id):
    trip = get_object_or_404(Trip, pk=trip_id)
    context = {
        'trip':trip,
    }
    return render(request,'cargoapp/tripdetails.html',context)

@login_required(login_url='login')
def book(request,trip_id):
    form = BookingForm()
    trip = get_object_or_404(Trip, pk=trip_id)
    if request.method == 'POST':
        form = BookingForm(request.POST or None)

        if form.is_valid():
            form.instance.passenger = request.user
            form.instance.trip = trip
            form.instance.price = form.instance.cargo_size * 1.2
            trip.space_left = trip.space_left - form.instance.cargo_size
            trip.save()
            bid = form.save()         
            return redirect('dashboard')
    else:
        context = {
            'form':form,
            'trip':trip,
        }
    return render(request,'cargoapp/book.html',context)


@login_required(login_url='login')
def createTrip(request):
    form = TripForm()
    if request.method == 'POST':
        form = TripForm(request.POST or None)
        if form.is_valid():
            trip = form.save()

            return redirect('dashboard')
    else:

        context = {
            'form':form,            
        }
    return render(request,'cargoapp/createtrip.html',context)

@login_required(login_url='login')
def registerDriver(request):
    form = DriverForm()
    if request.method == 'POST':
        form = DriverForm(request.POST or None)
        if form.is_valid():
            form.instance.user = request.user
            try:
                driver = form.save()
            except Exception as e:
                return HttpResponse('<b style="font-size:2rem;">You are already a driver</b>')
            return redirect('dashboard')
    else:
        context = {
            'form':form,            
        }
    return render(request,'cargoapp/registerdriver.html',context)


@login_required(login_url='login')
def editBooking(request, booking_id):
    try:
        booking = Booking.objects.get(pk=booking_id)
    except Booking.DoesNotExist:
        booking = None
    
    form = BookingForm(instance=booking)
    if request.method == 'POST':
        form =  BookingForm(request.POST or None,instance=booking)
        if form.is_valid():
            #recalculate space
            trip = booking.trip
            print("hereeee")
            print(trip)
            form.instance.price = form.instance.cargo_size * 1.2
            trip.space_left = (trip.space_left + booking.cargo_size) - form.instance.cargo_size
            
            trip.save()
            form.save()
            return redirect('dashboard')

    else:
        form = BookingForm(instance=booking)
    context = {
        'form':form,
    }
    return render(request,'cargoapp/edit_booking.html',context)


@login_required(login_url='login')
def cancelBooking(request, booking_id):
    booking = Booking.objects.get(id=booking_id)
    if request.method == 'GET':
        #recalculate space
        trip = booking.trip
        trip.space_left = (trip.space_left + booking.cargo_size) 
        trip.save()
        booking.delete()
        return redirect('dashboard')

    context = {
        'booking':booking
    }
    return render(request,'cargoapp/delete.html',context)

#ajax
@login_required(login_url='login')
def acceptTrip(request, trip_id):
    trip = Trip.objects.get(id=trip_id)
    
    if request.method == 'GET':
        trip.driver = request.user.driver
        print(trip)
        current_space = Booking.objects.filter(trip=trip).aggregate(used_space=Sum('cargo_size'))['used_space']
        print(current_space)
        print("heeeeeeeeeeeerrrr")
        if current_space:
            trip.space_left = trip.driver.car_space - current_space
        else:
            trip.space_left = trip.driver.car_space
        trip.save()
        return redirect('driver_dashboard')

    return redirect('driver_dashboard')
#ajax
@login_required(login_url='login')
def unacceptTrip(request, trip_id):
    trip = Trip.objects.get(id=trip_id)

    if request.method == 'GET':
        if trip.driver == request.user.driver:
            trip.driver = None
            trip.save()
            return redirect('driver_dashboard')

    return redirect('dashboard')
#ajax
@login_required(login_url='login')
def endTrip(request, trip_id):
    trip = Trip.objects.get(id=trip_id)
    if request.method == 'POST' and trip.driver == request.user:
        trip.delete()
        return redirect('dashboard')

@unauthenticated_user
def register(request):
    form = CreateUserForm()
        
    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = False
            user.save()
            return redirect('send_activation')

    context = {
        'form':form,
    }
    return render(request,'cargoapp/register.html',context)

@unauthenticated_user
def send_activation(request):
    form = ActivationForm()
        
    if request.method == 'POST':
        form = ActivationForm(request.POST)
        if form.is_valid():
            
            email = form.cleaned_data.get('email')
            print(email)
            user = get_object_or_404(User, email=email)
            if user is not None:
                if user.is_active == False:
                    current_site = get_current_site(request)
                
                    subject = 'Email activation from CargoLink'
                    message = render_to_string('cargoapp/acc_active_email.html', {
                        'user': user,
                        'domain': current_site.domain,
                        'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                        'token': default_token_generator.make_token(user),
                    })
                    from_email = settings.EMAIL_HOST_USER
                    to_email = [user.email,]

                    send_mail(subject, message,from_email,to_email,fail_silently=True)
                    messages.success(request,  email + 'has been confirmed sucessfully')
            return HttpResponse('Please confirm your email address to complete the registration')
        else:
            for msg in form.error_messages:
                messages.error(request, f"{msg}: {form.error_messages[msg]}")

    context = {
        'form':form,
    }
    return render(request,'cargoapp/activation.html',context)


@unauthenticated_user
def activate(request, uidb64, token):
    try:
        uid = force_bytes(urlsafe_base64_decode(uidb64))
        user = User._default_manager.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
        
    if user is not None and default_token_generator.check_token(user, token):
        user.is_active = True
        user.save()
        return redirect('login')
    else:
        return HttpResponse('Activation link is invalid!')

@unauthenticated_user
def loginPage(request):
    if request.method == 'POST':   
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            print("first")
            if user.is_active == True:
                login(request, user)
                return redirect('dashboard')
            else:
                messages.info(request, 'Your account has not been activated')
                return redirect('send_activation')
        else:
            print("second")
            messages.info(request, 'Email or password is incorrect')
    return render(request,'cargoapp/login.html',{})

@login_required(login_url='login')
def logoutUser(request):
    logout(request)
    return redirect('login')

@login_required(login_url='login')
def change_password(request):
    
    if request.method == 'POST':
        
        form = PasswordChangeForm(data=request.POST,user=request.user)
        if form.is_valid():
            form.save()
            messages.info(request, 'Your password has been changed sucessfully')   
            return redirect('dashboard')
    else:
        form = PasswordChangeForm(user=request.user)

    context = {
        'form':form
    }
    return render(request,'cargoapp/password_change.html',context)
           
