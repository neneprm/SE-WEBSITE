from django.contrib import admin

# Register your models here.
from .models import Admission, Subject, About

admin.site.register(Admission)
admin.site.register(Subject)
admin.site.register(About)
