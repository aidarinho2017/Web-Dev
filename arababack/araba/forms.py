from django import forms
from .models import Advertisement, SolarPanel


class AdvertisementForm(forms.ModelForm):
    class Meta:
        model = Advertisement
        fields = '__all__'

class SolarPanelForm(forms.ModelForm):
    class Meta:
        model = SolarPanel
        fields = '__all__'