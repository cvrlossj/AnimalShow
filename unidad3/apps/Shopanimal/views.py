from django.shortcuts import render

# Create your views here.

def cargarInicio(request):
    return render(request,"inicio.html")

def cargarContacto(request):
    return render(request,"contacto.html")