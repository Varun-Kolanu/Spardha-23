import json
import requests
from decouple import config
from django.core.exceptions import PermissionDenied
from django.http import HttpResponseServerError

def send_message(message):
    url = config("DISCORD_WEBHOOK_URL")
    print("Sending message")
    data = {"content": message}
    headers = {"Content-Type": "application/json"}
    response = requests.post(url, data=json.dumps(data), headers=headers)
    if response.status_code != 204:
        print(f'Error sending message """{message}""" to Discord!')

class DiscordErrorMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        try:
            response = self.get_response(request)
            if response.status_code == 500:
                response_string = response.content.decode('utf-8')
                ind1 = response_string.find("Traceback (most recent call last)")
                ind2 = response_string.find("Exception Value")
                message = f"500 Server Error: {request.method} {request.path}\n\n{response_string[ind1:ind2]}"
                send_message(message)
        except Exception as e:
            # Uncaught exceptions
            if isinstance(e, PermissionDenied):
                response = HttpResponseServerError("Permission Denied", content_type="text/plain", status=500)
            else:
                response = HttpResponseServerError("Internal Server Error", content_type="text/plain", status=500)

            message = f"500 Server Error: {request.method} {request.path}\n\n{str(e)[:1024]}"
            send_message(message)
        return response
            

