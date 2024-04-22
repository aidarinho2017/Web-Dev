# models.py
from django.db import models

class Car(models.Model):
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    color = models.CharField(max_length=50)
    mileage = models.DecimalField(max_digits=10, decimal_places=2)
    engine_size = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.year} {self.make} {self.model}"

class Charging(models.Model):


    make = models.CharField(max_length=100, default='Tesla')
    model = models.CharField(max_length=100)
    charging_time = models.PositiveIntegerField()
    charging_cost = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.make} {self.model}'

class Article(models.Model):
    title = models.TextField()
    content = models.TextField()

    def __str__(self):
        return f'{self.title}'

class Manufacturer(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)

class Accessory(models.Model):
    name = models.CharField(max_length=100)
    car = models.ForeignKey(Car, on_delete=models.CASCADE, default="Universal")
    manufacturer = models.ForeignKey(Manufacturer, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True)
