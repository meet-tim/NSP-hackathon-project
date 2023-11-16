from django.urls import path
from . import views
from django.contrib.auth  import views as auth_views

urlpatterns = [
    path('dashboard/', views.dashboard, name="dashboard"),

    path('driverdashboard/', views.driverDashboard, name="driver_dashboard"),

    path('trips/', views.trips, name="trips"),

    path('drivertrips/', views.trips, name="trips"),

    path('trip/<int:trip_id>', views.tripDetail, name="trip-detail"),

    path('book/<int:trip_id>', views.book, name="book"),

    path('register/', views.register, name="register"),

    path('registerdriver/', views.registerDriver, name="become_driver"),

    path('activate/<uidb64>/<token>/',views.activate, name='activate'),

    path('activation_email/', views.send_activation, name="send_activation"),

    path('login/', views.loginPage, name="login"),

    path('logout/', views.logoutUser, name="logout"),

    #CRUD

    path('create_trip/', views.createTrip, name="create_trip"),

    path('update/<int:booking_id>', views.editBooking, name="edit-booking"),

    path('cancel-booking/<int:booking_id>', views.cancelBooking, name="delete-booking"),

    path('accept_trip/<int:trip_id>', views.acceptTrip, name="accept_trip"),

    path('unaccept_trip/<int:trip_id>', views.unacceptTrip, name="unaccept-trip"),

    path('delete/<int:trip_id>', views.endTrip, name="end-trip"),
    #change password
    path('password_change/', views.change_password,name='password_change'),

    #password reset
    path('reset_password/', auth_views.PasswordResetView.as_view(template_name='cargoapp/password_reset.html'),
    name='reset_password'),

    path('reset_password_sent/', auth_views.PasswordResetDoneView.as_view(template_name='cargoapp/password_reset_sent.html'),
    name='password_reset_done'),

    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name='cargoapp/password_reset_form.html'),
    name='password_reset_confirm'),

    path('reset_password_complete/', auth_views.PasswordResetCompleteView.as_view(template_name='cargoapp/password_reset_done.html'),
    name='password_reset_complete'),
]
