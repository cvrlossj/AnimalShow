from django.shortcuts import render

# Create your views here.


def cargarInicio(request):
    return render(request, "inicio.html")


def cargarContacto(request):
    return render(request, "contacto.html")


def cargarTienda(request):
    return render(request, "tienda.html")


def cargarRegistrarse(request):
    return render(request,"registrarse.html")

def cargarLogin(request):
    return render(request, "login.html")


def cargarAdministrador(request):
    return render(request,"panel.html")

def cargarAgregarProd(request):
    return render(request,"agregarProd.html")


def cargarListaProdAdministrador(request):
    return render(request, "productos_admin.html")

