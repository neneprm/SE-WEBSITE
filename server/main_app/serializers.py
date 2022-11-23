from django.contrib.auth.models import User, Group
from rest_framework import serializers
from main_app.models import Admission, Subject, About

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class AdmissionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Admission
        fields = '__all__'

class SubjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Subject
        ordering = ['-subject_name']
        fields = '__all__'

class AboutSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = About
        fields = '__all__'