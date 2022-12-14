from django.contrib import admin

# Register your models here.
# from main_app.models import Author
from .models import Admission, Subject, About

class AuthorAdmin(admin.ModelAdmin):
    pass

admin.site.register(Admission, AuthorAdmin)
admin.site.register(Subject, AuthorAdmin)
admin.site.register(About, AuthorAdmin)

# admin.site.register(Admission)
# admin.site.register(Subject)
# admin.site.register(About)

#Register Admin class to Admission using decorator
# @admin.register(Admission)
class AdmissionAdmin(admin.ModelAdmin):
    list_display = ('title','link')

# @admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    list_display = ('subject_id','subject_name','subject_credit','prerequisite','year','semester')

# @admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ('title')
