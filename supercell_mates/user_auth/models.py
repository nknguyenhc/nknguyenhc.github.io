from django.db import models
from django.contrib.auth.models import AbstractUser


class TagRequest(models.Model):
    name = models.CharField(max_length=100)


class Tag(models.Model):
    name = models.CharField(max_length=100)


class UserAuth(AbstractUser, models.Model):
    pass
