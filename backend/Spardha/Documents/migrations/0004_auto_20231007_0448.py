# Generated by Django 3.2.12 on 2023-10-06 23:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Documents', '0003_auto_20230922_1435'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='document',
            name='user_id',
        ),
        migrations.AddField(
            model_name='document',
            name='username',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='document',
            name='verified_by',
            field=models.CharField(blank=True, default='', max_length=100),
            preserve_default=False,
        ),
    ]