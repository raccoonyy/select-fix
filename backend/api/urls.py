from django.urls import path, include
from .views import hannanum

app_name = 'api'
urlpatterns = [
    path('api/hannanum/', hannanum)
]
