from rest_framework import serializers
from .models import Document, UserAccount

class AllDocumentSerializer(serializers.ModelSerializer):
    document = serializers.JSONField()
    class Meta:
        model = Document
        fields = "__all__"
        read_only_fields = ["id", "username","verified_by", "verification_time", "status", "description", "made_new_changes"]

    def create(self, validated_data):
        document_to_add = Document.objects.create(
            username=self.context['request'].user.username,
            document=validated_data['document']
        )
        return document_to_add

class DocumentUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Document
        fields = ("document", "status", "description", "made_new_changes")