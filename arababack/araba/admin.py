from django.contrib import admin

from araba.models import Car, Advertisement, SolarPanel

# Register your models here.
admin.site.register(Car)
admin.site.register(Advertisement)
admin.site.register(SolarPanel)