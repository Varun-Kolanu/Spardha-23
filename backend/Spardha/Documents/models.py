from django.db import models
from Authentication.models import UserAccount

# Create your models here.
class Document(models.Model):
    user_id = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name="document_uploader")
    document = models.JSONField()
    is_verified = models.BooleanField(default=False)
    verified_by = models.ForeignKey(UserAccount, on_delete=models.CASCADE,default=None, null=True, related_name="document_verifier")
    verification_time = models.DateTimeField(null=True)
    is_rejected = models.BooleanField(default=False)
    comments = models.TextField(null=True, blank=True)