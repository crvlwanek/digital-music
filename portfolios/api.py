from rest_framework import viewsets, permissions
from .models import Song
from .serializers import SongSerializer


class SongViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    serializer_class = SongSerializer
    queryset = Song.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

