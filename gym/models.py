from django.db import models


class MembershipTier(models.Model):
    tier_name = models.CharField(primary_key=True, max_length=30)
    name = models.CharField(max_length=30)
    price = models.FloatField(max_length=None)

    class Meta:
        db_table = "membership_tier"


class Member(models.Model):
    member_id = models.IntegerField(primary_key=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=75)
    is_account_active = models.BooleanField(default=True)
    total_paid = models.FloatField(max_length=None)
    tier_name = models.ForeignKey(MembershipTier, on_delete=models.CASCADE)

    class Meta:
        db_table = "member"


class Facility(models.Model):
    facility_name = models.CharField(primary_key=True, max_length=75)
    tier_name = models.ManyToManyField(MembershipTier)

    class Meta:
        db_table = "facility"


class Employee(models.Model):
    employee_id = models.IntegerField(primary_key=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    phone = models.IntegerField()
    facility = models.ForeignKey(Facility, on_delete=models.CASCADE)

    class Meta:
        db_table = "employee"


class Job(models.Model):
    job_code = models.IntegerField(primary_key=True)
    description = models.CharField(max_length=255)
    salary = models.FloatField(max_length=None)
    employee_id = models.ForeignKey(Employee, on_delete=models.CASCADE)

    class Meta:
        db_table = "job"


class Equipment(models.Model):
    equip_name = models.IntegerField(primary_key=True)
    price = models.FloatField(max_length=None)
    quantity = models.IntegerField()
    facility_name = models.ForeignKey(Facility, on_delete=models.CASCADE)

    class Meta:
        db_table = "equipment"