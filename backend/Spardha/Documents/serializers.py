from rest_framework import serializers
from .models import Document, UserAccount

class AllDocumentSerializer(serializers.ModelSerializer):
    document = serializers.JSONField()
    class Meta:
        model = Document
        fields = ["id", "document", "is_verified", "verification_time", "is_rejected", "comments"]

    def create(self, validated_data):
        document_to_add = Document.objects.create(
            user_id_id=self.context['request'].user.id,
            document=validated_data['document']
        )
        return document_to_add

class DocumentUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Document
        fields = ("document", "is_verified", "is_rejected", "comments")
