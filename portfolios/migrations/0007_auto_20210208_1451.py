# Generated by Django 3.1.5 on 2021-02-08 20:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolios', '0006_auto_20210208_1429'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='song',
            name='audio',
        ),
        migrations.AddField(
            model_name='song',
            name='url',
            field=models.URLField(default=' '),
            preserve_default=False,
        ),
    ]