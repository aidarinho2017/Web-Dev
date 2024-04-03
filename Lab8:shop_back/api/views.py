from django.forms import model_to_dict
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category
from django.template import loader

def members(request):
  template = loader.get_template('1.html')
  return HttpResponse(template.render())

def product_list(request):
    products = Product.objects.all()
    data = {'products': list(products.values())}
    return JsonResponse(data)

def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    data = {'product': model_to_dict(product)}
    return JsonResponse(data)

def category_list(request):
    categories = Category.objects.all()
    data = {'categories': list(categories.values())}
    return JsonResponse(data)

def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    data = {'category': model_to_dict(category)}
    return JsonResponse(data)

def products_by_category(request, id):
    category = get_object_or_404(Category, id=id)
    products = Product.objects.filter(category=category)
    data = {
        'category': model_to_dict(category),
        'products': list(products.values())
    }
    return JsonResponse(data)
