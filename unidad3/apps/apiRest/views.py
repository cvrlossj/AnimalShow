from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from apps.Shopanimal.models import Producto
from rest_framework import status
# Create your views here.

class ObtenerProductos(View):
    def get(self,request):
        productos = Producto.objects.all()
        return JsonResponse(list(productos.values()),safe=False)



class ActualizarStock(View):
    def put(self, request, sku):
        # Obtener el producto correspondiente al SKU
        try:
            producto = Producto.objects.get(sku=sku)
        except Producto.DoesNotExist:
            return JsonResponse({'error': 'Producto no encontrado'}, status=404)

        # Actualizar el stock del producto
        cantidad = request.POST.get('cantidad')
        if cantidad:
            producto.stock -= int(cantidad)
            producto.save()
            return JsonResponse({'message': 'Stock actualizado correctamente'})
        else:
            return JsonResponse({'error': 'Cantidad no proporcionada'}, status=400)

class ActualizarStock(APIView):
    def get(self, request, sku):
        try:
            producto = Producto.objects.get(sku=sku)
        except Producto.DoesNotExist:
            return Response({"error": "Producto no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        
        # Return the product information
        data = {
            "sku": producto.sku,
            "nombre": producto.nombre,
            "precio": producto.precio,
            "descripcion": producto.descripcion,
            "stock": producto.stock,
            "id_categoria": producto.id_categoria.id_categoria,
            "id_proveedor": producto.id_proveedor.id_proveedor,
            "imagen": producto.imagen.url,
        }
        return Response(data, status=status.HTTP_200_OK)
        
    
    def put(self, request, sku):
        try:
            producto = Producto.objects.get(sku=sku)
        except Producto.DoesNotExist:
            return Response({"error": "Producto no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        
        cantidad = request.data.get("cantidad")
        if cantidad is None:
            return Response({"error": "Se requiere la cantidad"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Update the stock of the product
        producto.stock -= int(cantidad)
        producto.save()
        
        # Return a response indicating successful stock update
        return Response({"message": "Stock actualizado correctamente"}, status=status.HTTP_200_OK)