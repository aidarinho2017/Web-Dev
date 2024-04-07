from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages

from .models import Advertisement
from .forms import AdvertisementForm
from .models import SolarPanel
from .forms import SolarPanelForm

def solarpanel_list(request):
    solarpanels = SolarPanel.objects.all()
    return render(request, 'solarpanel_list.html', {'solarpanels': solarpanels})

def advertisement_list(request):
    advertisements = Advertisement.objects.all()
    return render(request, 'advertisement_list.html', {'advertisements': advertisements})

def advertisement_detail(request, pk):
    advertisement = get_object_or_404(Advertisement, pk=pk)
    return render(request, 'advertisement_detail.html', {'advertisement': advertisement})

def create_advertisement(request):
    if request.method == 'POST':
        form = AdvertisementForm(request.POST, request.FILES)
        if form.is_valid():
            advertisement = form.save(commit=False)
            advertisement.user = request.user
            advertisement.save()
            messages.success(request, 'Advertisement created successfully!')
            return redirect('advertisement_detail', pk=advertisement.pk)
    else:
        form = AdvertisementForm()
    return render(request, 'advertisement_form.html', {'form': form})

def update_advertisement(request, pk):
    advertisement = get_object_or_404(Advertisement, pk=pk)
    if advertisement.user != request.user:
        messages.error(request, 'You are not authorized to update this advertisement.')
        return redirect('advertisement_list')
    if request.method == 'POST':
        form = AdvertisementForm(request.POST, request.FILES, instance=advertisement)
        if form.is_valid():
            form.save()
            messages.success(request, 'Advertisement updated successfully!')
            return redirect('advertisement_detail', pk=advertisement.pk)
    else:
        form = AdvertisementForm(instance=advertisement)
    return render(request, 'advertisement_form.html', {'form': form})

def delete_advertisement(request, pk):
    advertisement = get_object_or_404(Advertisement, pk=pk)
    if advertisement.user != request.user:
        messages.error(request, 'You are not authorized to delete this advertisement.')
        return redirect('advertisement_list')
    advertisement.delete()
    messages.success(request, 'Advertisement deleted successfully!')
    return redirect('advertisement_list')