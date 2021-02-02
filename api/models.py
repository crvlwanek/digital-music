from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Song(models.Model):
    name = models.CharField(max_length=50)
    src = models.URLField()
    img = models.URLField(null=True, blank=True)

class Portfolio(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    songs = models.ManyToManyField(Song)
    bio = models.CharField(max_length=300, null=True, blank=True)


