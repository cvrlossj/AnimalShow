from django.urls import path
from . import views

urlpatterns = [
    path('', views.cargarInicio),
    path('agregarproducto', views.cargarAgregarProducto),
    path('agregarProductoForm', views.agregarProducto),
    path('editarProducto/<sku>', views.cargarEditarProducto),
    path('editarProductoForm',views.editarProducto),
    path('eliminarProducto/<sku>',views.eliminarProducto),
    path('contacto', views.cargarContacto),
    path('tienda', views.cargarTienda),
    path("registrarse", views.cargarRegistrarse),
    path('login', views.cargarLogin),
    path('panel', views.cargarAdministrador),
    path('lista', views.cargarListaProdAdministrador)
]
