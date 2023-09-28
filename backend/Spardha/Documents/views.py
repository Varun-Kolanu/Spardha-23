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
        if request.user.is_staff or request.user.is_admin:
            documents = Document.objects.select_related("verified_by")
            serializer = AllDocumentSerializer(documents, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "You are not allowed to access this endpoint"}, status=status.HTTP_403_FORBIDDEN)
    
    @swagger_auto_schema(
        responses={
            201: """{
                    "success": "Document has been created successfully"
                }"""
        }
    )
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        document=serializer.save()
        return Response({"success": "Document has been created successfully"}, status=status.HTTP_201_CREATED)

class DocumentView(generics.GenericAPIView):
    serializer_class = DocumentUpdateSerializer

    @swagger_auto_schema(
        responses={
            204: """{
                    "success": "Document's verification status has been updated successfully"
                }""",
            404: """{
                "error": "The Document does not exist"
                }"""
        }
    )
    def patch(self, request, id):
        try:
            data_to_modify = request.data
            data_to_modify["verified_by"] = request.user.id
            document_to_verify = Document.objects.get(id=id)
            document_to_verify.verification_time = timezone.now()
            serializer = self.get_serializer(document_to_verify, data=data_to_modify,partial=True)
            serializer.is_valid(raise_exception=True)
            document=serializer.save()
            return Response({"success": "Document's verification status has been updated successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            print(e)
            return Response({"error": "The Document does not exist"}, status=status.HTTP_404_NOT_FOUND)
