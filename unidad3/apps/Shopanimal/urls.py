from django.urls import path
from . import views

urlpatterns = [
    path('', views.cargarInicio),
    path('contacto', views.cargarContacto),
    path('tienda', views.cargarTienda),
    path("registrarse", views.cargarRegistrarse),
    path('login', views.cargarLogin),
    path('panel', views.cargarAdministrador),
    path('agregarproducto', views.cargarAgregarProd),
    path('lista', views.cargarListaProdAdministrador)
]
