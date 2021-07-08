from Exceptions.models import ExceptionType
from django.contrib import admin

# Register your models here.
from .models import ExceptionType
admin.site.register(ExceptionType)