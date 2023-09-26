# from django.core.mail import EmailMultiAlternatives
from django.core.mail import EmailMessage
from sendgrid.helpers.mail import (Mail,From)
from sendgrid import SendGridAPIClient
from django.conf import settings
from Spardha.settings import DEFAULT_FROM_EMAIL, EMAIL_HOST_USER, SENDGRID_API_KEY, SENDGRID_VERIFY_ACCOUNT_TEMP_ID, EMAIL_HOST_USER_NAME
from Services import discord_logger

class Util:
    @staticmethod
    def send_email(data):
        email = EmailMessage(
            # subject=data["email_subject"], body=data["email_body"], to=data["to_mail"],template_id=["template_id"],dynamic_template_data=["dynamic_template_data"]
            subject=data["email_subject"], body=data["email_body"], to=data["to_mail"]
        )
        # email.template_id = data["template_id"]
        # email.dynamic_template_data = data["dynamic_template_data"]
        email.content_subtype = "html"
        email.send(fail_silently=False)

    @staticmethod
    def send_email_sendgrid(data):
        print(DEFAULT_FROM_EMAIL)
        from_email = From(EMAIL_HOST_USER, EMAIL_HOST_USER_NAME)
        email = Mail(from_email, to_emails=data["to_mail"])
        email.template_id = data["template_id"]
        email.dynamic_template_data = data["dynamic_template_data"]
        try:
            sg = SendGridAPIClient(SENDGRID_API_KEY)
            response = sg.send(email)
            code, headers = response.status_code, response.headers
            if code != 202:
                print(f"Response code: {code}")
                discord_logger.send_message(f"Sendgrid email response code: {code}. Email: '''{email}'''")
        except Exception as e:
                print("Error: {0}".format(e))
                discord_logger.send_message(f"Sendgrid email exception: {e}. Email: '''{email}'''")
        return 1

