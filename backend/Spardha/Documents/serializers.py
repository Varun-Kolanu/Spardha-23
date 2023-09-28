from rest_framework import serializers
from .models import Document, UserAccount

class AllDocumentSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    user_id = serializers.PrimaryKeyRelatedField(queryset=UserAccount.objects.all())
    document = serializers.JSONField()
    is_verified = serializers.BooleanField(default=False)
    verification_time = serializers.DateTimeField()
    is_rejected = serializers.BooleanField(default=False)
    comments = serializers.CharField()
    verified_by_name = serializers.SerializerMethodField()

    class Meta:
        model = Document
        fields = "__all__"

    def get_verified_by_name(self, obj):
        if obj.verified_by:
            return obj.verified_by.name
        return None  # Handle the case where verified_by is None

class DocumentUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Document
        fields = ("is_verified", "verified_by", "is_rejected", "comments")
