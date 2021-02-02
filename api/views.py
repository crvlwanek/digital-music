from django.shortcuts import render

from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import SongSerializer, PortfolioSerializer
from .models import Song, Portfolio

# Create your views here.
class SongView(generics.CreateAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer


class PortfolioView(generics.CreateAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer


