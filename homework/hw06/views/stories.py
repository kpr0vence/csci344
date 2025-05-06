import json

from flask import Response
from flask_restful import Resource

import flask_jwt_extended 

from models.story import Story
from views import get_authorized_user_ids


class StoriesListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    @flask_jwt_extended.jwt_required()
    def get(self):
        ids_for_me_and_my_friends = get_authorized_user_ids(self.current_user)  # Gets a list of user ids, which includes the current ones
        stories = (Story
                 .query.filter(Story.user_id.in_(ids_for_me_and_my_friends)))

        data = [item.to_dict() for item in stories.all()]
        return Response(json.dumps(data), mimetype="application/json", status=200)


def initialize_routes(api, current_user):
    api.add_resource(
        StoriesListEndpoint,
        "/api/stories",
        "/api/stories/",
        resource_class_kwargs={"current_user": current_user},
    )
