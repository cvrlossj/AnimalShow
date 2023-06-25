from django.db import models

# Create your models here.


class UsuarioRol(models.Model):
    id_rol = models.IntegerField(primary_key=True)
    rol = models.CharField(max_length=100)

    def __str__(self):
        txt = "Rol: {0} - id: {1}"
        return txt.format(self.rol, self.id_rol)


class Usuario(models.Model):
    id_usuario = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    rut = models.CharField(max_length=30)
    email = models.CharField(max_length=100)
    telefono = models.CharField(max_length=50)
    contrasenia = models.CharField(max_length=100)
    id_rol = models.ForeignKey(UsuarioRol, on_delete=models.CASCADE, default=2)

    def __str__(self):
        txt = "Nombre: {0} - id: {1}"
        return txt.format(self.nombre, self.id_usuario)


class Categoria(models.Model):
    id_categoria = models.IntegerField(primary_key=True)
    nombre_categoria = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=100)

    def __str__(self):
        txt = "{0}"
        return txt.format(self.nombre_categoria)


class Proveedor(models.Model):
    id_proveedor = models.IntegerField(primary_key=True)
    nombre_proveedor = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    telefono = models.CharField(max_length=50)
    ciudad = models.CharField(max_length=100)

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
