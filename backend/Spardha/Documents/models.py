from django.db import models

# Create your models here.
class Document(models.Model):
    user_id = models.IntegerField()
    document = models.JSONField()
    is_verified = models.BooleanField(default=False)
    verified_by = models.CharField(max_length=100, null=True)
    verification_time = models.DateTimeField(null=True)