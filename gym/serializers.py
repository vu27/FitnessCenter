from rest_framework import serializers
from . import models


class MembershipTierSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.MembershipTier
        fields = "__all__"


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Member
        fields = "__all__"


class FacilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Facility
        fields = "__all__"


class SharedFacilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SharedFacility
        fields = "__all__"


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Employee
        fields = "__all__"


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Job
        fields = "__all__"


class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Equipment
        fields = "__all__"