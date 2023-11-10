from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
from cargoapp.models import Booking, Trip, Driver
import string

class DriverForm(ModelForm):
    class Meta:
        model = Driver
        exclude = ['user',]
        fields = '__all__'
        exclude = ['user','driver_license','passport_pic','car_picture']

        widgets = {
            'firstname': forms.TextInput(attrs={
                'class':'form-control',
                
                
                }),
            'lastname': forms.TextInput(attrs={
                'class':'form-control',
                
                
                }),
            'phone': forms.TextInput(attrs={
                'class':'form-control',
                
                
                }),
                'national_id': forms.TextInput(attrs={
                'class':'form-control',
                
                
                }),
             'car_number': forms.TextInput(attrs={
                'class':'form-control',
                'placeholder':'Number Plate'
                
                
                }),
            'car_space': forms.NumberInput(attrs={
                'class':'form-control',
                'placeholder':"Your Car's cargo space"
                
                }),

            
        }

class CreateUserForm(UserCreationForm):
    
    password1 = forms.CharField(
        label="Password",
        widget=forms.PasswordInput(attrs={'class':'form-control', 'type':'password', 'align':'center'}),
    )
    password2 = forms.CharField(
        label="Confirm password",
        widget=forms.PasswordInput(attrs={'class':'form-control', 'type':'password', 'align':'center'}),
    )

    def clean_email(self):
        if User.objects.filter(email=self.cleaned_data['email']).exists():
            raise forms.ValidationError("the given email is already registered")
        return self.cleaned_data['email']

    def clean_username(self):
        if User.objects.filter(username=self.cleaned_data['username']).exists():
            raise forms.ValidationError("the given username is already registered")
        elif  self.cleaned_data['username'].isdigit():
            raise forms.ValidationError("Username cant contain only numbers")
           
        return self.cleaned_data['username']

    class Meta:
        model = User
        fields = ['username','email','password1','password2']
        widgets = {
            'username': forms.TextInput(attrs={
                'class':'form-control',
                
                
                }),
            'email': forms.TextInput(attrs={
                'class':'form-control',
                
                
                }),
        }

     
class ActivationForm(ModelForm):
    class Meta:
        model = User
        fields = ['email']
        widgets = {
            'email': forms.TextInput(attrs={
                'class':'form-control',
                }),
        }

LOCATION = (
('Accra', 'Accra'),
('Kumasi', 'Kumasi'),
('Tamale', 'Tamale'),
('Takoradi', 'Takoradi'),
('Cape Coast', 'Cape Coast'),
('Sunyani', 'Sunyani'),
('Sekondi-Takoradi', 'Sekondi-Takoradi'),
('Obuasi', 'Obuasi'),
('Koforidua', 'Koforidua'),
('Techiman', 'Techiman'),
('Wa', 'Wa'),
('Ho', 'Ho'),
('Bolgatanga', 'Bolgatanga'),
('Wa', 'Wa'),
('Navrongo', 'Navrongo'),

)


class TripForm(ModelForm):
   
    departure_location = forms.ChoiceField(choices=LOCATION,label="From",widget=forms.Select(attrs={'class':'form-control'}))
    destination = forms.ChoiceField(choices=LOCATION,label="To",widget=forms.Select(attrs={'class':'form-control'}))

   
    departure_time = forms.DateField(widget=forms.DateInput(attrs={
        'type': 'date'
    }),label="Departure Date")
    
    
    
    class Meta:
        model = Trip
        fields = '__all__'
        exclude = ['driver','created_at','space_left']

class BookingForm(ModelForm):
    full_name = forms.CharField(label="Full name",widget=forms.TextInput(attrs={'class':'form-control'}))
    id_number = forms.CharField(label="National Id",widget=forms.TextInput(attrs={'class':'form-control'}))
    phone = forms.IntegerField(label="Phone",widget=forms.NumberInput(attrs={'class':'form-control'}))
    cargo_size = forms.IntegerField(label="Cargo Size",widget=forms.NumberInput(attrs={'class':'form-control'}))


    class Meta:
        model = Booking
        fields = '__all__'
        exclude = ['passenger','trip','price']
        