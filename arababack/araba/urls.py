from django.urls import path
from . import views

urlpatterns = [
    path('', views.advertisement_list, name='advertisement_list'),
    path('create/', views.create_advertisement, name='create_advertisement'),
    path('<int:pk>/', views.advertisement_detail, name='advertisement_detail'),
    path('<int:pk>/update/', views.update_advertisement, name='update_advertisement'),
    path('<int:pk>/delete/', views.delete_advertisement, name='delete_advertisement'),
    path('solar/', views.solarpanel_list, name='solar')
]
