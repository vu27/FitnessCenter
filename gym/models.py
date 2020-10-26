from django.db import models


class MembershipTier(models.Model):
    tier_name = models.CharField(primary_key=True)
    name = models.CharField(max_length=30)
    price = models.FloatField(max_length=None)


class Member(models.Model):
    member_id = models.IntegerField(primary_key=True, max_length=None)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=75)
    is_account_active = models.BooleanField(default=True)
    total_paid = models.FloatField(max_length=None)
    tier_name = models.ForeignKey(MembershipTier, on_delete=models.CASCADE)


class Facility(models.Model):
    facility_name = models.CharField(primary_key=True, max_length=75)
    tier_name = models.ManyToManyField(MembershipTier)


class Employee(models.Model):
    employee_id = models.IntegerField(primary_key=True, max_length=None)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    phone = models.IntegerField(max_length=12)
    facility = models.ForeignKey(Facility, on_delete=models.CASCADE)


class Job(models.Model):
    job_code = models.IntegerField(primary_key=True, max_length=25)
    description = models.CharField(max_length=500)
    salary = models.FloatField(max_length=None)
    employee_id = models.ForeignKey(Employee, on_delete=models.CASCADE)


class Equipment(models.Model):
    equip_name = models.IntegerField(primary_key=True, max_length=75)
    price = models.FloatField(max_length=None)
    quantity = models.IntegerField(max_length=500)
    facility_name = models.ForeignKey(Facility, on_delete=models.CASCADE)