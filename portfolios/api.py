from rest_framework import viewsets, permissions
from .models import Song
from .serializers import SongSerializer


class SongViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = SongSerializer

    def get_queryset(self):
        return self.request.user.songs.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

