from django.shortcuts import render
from rest_framework import viewsets, permissions
from . import models
from . import serializers


def home_view(request):
    return render(request, "home.html")


# ViewSets
class MembershipTierViewset(viewsets.ModelViewSet):
    queryset = models.MembershipTier.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.MembershipTierSerializer


class MemberViewset(viewsets.ModelViewSet):
    queryset = models.Member.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.MemberSerializer


class FacilityViewset(viewsets.ModelViewSet):
    queryset = models.Facility.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.FacilitySerializer


class SharedFacilityViewset(viewsets.ModelViewSet):
    queryset = models.SharedFacility.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.SharedFacilitySerializer


class EmployeeViewset(viewsets.ModelViewSet):
    queryset = models.Employee.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.EmployeeSerializer


class JobViewset(viewsets.ModelViewSet):
    queryset = models.Job.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.JobSerializer


class EquipmentViewset(viewsets.ModelViewSet):
    queryset = models.Equipment.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.EquipmentSerializer
