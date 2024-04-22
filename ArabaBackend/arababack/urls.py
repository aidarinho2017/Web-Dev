# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CarViewSet, ChargingViewSet, ArticleViewSet, AccessoryViewSet

router = DefaultRouter()
router.register(r'cars', CarViewSet)
router.register(r'article', ArticleViewSet)
router.register(r'charging', ChargingViewSet)
router.register(r'accessory', AccessoryViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
