from django.urls import path
from .views import DocumentCreateView

urlpatterns = [
    path("verify/", DocumentCreateView.as_view(), name="documents_verify")
]
