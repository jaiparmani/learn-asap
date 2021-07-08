from django.db import models

# Create your models here.

class ExceptionType(models.Model):
    exception_ID=models.IntegerField()
    exception_name=models.CharField(max_length=50)
    exception_description=models.CharField(max_length=50)
    exception_component=models.CharField(max_length=20)
    exception_level=models.CharField(max_length=20)

