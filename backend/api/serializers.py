from rest_framework import serializers
from django.utils.http import urlsafe_base64_decode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from .models import *

#User creation
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'middle_name', 'last_name', 'is_active', 'image_url', 'password']
        extra_kwargs = {
            'password': {'write_only': True, 'required': False}
        }

    def create(self, validated_data):
        try:
            # Ensure default image_url is used if not provided
            user = User.objects.create_user(
                email=validated_data['email'],
                first_name=validated_data['first_name'],
                middle_name=validated_data.get('middle_name', ''),
                last_name=validated_data['last_name'],
                password=validated_data['password'],
            )
            # If the image_url is provided, update it
            image_url = validated_data.get('image_url', None)
            if image_url:
                user.image_url = image_url
                user.save()
            return user
        except Exception as e:
            raise serializers.ValidationError(f"Error during user creation: {str(e)}")

    def update(self, instance, validated_data):
        try:
            instance.first_name = validated_data.get('first_name', instance.first_name)
            instance.middle_name = validated_data.get('middle_name', instance.middle_name)
            instance.last_name = validated_data.get('last_name', instance.last_name)
            
            # Update password if provided
            if 'password' in validated_data:
                instance.set_password(validated_data['password'])
            
            # Update the image_url if it's provided
            if 'image_url' in validated_data:
                instance.image_url = validated_data['image_url']
            
            instance.save()
            return instance
        except Exception as e:
            raise serializers.ValidationError(f"Error during user update: {str(e)}")
        
#User login serialisers

class PasswordChangeSerializer(serializers.Serializer):
    current_password = serializers.CharField(style={"input_type": "password"}, required=True)
    new_password = serializers.CharField(style={"input_type": "password"}, required=True)

    def validate_current_password(self, value):
        if not self.context['request'].user.check_password(value):
            raise serializers.ValidationError({'current_password': 'Does not match'})
        return value

#reset password
class EmailSerilizer(serializers.Serializer):
    email = serializers.EmailField()
    class Meta:
        fields = ('email',)

class ResetPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        fields = ("password",)

    def validate(self, data):
        password = data.get("password")
        token = self.context.get("kwargs").get("token")
        encoded_pk = self.context.get("kwargs").get("encoded_pk")
        
        if token is None or encoded_pk is None:
            serializers.ValidationError("Missing data")

        pk = urlsafe_base64_decode(encoded_pk).decode()
        user = User.objects.get(pk=pk)

        if not PasswordResetTokenGenerator().check_token(user, token):
            raise serializers.ValidationError("The token is invalid")
        
        user.set_password(password)
        user.save()
        return data
