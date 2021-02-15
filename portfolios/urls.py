from rest_framework import routers
from .api import SongViewSet, PortfolioViewSet

router = routers.DefaultRouter()
router.register('api/songs', SongViewSet, 'songs')
router.register('api/portfolio', PortfolioViewSet, 'portolio')

urlpatterns = router.urls