from django.urls import path
from . import views


urlpatterns = [
    path('productos/', views.ObtenerProductos.as_view()),
    path('productos/<int:sku>/', views.ActualizarStock.as_view(), name='actualizar-stock'),
    path('usuarios/',views.ObtenerUsuarios.as_view())
    
]
