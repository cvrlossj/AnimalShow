from django.urls import path
from . import views

urlpatterns = [
    path('', views.cargarInicio),
    path('agregarproducto', views.cargarAgregarProducto),
    path('agregarProductoForm', views.agregarProducto),
    path('editarProducto/<sku>', views.cargarEditarProducto),
    path('editarProductoForm',views.editarProducto),
    path('eliminarProducto/<sku>',views.eliminarProducto),
    path('categorias',views.cargarListaCategorias),
    path('agregarCategoriaForm',views.agregarCategorias),
    path('editarCategoria/<id_categoria>', views.cargarEditarCategoria),
    path('editarCategoriaForm',views.editarCategoria),
    path('eliminarCategoria/<id_categoria>',views.eliminarCategoria),
    path('proveedores',views.cargarListaProveedores),
    path('contacto', views.cargarContacto),
    path('tienda', views.cargarTienda),
    path("registrarse", views.cargarRegistrarse),
    path("registrarUsuarioForm",views.agregarUsuario),
    path('login', views.cargarLogin),
    path('lista', views.cargarListaProdAdministrador),
]
