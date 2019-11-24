from django.urls import path
from .views import analyse

app_name = 'api'
urlpatterns = [
    path('api/analyse/', analyse)
]
