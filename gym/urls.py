from django.urls import path
from .views import home_view
from rest_framework import routers
from .views import MembershipTierViewset

router = routers.DefaultRouter()
router.register("tiers", MembershipTierViewset, "tiers")

urlpatterns = router.urls
