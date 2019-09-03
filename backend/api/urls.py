from django.urls import path
from .views import hannanum

app_name = 'api'
urlpatterns = [
    path('api/hannanum/', hannanum)
]
