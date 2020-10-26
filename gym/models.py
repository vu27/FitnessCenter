from django.db import models


class Member(models.Model):  # Article
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=100)
    is_account_active = models.BooleanField(null=True)
    total_paid = models.FloatField()
    membership_tier = models.CharField(max_length=30)

    class Meta:
        db_table = "members"


class MembershipTier(models.Model):  # Reporter
    tier_code = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=30)
    price = models.FloatField()
    member_id = models.ForeignKey(Member, on_delete=models.CASCADE)

    class Meta:
        db_table = "membership_tiers"