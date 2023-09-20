from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Game, Team, Contingent
from .serializers import (
    GameSerializer,
    TeamSerializer,
    TeamUpdateSerializer,
    AllContingentSerializer,
    ContingentSerializer,
)
from drf_yasg.utils import swagger_auto_schema
from scripts.user_registration import UsersSheet
from drf_yasg import openapi
# from scripts.team_registration import TeamsSheet

token_param = openapi.Parameter('Authorization', openapi.IN_HEADER, description="Token <YourToken>", type=openapi.TYPE_STRING)

class AllGamesView(generics.ListAPIView):
    serializer_class = GameSerializer
    permission_classes = (permissions.IsAuthenticated, )

    @swagger_auto_schema(
        responses={
            200: """{
                    "name": ...
                    "min_players": ...
                    "max_players": ...
                    "game_type": ...
                    }""",
            404: """{"error":"id not found,
                                    id = 0 for Boys
                                    id = 1 for Girls
                                    id = 2 for Mixed"}""",
        }
    )
    def get(self, request, id):
        if id == 0:  # For Boys
            id = 'B'
        elif id == 1:  # For Girls
            id = 'G'
        else:  # Mixed
            id = 'M'
        # print(id)
        game = Game.objects.filter(game_type=id)
        if(game.exists()):
            serializer = self.get_serializer(game, many=True)
            data=serializer.data
            data.sort(key=lambda x: x.get('name'))
            return Response(data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

def serialized_data(contingent):
    college_rep = contingent.college_rep
    data = {
        "username":college_rep.username,
        "email":college_rep.email,
        "name": college_rep.name,
        "institution_name": college_rep.institution_name,
        "designation": college_rep.designation,
        "phone_no": college_rep.phone_no,
        "leader_name": contingent.leader_name,
        "leader_contact_num": contingent.leader_contact_num,
        "num_of_boys": contingent.num_of_boys,
        "num_of_girls": contingent.num_of_girls,
        "num_of_coaches_pti": contingent.num_of_coaches_pti,
        "num_of_faculty_members": contingent.num_of_faculty_members,
        "num_of_supporting_staff": contingent.num_of_supporting_staff,
        "games": [team.game.name for team in college_rep.team_set.all()]
        #* college_rep.team_set fetches all the teams it is referred by foreign key
    }
    return data


class AllContingentView(generics.GenericAPIView):
    serializer_class = AllContingentSerializer
    def get(self, request):
        if request.user.is_staff:
            #* The below line fetches all the teams and the game associated with the team. It optimizes the speed of queries by decreasing N queries into a single query
            contingents = Contingent.objects.prefetch_related('college_rep__team_set__game').all()
            data = [serialized_data(contingent) for contingent in contingents]
            serializer = AllContingentSerializer(data=data, many=True)
            serializer.is_valid(raise_exception=True)
            return Response(serializer.validated_data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "You are not allowed to access this endpoint"}, status=status.HTTP_403_FORBIDDEN)

class ContingentDetailView(generics.GenericAPIView):
    serializer_class = ContingentSerializer
    permission_classes = (permissions.IsAuthenticated, )

    @swagger_auto_schema(
        responses={
            200: """{
                "college_rep": college_rep.email,
                "num_of_boys": integer,
                "num_of_girls": integer,
                "num_of_officials": integer,
                "num_of_coaches_PTI": integer,
                "leader_name": ....,
                "leader_contact_num": ....,
                }""",
        },
        manual_parameters=[token_param]
    )
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # print(serializer)
        contingent=serializer.save()
        UsersSheet.update_user(contingent.college_rep.email)
        return Response( status=status.HTTP_200_OK)

    @swagger_auto_schema(
        responses={
            200: """{
                "college_rep": college_rep.email,
                "num_of_boys": integer,
                "num_of_girls": integer,
                "num_of_officials": integer,
                "num_of_coaches_PTI": integer,
                "leader_name": ....,
                "leader_contact_num": ....,
                }""",
            404: """{"error":"Contingent not found"}""",
        },
        manual_parameters=[token_param]
    )
    def get(self, request):
        # print(request.user)
        contingent = Contingent.objects.filter(college_rep=request.user)
        if contingent.exists():
            serializer = self.get_serializer(contingent.last())
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    @swagger_auto_schema(
        responses={
            204: """{"delete": "Contingent has been deleted"}""",
        },
        manual_parameters=[token_param]
    )
    def delete(self, request):
        contingent = Contingent.objects.filter(college_rep=request.user)
        if contingent.exists():
            email=contingent[0].college_rep.email
            contingent.delete()
            UsersSheet.update_user(email)
        return Response(status=status.HTTP_204_NO_CONTENT)


class AllTeamsView(generics.ListAPIView):
    serializer_class = TeamSerializer
    permission_classes = (permissions.IsAuthenticated, )

    @swagger_auto_schema(
        responses={
            200: """[{
                    "captain_name": ...
                    "captain_phone": ...
                    "game": ...
                    "players": ...
                    }]""",
            404: """{"error":"No teams found"}""",
        }
    )
    def get(self, request):
        team = Team.objects.filter(user=request.user)
        if team.exists():
            serializer = self.get_serializer(team, many=True)
            data=serializer.data
            data.sort(key=lambda x: x.get('game'))
            return Response(data, status=status.HTTP_200_OK)
        else:
            return Response({"error":"No teams found"},status=status.HTTP_404_NOT_FOUND)
    
    @swagger_auto_schema(
        responses={
            200: """{"success": "Team has been created"}""",
            404: """{"error":"Game not found"}
                    {"error":"Team already exists"}""",
        }
    )
    def post(self,request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        team=serializer.save(user=self.request.user)
        # TeamsSheet.new_team(team)
        UsersSheet.update_user(team.user.email)
        return Response({"success": "Team has been created"}, status=status.HTTP_200_OK)

class TeamView(generics.GenericAPIView):
    serializer_class = TeamUpdateSerializer
    permission_classes = (permissions.IsAuthenticated, )

    @swagger_auto_schema(
        responses={
            200: """{"success":"Team Details Modified"}""",
            404: """{"error":"Team not found"}""",
        }
    )
    def put(self, request, game):
        game=Game.objects.get(name=game.split('_')[0],game_type=game.split('_')[1])
        try:
            team = Team.objects.get(game=game, user=request.user)
            if "captain_name" in request.data.keys():
                team.captain_name=request.data["captain_name"]
            if "captain_phone" in request.data.keys():
                team.captain_phone=request.data["captain_phone"]
            if "players" in request.data.keys():
                team.players=request.data["players"]
            team.save()
            # TeamsSheet.update_team(team)
            return Response({"success":"Team Details Modified"}, status=status.HTTP_200_OK)
        except:
            return Response({"error":"Team not found"},status=status.HTTP_404_NOT_FOUND)

    @swagger_auto_schema(
        responses={
            200: """{"success": "Team has been deleted"}""",
            204: """{"error":"Team not found"}""",
        }
    )
    def delete(self, request, game):
        game=Game.objects.get(name=game.split('_')[0],game_type=game.split('_')[1])
        team = Team.objects.filter(game=game, user=request.user)
        if team.exists():
            # TeamsSheet.delete_team(team[0])
            user_email = team[0].user.email
            team.delete()
            UsersSheet.update_user(user_email)
            return Response({"success": "Team has been deleted"}, status=status.HTTP_200_OK)
        return Response({"error":"Team not found"},status=status.HTTP_204_NO_CONTENT)
