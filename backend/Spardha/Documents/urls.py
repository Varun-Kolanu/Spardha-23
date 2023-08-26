from django.urls import path
from .views import DocumentView, AllDocumentView

urlpatterns = [
    path("", AllDocumentView.as_view(), name="get-create-document"),
    path("verify/<int:id>/", DocumentView.as_view(), name="verify-document")
]
