# Generated by Django 4.2.3 on 2023-07-11 23:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Shopanimal', '0005_rename_usuariorol_tipousuario_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='id_tipo',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, to='Shopanimal.tipousuario'),
        ),
    ]