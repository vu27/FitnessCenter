from django.shortcuts import render
from wsgiref.util import FileWrapper

def home_view(request):
    return render(request, "home.html")
