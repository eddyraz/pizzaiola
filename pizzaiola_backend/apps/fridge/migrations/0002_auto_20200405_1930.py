# Generated by Django 2.2.11 on 2020-04-05 19:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('fridge', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='MeasureUnit',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='Please type a new Measure', max_length=50)),
                ('description', models.TextField(blank=True, null=True)),
            ],
            options={
                'db_table': 'measure_units',
                'verbose_name': 'MeasureUnit',
                'managed': True,
                'verbose_name_plural': 'MeasureUnits',
            },
        ),
        migrations.AddField(
            model_name='stock',
            name='measure_unit',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.DO_NOTHING, to='fridge.MeasureUnit'),
        ),
    ]
