from django.contrib.auth.models import User, Group
from rest_framework import serializers
from main_app.models import Admission
from server.main_app.models import Subject

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
        fields = '__all__'