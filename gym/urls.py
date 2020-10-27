from django.urls import path, re_path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register("tier", views.MembershipTierViewset, "tier")
router.register("member", views.MemberViewset, "member")
router.register("facility", views.FacilityViewset, "facility")
router.register("shared-facility", views.SharedFacilityViewset, "shared-facility")
router.register("employee", views.EmployeeViewset, "employee")
router.register("job", views.JobViewset, "job")
router.register("equipment", views.EquipmentViewset, "equipment")

urlpatterns = [
    path('', views.home_view, name='home'),
    re_path('api/', include(router.urls))
]
