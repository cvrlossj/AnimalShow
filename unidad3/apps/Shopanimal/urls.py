from django.urls import path
from . import views

urlpatterns = [
    path('',views.cargarInicio),
    path('contacto',views.cargarContacto)
]
