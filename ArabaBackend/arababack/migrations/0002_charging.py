# Generated by Django 5.0.4 on 2024-04-15 15:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('arababack', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Charging',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('make', models.CharField(default='Tesla', max_length=100)),
                ('model', models.CharField(max_length=100)),
                ('charging_time', models.PositiveIntegerField()),
                ('charging_cost', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
    ]
