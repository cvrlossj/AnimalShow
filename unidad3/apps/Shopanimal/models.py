from django.db import models

# Create your models here.


class Categoria(models.Model):
    id_categoria = models.IntegerField(primary_key=True)
    nombre_categoria = models.CharField(max_length=100)

    def __str__(self):
        txt = "{0}"
        return txt.format(self.nombre_categoria)


class Proveedor(models.Model):
    id_proveedor = models.IntegerField(primary_key=True)
    nombre_proveedor = models.CharField(max_length=100)

    def __str__(self):
        txt = "{0}"
        return txt.format(self.nombre_proveedor)


class Producto(models.Model):
    sku = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=50)
    precio = models.IntegerField()
    descripcion = models.CharField(max_length=200)
    stock = models.IntegerField()
    id_categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    id_proveedor = models.ForeignKey(Proveedor, on_delete=models.CASCADE)
    imagen = models.ImageField(upload_to='imagenesProducto')

    def __str__(self):
        txt = "N° {0} - Nombre: {1} - Stock: {2}"
        return txt.format(self.sku, self.nombre, self.stock)
