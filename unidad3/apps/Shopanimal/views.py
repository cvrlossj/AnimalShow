from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *
import os
from django.conf import settings
from django.core.exceptions import ValidationError
# Create your views here.


def cargarInicio(request):
    tipoUsuario = request.session.get('tipoUsuario', None)
    productos = Producto.objects.filter(stock__gt=0)
    categoria_perros = Producto.objects.filter(id_categoria=1)
    categoria_gatos = Producto.objects.filter(id_categoria=2)
    return render(request, "inicio.html", {"prod": productos, "cat_perros": categoria_perros, "cat_gatos": categoria_gatos, "tipoUsuario":tipoUsuario})


def cargarAgregarProducto(request):
    tipoUsuario = request.session.get('tipoUsuario', None)
    categorias = Categoria.objects.all()
    proveedores = Proveedor.objects.all()
    productos = Producto.objects.all()
    return render(request, "agregarProd.html", {"cate": categorias, "prove": proveedores, "prod": productos, "tipoUsuario":tipoUsuario})


def agregarProducto(request):
    p_sku = request.POST['txtSku']
    p_nombre = request.POST['txtProducto']
    p_precio = request.POST['txtPrecio']
    p_descripcion = request.POST['txtDesc']
    p_stock = request.POST['txtStock']
    p_categoria = Categoria.objects.get(id_categoria=request.POST['cmbCat'])
    p_proveedor = Proveedor.objects.get(id_proveedor=request.POST['cmbPro'])
    p_img = request.FILES['txtImagen']

    Producto.objects.create(sku=p_sku, nombre=p_nombre, precio=p_precio, descripcion=p_descripcion,
                            stock=p_stock, id_categoria=p_categoria, id_proveedor=p_proveedor, imagen=p_img)

    return redirect('/lista')


def cargarListaProdAdministrador(request):
    categorias = Categoria.objects.all()
    proveedores = Proveedor.objects.all()
    productos = Producto.objects.all()
    return render(request, "productos_admin.html", {"cate": categorias, "prove": proveedores, "prod": productos})


def cargarEditarProducto(request, sku):
    tipoUsuario = request.session.get('tipoUsuario', None)
    productos = Producto.objects.get(sku=sku)
    categorias = Categoria.objects.all()
    proveedores = Proveedor.objects.all()
    return render(request, "editarProd.html", {"prod": productos, "cate": categorias, "prove": proveedores, "tipoUsuario":tipoUsuario})


def editarProducto(request):
    p_sku = request.POST['txtSku']
    productoBD = Producto.objects.get(sku=p_sku)
    p_nombre = request.POST['txtProducto']
    p_precio = request.POST['txtPrecio']
    p_descripcion = request.POST['txtDesc']
    p_stock = request.POST['txtStock']
    p_categoria = Categoria.objects.get(id_categoria=request.POST['cmbCat'])
    p_proveedor = Proveedor.objects.get(id_proveedor=request.POST['cmbPro'])

    try:
        p_img = request.FILES['txtImagen']
        ruta_imagen = os.path.join(
            settings.MEDIA_ROOT, str(productoBD.imagen))
        os.remove(ruta_imagen)
    except:
        p_img = productoBD.imagen

    productoBD.nombre = p_nombre
    productoBD.stock = p_stock
    productoBD.precio = p_precio
    productoBD.descripcion = p_descripcion
    productoBD.imagen = p_img
    productoBD.id_categoria = p_categoria
    productoBD.id_proveedor = p_proveedor

    productoBD.save()

    return redirect('/lista')


def eliminarProducto(request, sku):
    producto = Producto.objects.get(sku=sku)
    ruta_imagen = os.path.join(settings.MEDIA_ROOT, str(producto.imagen))
    os.remove(ruta_imagen)
    producto.delete()
    return redirect('/lista')


def cargarListaCategorias(request):
    tipoUsuario = request.session.get('tipoUsuario', None)
    categorias = Categoria.objects.all()
    return render(request, "agregarCat.html", {"lcate": categorias, "tipoUsuario":tipoUsuario})


def agregarCategorias(request):
    c_id = request.POST['txtID']
    c_nombre = request.POST['txtCategoria']
    c_descripcion = request.POST['txtDescripcion']

    Categoria.objects.create(
        id_categoria=c_id, nombre_categoria=c_nombre, descripcion=c_descripcion)

    return redirect('/categorias')


def cargarEditarCategoria(request, id_categoria):
    tipoUsuario = request.session.get('tipoUsuario', None)
    categorias = Categoria.objects.get(id_categoria=id_categoria)
    return render(request, "editarCat.html", {"cate": categorias, "tipoUsuario":tipoUsuario})


def editarCategoria(request):
    c_id = request.POST['txtID']
    categoriaBD = Categoria.objects.get(id_categoria=c_id)
    c_nombre = request.POST['txtCategoria']
    c_descripcion = request.POST['txtDescripcion']

    categoriaBD.nombre_categoria = c_nombre
    categoriaBD.descripcion = c_descripcion

    categoriaBD.save()

    return redirect('/categorias')


def eliminarCategoria(request, id_categoria):
    categoria = Categoria.objects.get(id_categoria=id_categoria)
    categoria.delete()
    return redirect('/categorias')


def cargarListaProveedores(request):
    tipoUsuario = request.session.get('tipoUsuario', None)
    proveedores = Proveedor.objects.all()
    return render(request, "agregarProv.html", {"lprove": proveedores, "tipoUsuario":tipoUsuario})


def agregarProveedores(request):
    p_id = request.POST['txtID']
    p_nombre = request.POST['txtNombre']
    p_email = request.POST['txtEmail']
    p_telefono = request.POST['txtTel']
    p_ciudad = request.POST['txtCiudad']

    Proveedor.objects.create(id_proveedor=p_id, nombre_proveedor=p_nombre,
                             email=p_email, telefono=p_telefono, ciudad=p_ciudad)

    return redirect('/proveedores')


def editarProveedores(request):
    p_id = request.POST['txtID']
    proveedoresBD = Proveedor.objects.get(id_proveedor=p_id)
    p_nombre = request.POST['txtNombre']
    p_email = request.POST['txtEmail']
    p_telefono = request.POST['txtTel']
    p_ciudad = request.POST['txtCiudad']

    proveedoresBD.nombre_proveedor = p_nombre
    proveedoresBD.email = p_email
    proveedoresBD.telefono = p_telefono
    proveedoresBD.ciudad = p_ciudad

    proveedoresBD.save()

    return redirect('/proveedores')


def cargarEditarProveedores(request, id_proveedor):
    proveedores = Proveedor.objects.get(id_proveedor=id_proveedor)
    return render(request, "editarProv.html", {"prove": proveedores,})


def cargarContacto(request):
    tipoUsuario = request.session.get('tipoUsuario', None)
    return render(request, "contacto.html", {"tipoUsuario":tipoUsuario})


def cargarTienda(request):
    tipoUsuario = request.session.get('tipoUsuario', None)
    productos = Producto.objects.all()
    categoria_perros = Producto.objects.filter(id_categoria=1)
    categoria_gatos = Producto.objects.filter(id_categoria=2)
    return render(request, "tienda.html", {"prod": productos, "cat_perros": categoria_perros, "cat_gatos": categoria_gatos, "tipoUsuario":tipoUsuario})


def cargarRegistrarse(request):
    tipoUsuario = request.session.get('tipoUsuario', None)
    tipoUser = TipoUsuario.objects.all()
    return render(request, "registrarse.html", {"tipo":tipoUser, "tipoUsuario":tipoUsuario})


def agregarUsuario(request):
    u_nombre = request.POST['txtNombre']
    u_apellido = request.POST['txtApellido']
    u_rut = request.POST['txtRut']
    u_email = request.POST['txtEmail']
    u_telefono = request.POST['txtTelefono']
    u_contrasenia = request.POST['txtPassword']

    Usuario.objects.create(nombre=u_nombre, apellido=u_apellido, rut=u_rut,
                           email=u_email, telefono=u_telefono, contrasenia=u_contrasenia)

    return redirect('/login')


def cargarLogin(request):
    tipoUsuario = request.session.get('tipoUsuario', None)
    return render(request, "login.html", {"tipoUsuario":tipoUsuario})


def iniciarSesion(request):
    if request.method == 'POST':
            email = request.POST.get('txtEmail')
            password = request.POST.get('txtPassword')

            usuarios = Usuario.objects.filter(email=email)
            if usuarios.exists():
                usuario = usuarios.first()
                if usuario.contrasenia == password:
                    # Las credenciales son correctas, puedes iniciar sesión
                    request.session['tipoUsuario'] = usuario.id_tipo.nombre_tipo
                    if usuario.id_tipo.id_tipo == 2:
                        return redirect('/')  # Redirige a la página de inicio o a la que desees
                    else:
                        return redirect('/lista')
                else:
                    # La contraseña es incorrecta
                    mensaje = 'Contraseña incorrecta'
                    return render(request, 'login.html', {'mensaje': mensaje, 'correo': correo})
            else:
                # El correo no está registrado en el sistema
                mensaje = 'El correo no está registrado'
                return render(request, 'login.html', {'mensaje': mensaje, 'correo': correo})


def cerrarSesion(request):
    request.session['tipoUsuario'] = None
    return redirect('/login')



