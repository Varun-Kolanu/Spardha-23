# Generated by Django 3.2.12 on 2023-08-25 09:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Documents', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='document',
            name='verification_time',
            field=models.DateTimeField(default=None),
        ),
        migrations.AlterField(
            model_name='document',
            name='verified_by',
            field=models.CharField(default=None, max_length=100),
        ),
    ]
