from django.db import models
from Authentication.models import UserAccount
from enum import Enum

# Create your models here.

class Status(Enum):
    PENDING = (0, 'Pending')
    REJECTED = (1, 'Rejected')
    VERIFIED = (2, 'Verified')

    @classmethod
    def get_choices(cls):
        return [(status.value[0], status.value[1]) for status in cls]

class Document(models.Model):
    username = models.CharField(max_length=100, blank=True, unique=True)
    document = models.JSONField()
    status = models.IntegerField(choices=Status.get_choices(), default=Status.PENDING.value[0])
    verified_by = models.CharField(max_length=100, blank=True)
    verification_time = models.DateTimeField(null=True)
    description = models.TextField(null=True, blank=True)