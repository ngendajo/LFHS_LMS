from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


# Create your models here.

class UserManager(BaseUserManager):
	'''
	creating a manager for a custom user model
	'''
	def create_user(self, email, first_name,last_name, password):
		"""
		Create and return a `User` with an email, username and password.
		"""
		if not email:
			raise ValueError('Users Must Have an email address')

		user = self.model(
			email=self.normalize_email(email),
			first_name=first_name,
			last_name=last_name,
		)
		user.set_password(password)
		user.save(using=self._db)
		return user
	
	def create_superuser(self, email, first_name, last_name, password):
		"""
		Create and return a `User` with superuser (admin) permissions.
		"""
		if password is None:
			raise TypeError('Superusers must have a password.')

		user = self.create_user(email, first_name, last_name, password)
		user.is_superuser = True
		user.save()
		return user
class User(AbstractBaseUser):
	email = models.EmailField(
		verbose_name='email address',
		max_length=255,
		unique=True
	)
	is_active = models.BooleanField(default=True)
	is_superuser = models.BooleanField(default=False)
	first_name = models.CharField(max_length=200)
	last_name = models.CharField(max_length=200)
	middle_name = models.CharField(max_length=200, blank=True, unique=True)
	image_url = models.ImageField(upload_to='profiles', default='profiles/default.png')
	username = None
	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = ['first_name', 'last_name']

	# Tells Django that the UserManager class defined above should manage
	# objects of this type.
	objects = UserManager()

	def __str__(self):
		return self.email

	def has_perm(self, perm, obj=None):
		return self.is_superuser

	def has_module_perms(self, app_label):
		return self.is_superuser

