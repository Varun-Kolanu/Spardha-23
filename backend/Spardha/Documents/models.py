from django.db import models
from Authentication.models import UserAccount

# Create your models here.
class Document(models.Model):
    username = models.CharField(max_length=100, blank=True, unique=True)
    document = models.JSONField()
    is_verified = models.BooleanField(default=False)
    verified_by = models.CharField(max_length=100, blank=True)
    verification_time = models.DateTimeField(null=True)
    is_rejected = models.BooleanField(default=False)
    comments = models.TextField(null=True, blank=True)
    made_new_changes = models.BooleanField(default=True)