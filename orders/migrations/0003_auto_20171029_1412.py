# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-29 08:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0002_auto_20171029_1412'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productinbasket',
            name='session_key',
            field=models.CharField(blank=True, default=None, max_length=128, null=True),
        ),
    ]
