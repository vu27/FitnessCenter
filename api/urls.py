from django.urls import path, include
from gym.views import home_view

urlpatterns = [
    path("", home_view, name="home"),
    path("api/", include("gym.urls")),
]
