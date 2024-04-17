from django.db import models

# Create your models here.
class Company(models.Model):
  name = models.CharField(max_length=255)
  description = models.TextField()
  city = models.CharField(max_length=255)
  address = models.TextField()
  def __str__(self):
      return self.name
class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    def __str__(self):
        return self.name
    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'salary': str(self.salary),  # Convert DecimalField to string
            'company': self.company.name  # Assuming company has a name field
        }