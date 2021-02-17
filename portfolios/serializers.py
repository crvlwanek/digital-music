from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Song


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email')


class SongSerializer(serializers.ModelSerializer):
  owner = UserSerializer()

  class Meta:
    model = Song
    fields = '__all__'

class PortfolioSerializer(serializers.ModelSerializer):
  class Meta:
    model = Song
    fields = '__all__'
        