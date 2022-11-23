from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Admission(models.Model):
    title = models.CharField(max_length=255)
    link = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self) -> str:
        return self.title

class Subject(models.Model):
    subject_id = models.CharField(max_length=255)
    subject_name = models.CharField(max_length=255)
    subject_credit = models.CharField(max_length=255)
    prerequisite = models.CharField(max_length=255)
    program = models.CharField(max_length=255)
    description = models.TextField()
    year = models.CharField(max_length=255)
    semester = models.CharField(max_length=255)
    track = models.CharField(max_length=255)
    def __str__(self) -> str:
        return f'{self.subject_id}, {self.subject_name}'

class About(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    def __str__(self) -> str:
        return self.title

