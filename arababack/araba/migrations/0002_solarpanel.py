# Generated by Django 5.0.4 on 2024-04-06 15:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('araba', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SolarPanel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('make', models.CharField(max_length=100)),
                ('model', models.CharField(max_length=100)),
                ('year', models.IntegerField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('description', models.TextField(blank=True)),
            ],
        ),
    ]