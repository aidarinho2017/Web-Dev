from django.urls import path
from . import views

urlpatterns = [
    path('', views.members, name='members'),
]

#Aidar 12345677