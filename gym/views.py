from gym.models import MembershipTier
from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import MembershipTier
from .serializers import MembershipTierSerializer


def home_view(request):
    return render(request, "home.html")


class MembershipTierViewset(viewsets.ModelViewSet):
    queryset = MembershipTier.objects.all()

    permission_classes = [permissions.AllowAny]
    serializer_class = MembershipTierSerializer