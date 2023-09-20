from rest_framework.throttling import AnonRateThrottle, UserRateThrottle
from collections import defaultdict


class CustomAnonThrottle(AnonRateThrottle):
    def get_cache_key(self, request, view):
        if request.user and request.user.is_authenticated:
            return None  # Only throttle unauthenticated requests.

        return self.cache_format % {
            'scope': self.scope,
            'ident': request.META.get('REMOTE_ADDR')
        }


class CustomUserThrottle(UserRateThrottle):
    def get_cache_key(self, request, view):
        if request.user and request.user.is_authenticated:
            ident = request.user.pk
        else:
            ident = request.META.get('REMOTE_ADDR')

        return self.cache_format % {
            'scope': self.scope,
            'ident': ident
        }
