from django.db import models
from django.contrib.auth.models import User

# Create your models here.

    
class Driver(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    firstname = models.CharField(max_length=200, )
    lastname =  models.CharField(max_length=200,)
    phone = models.PositiveIntegerField(max_length=200, )
    driver_license = models.CharField(max_length=200)
    passport_pic = models.ImageField(upload_to='images/', )
    national_id = models.CharField(max_length=200)
    car_number = models.CharField(max_length=200, )
    car_picture = models.ImageField(upload_to='images/', )
    car_space = models.PositiveIntegerField(max_length=100)


    def __str__(self):
        return self.name
    

class Trip (models.Model):
    driver = models.ForeignKey(Driver, on_delete=models.CASCADE, related_name='trips_offered',null=True,blank=True)
    departure_location = models.CharField(max_length=255)
    destination = models.CharField(max_length=255)
    departure_time = models.DateTimeField()

    space_left = models.PositiveIntegerField(max_length=5000,default=5000)
    created_at = models.DateTimeField(auto_now_add=True)    

    def __str__(self):
        return f"Trip from {self.departure_location} to {self.destination}"

    class Meta:
        ordering = ['-departure_time']
        
class Booking (models.Model):
    passenger = models.ForeignKey(User,on_delete=models.CASCADE)
    trip = models.ForeignKey(Trip,on_delete=models.CASCADE)
    phone = models.PositiveIntegerField(max_length=200, )
    full_name = models.CharField(max_length=100)
    id_number = models.CharField(max_length=100)
    cargo_size = models.PositiveIntegerField(max_length=100)
    price = models.PositiveIntegerField(max_length=100)
    