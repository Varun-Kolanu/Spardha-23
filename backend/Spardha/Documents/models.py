from django.db import models
from Authentication.models import UserAccount

# Create your models here.
class Document(models.Model):
    user_id = models.IntegerField()
    document = models.JSONField()
    is_verified = models.BooleanField(default=False)
    verified_by = models.ForeignKey(UserAccount, on_delete=models.CASCADE,default=None)
    verification_time = models.DateTimeField(null=True)