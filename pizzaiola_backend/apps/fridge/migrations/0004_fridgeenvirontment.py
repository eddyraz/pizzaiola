# Generated by Django 2.2.11 on 2020-04-05 20:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fridge', '0003_measureunit_abreviature'),
    ]

    operations = [
        migrations.CreateModel(
            name='FridgeEnvirontment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('temperature', models.DecimalField(decimal_places=1, default=25.0, max_digits=3)),
                ('temperature_unit', models.CharField(choices=[('F°', 'Fahrenheit'), ('C°', 'Celsius')], max_length=20)),
            ],
        ),
    ]
