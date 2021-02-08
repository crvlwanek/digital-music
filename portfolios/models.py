from django.db import models
from django.contrib.auth.models import User


class Song(models.Model):
    name = models.CharField(max_length=40)
    url = models.URLField()
    image = models.URLField(blank=True)
    owner = models.ForeignKey(
        User, related_name="songs", on_delete=models.CASCADE, 
        null=True, blank=True)

    def __str__(self):
        return self.name
        
 