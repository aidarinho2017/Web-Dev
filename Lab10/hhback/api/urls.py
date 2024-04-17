from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.AllCompanies.as_view(), name='all_companies'),  # views.all_companies
    path('companies/<int:company_id>/', views.company, name='company'),
    path('companies/<int:company_id>/vacancies/', views.vacancies_by_company, name='vacancies_by_company'),
    path('vacancies/', views.all_vacancies, name='all_vacancies'),
    path('vacancies/<int:vacancy_id>/', views.vacancy, name='vacancy'),
    path('vacancies/top_ten/', views.top_ten_vacancies, name='top_ten_vacancies')
]