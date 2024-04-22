from django.shortcuts import render

# views.py
from rest_framework import viewsets
from .models import Car, Charging, Article, Accessory
from .serializers import CarSerializer, ChargingSerializer, ArticleSerializer, ManufacturerSerializer, AccessorySerializer


class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

class ChargingViewSet(viewsets.ModelViewSet):
    queryset = Charging.objects.all()
    serializer_class = ChargingSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class AccessoryViewSet(viewsets.ModelViewSet):
    queryset = Accessory.objects.all()
    serializer_class = AccessorySerializer
