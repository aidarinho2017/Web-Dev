from django.contrib import admin

from arababack.models import Car, Charging, Article, Accessory, Manufacturer

admin.site.register(Car)
admin.site.register(Charging)
admin.site.register(Article)
admin.site.register(Accessory)
admin.site.register(Manufacturer)