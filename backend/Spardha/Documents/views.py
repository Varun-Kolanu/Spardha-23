from rest_framework import generics, permissions, status
from .models import Document
from .serializers import AllDocumentSerializer, DocumentUpdateSerializer
from rest_framework.response import Response
from drf_yasg.utils import swagger_auto_schema
from django.utils import timezone
from drf_yasg import openapi

token_param = openapi.Parameter('Authorization', openapi.IN_HEADER, description="Token <YourToken>", type=openapi.TYPE_STRING)

class AllDocumentView(generics.GenericAPIView):
    serializer_class = AllDocumentSerializer

    @swagger_auto_schema(
        manual_parameters=[token_param]
    )
    def get(self, request):
        try:
            if not request.user.is_authenticated:
                return Response({"error": "Please login to continue"}, status=status.HTTP_403_FORBIDDEN)
            elif request.user.is_staff or request.user.is_admin:
                documents = Document.objects.all()
                serializer = AllDocumentSerializer(documents, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                documents = Document.objects.filter(username=request.user.username)
                serializer = AllDocumentSerializer(documents, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status = status.HTTP_400_BAD_REQUEST)

    
    @swagger_auto_schema(
        request_body=AllDocumentSerializer(many=False, partial=True),
        responses={
            201: """{
                    "success": "Document has been created successfully"
                }"""
        },
        manual_parameters=[token_param]
    )
    def post(self, request):
        try:
            if request.user.is_authenticated:
                serializer = self.get_serializer(data=request.data)
                serializer.is_valid(raise_exception=True)
                serializer.save()
                return Response({"success": "Document has been created successfully"}, status=status.HTTP_201_CREATED)
            else:
                return Response({"error": "Please login to continue"}, status=status.HTTP_403_FORBIDDEN)
        except Exception as e:
            return Response({"error": str(e)}, status = status.HTTP_400_BAD_REQUEST)


class DocumentView(generics.GenericAPIView):
    serializer_class = DocumentUpdateSerializer

    @swagger_auto_schema(
        responses={
            200: """{
                    "success": "Document's verification status has been updated successfully"
                }""",
            404: """{
                "error": "Error fetching document"
                }"""
        },
        manual_parameters=[token_param]
    )
    def patch(self, request, id):
        try:
            document_to_verify = Document.objects.get(id=id)
            data_to_modify = request.data
            if not request.user.is_authenticated:
                return Response({"error": "Please login to continue"}, status=status.HTTP_403_FORBIDDEN)
            if request.user.is_admin or request.user.is_staff:
                if "document" in data_to_modify:
                    del data_to_modify["document"]
                document_to_verify.verified_by = request.user.username
                document_to_verify.verification_time = timezone.now()
                serializer = self.get_serializer(document_to_verify, data=data_to_modify,partial=True)
                serializer.is_valid(raise_exception=True)
                serializer.save()
            elif request.user.username != document_to_verify.username:
                return Response({"error": "You are not allowed to edit other's document"}, status=status.HTTP_403_FORBIDDEN)
            elif "document" in request.data:
                data_to_modify = {
                    "document": data_to_modify["document"]
                }
                serializer = self.get_serializer(document_to_verify, data=data_to_modify,partial=True)
                serializer.is_valid(raise_exception=True)
                serializer.save()
            return Response({"success": "Document has been updated successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status = status.HTTP_400_BAD_REQUEST)
    

    @swagger_auto_schema(
        responses={
            200: """{
                    "success": "Document's verification status has been deleted successfully"
                }""",
            400: """{
                "error": "Error fetching document"
                }"""
        },
        manual_parameters=[token_param]
    )
    def delete(self, request, id):
        try:
            if not request.user.is_authenticated:
                return Response({"error": "Please login to continue"}, status=status.HTTP_403_FORBIDDEN)
            elif not request.user.is_admin:
                return Response({"error": "You're not admin to perform this operation"}, status=status.HTTP_403_FORBIDDEN)
            else:
                document_to_delete = Document.objects.get(id=id)
                document_to_delete.delete()
                return Response({"success": "Document has been deleted successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status = status.HTTP_400_BAD_REQUEST)
