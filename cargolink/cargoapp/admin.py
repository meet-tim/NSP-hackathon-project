from django.contrib import admin
from .models import Driver,Trip,Booking

admin.site.register(Booking)
admin.site.register(Trip)
admin.site.register(Driver)