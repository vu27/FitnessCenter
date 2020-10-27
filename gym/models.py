from django.db import models

MAX_LENGTH = 75


class MembershipTier(models.Model):
    tier_code = models.AutoField(primary_key=True)
    tier_name = models.CharField(max_length=MAX_LENGTH)
    tier_price = models.FloatField(max_length=None)

    class Meta:
        db_table = "membership_tier"


class Member(models.Model):
    mem_id = models.AutoField(primary_key=True)
    mem_fname = models.CharField(max_length=MAX_LENGTH)
    mem_lname = models.CharField(max_length=MAX_LENGTH)
    mem_email = models.EmailField(max_length=MAX_LENGTH)
    mem_is_active = models.BooleanField(default=True)
    mem_total_paid = models.FloatField(max_length=None)
    tier_code = models.ForeignKey(
        MembershipTier, db_column="tier_code", on_delete=models.CASCADE
    )

    class Meta:
        db_table = "member"


class Facility(models.Model):
    fac_id = models.AutoField(primary_key=True)
    fac_name = models.CharField(max_length=MAX_LENGTH)

    class Meta:
        db_table = "facility"


class SharedFacility(models.Model):
    id = models.AutoField(primary_key=True)
    fac_id = models.ForeignKey(Facility, db_column="fac_id", on_delete=models.CASCADE)
    tier_code = models.ForeignKey(
        MembershipTier, db_column="tier_code", on_delete=models.CASCADE
    )

    class Meta:
        db_table = "shared_facility"


class Employee(models.Model):
    emp_id = models.AutoField(primary_key=True)
    emp_fname = models.CharField(max_length=MAX_LENGTH)
    emp_lname = models.CharField(max_length=MAX_LENGTH)
    emp_phone = models.IntegerField()
    fac_id = models.ForeignKey(Facility, db_column="fac_id", on_delete=models.CASCADE)

    class Meta:
        db_table = "employee"


class Job(models.Model):
    job_code = models.AutoField(primary_key=True)
    job_dec = models.CharField(max_length=255)
    job_salary = models.FloatField(max_length=None)
    emp_id = models.ForeignKey(Employee, db_column="emp_id", on_delete=models.CASCADE)

    class Meta:
        db_table = "job"


class Equipment(models.Model):
    equip_id = models.AutoField(primary_key=True)
    equip_name = models.CharField(max_length=MAX_LENGTH)
    equip_quantity = models.IntegerField()
    fac_id = models.ForeignKey(Facility, db_column="fac_id", on_delete=models.CASCADE)

    class Meta:
        db_table = "equipment"