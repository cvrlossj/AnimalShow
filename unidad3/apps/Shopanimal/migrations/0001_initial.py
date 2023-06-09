# Generated by Django 4.2.1 on 2023-06-22 18:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id_categoria', models.IntegerField(primary_key=True, serialize=False)),
                ('nombre_categoria', models.CharField(max_length=100)),
                ('descripcion', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Proveedor',
            fields=[
                ('id_proveedor', models.IntegerField(primary_key=True, serialize=False)),
                ('nombre_proveedor', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('telefono', models.CharField(max_length=50)),
                ('ciudad', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='UsuarioRol',
            fields=[
                ('id_rol', models.IntegerField(primary_key=True, serialize=False)),
                ('rol', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id_usuario', models.IntegerField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
                ('apellido', models.CharField(max_length=50)),
                ('rut', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=100)),
                ('telefono', models.CharField(max_length=50)),
                ('contrasenia', models.CharField(max_length=100)),
                ('id_rol', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Shopanimal.usuariorol')),
            ],
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('sku', models.IntegerField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
                ('precio', models.IntegerField()),
                ('descripcion', models.CharField(max_length=200)),
                ('stock', models.IntegerField()),
                ('imagen', models.ImageField(upload_to='imagenesProducto')),
                ('id_categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Shopanimal.categoria')),
                ('id_proveedor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Shopanimal.proveedor')),
            ],
        ),
    ]
