# Generated by Django 4.2.1 on 2023-06-24 18:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Shopanimal', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='id_usuario',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]