from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenRefreshView, 
)
from .views import *

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('changepassword/',ChangePasswordView.as_view(),name="change_password"),
    path('password-reset/<str:encoded_pk>/<str:token>',
        ResetPassword.as_view(),
         name="reset-password",
    ), 
    path('password-reset/', PasswordReset.as_view(), name="password-reset"),
]