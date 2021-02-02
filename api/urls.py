from django.urls import path
from .views import SongView, PortfolioView

urlpatterns = [
    path('songs', SongView.as_view()),
    path('portfolios', PortfolioView.as_view()),
]
