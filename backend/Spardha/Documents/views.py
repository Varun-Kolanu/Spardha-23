from rest_framework import generics
from rest_framework import status
from .models import Document
from .serializers import DocumentSerializer
from rest_framework.response import Response

class DocumentCreateView(generics.GenericAPIView):
    serializer_class = DocumentSerializer

    def get(self, request):
        documents = Document.objects.all()
        serializer = DocumentSerializer(documents, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        document=serializer.save()
        return Response({"success": "Document has been created"}, status=status.HTTP_201_CREATED)