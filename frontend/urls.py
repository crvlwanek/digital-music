from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('login', index),
    path('register', index),
    path('songs', index),
    path('portfolios', index),
]
