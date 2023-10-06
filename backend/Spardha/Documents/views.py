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
            documents = Document.objects.filter(user_id_id=request.user.id)
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
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({"success": "Document has been created successfully"}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status = status.HTTP_400_BAD_REQUEST)


class DocumentView(generics.GenericAPIView):
    serializer_class = DocumentUpdateSerializer

    @swagger_auto_schema(
        responses={
            204: """{
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
            if request.user.is_admin or request.user.is_staff:
                document_to_verify.verified_by = request.user
                document_to_verify.verification_time = timezone.now()
                serializer = self.get_serializer(document_to_verify, data=data_to_modify,partial=True)
                serializer.is_valid(raise_exception=True)
                serializer.save()
            elif request.user.id != document_to_verify.user_id_id:
                return Response({"error": "You are not allowed to edit other's document"})
            elif "document" in request.data:
                data_to_modify = {
                    "document": data_to_modify["document"]
                }
                serializer = self.get_serializer(document_to_verify, data=data_to_modify,partial=True)
                serializer.is_valid(raise_exception=True)
                serializer.save()
            return Response({"success": "Document's verification status has been updated successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({"error": str(e)}, status = status.HTTP_400_BAD_REQUEST)
