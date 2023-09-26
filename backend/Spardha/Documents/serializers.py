from rest_framework import serializers
from .models import Document

class AllDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = "__all__"

class DocumentUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Document
        fields = ("is_verified", "verified_by", "is_rejected", "comments")
