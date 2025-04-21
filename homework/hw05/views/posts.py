#Each view thing has an endpoint for getting and creating, and another one for deleting
import json

from flask import Response, request
from flask_restful import Resource

from models import db
from models.post import Post
from views import get_authorized_user_ids


def get_path():
    return request.host_url + "api/posts/"


class PostListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def get(self):

        '''
        Return the first 20 posts in the users feed, unles the user 
        specifies a number cap that number at 50
        '''
        count =  request.args.get("limit")    #Gets the limit from the http request
        
        # Check for no limit given, default to 20
        if (count is None):
            count = 20
        
        # Check for bad input (a string)
        try:
            count = int(count)
        except:
            return Response(
                json.dumps({
                    "message": "limit must be an integer"
                }),
                mimetype="application/json", 
                status=400)

        # Check for count over the cap (reduce to 50)
        if (count > 50):
             return Response(
                json.dumps({
                    "message": "Max number of posts is 50"
                }),
                mimetype="application/json", 
                status=400)
        
        print(count)

        # giving you the beginnings of this code (as this one is a little tricky for beginners):
        ids_for_me_and_my_friends = get_authorized_user_ids(self.current_user)  # Gets a list of user ids, which includes the current ones
        posts = (Post
                 .query.filter(Post.user_id.in_(ids_for_me_and_my_friends))
                 .limit(count) )


        # TODO: add the ability to handle the "limit" query parameter:

        data = [item.to_dict(user=self.current_user) for item in posts.all()]
        return Response(json.dumps(data), mimetype="application/json", status=200)

    def post(self):
        # TODO: handle POST logic
        # Need image url, caption and, alt text

        img = request.args.get("image_url")
        caption = request.args.get("caption")
        alt = request.args.get("alt_text")

        if (img is None):
            # Throw an error, this param is non-negotiable
            return Response(
                json.dumps({
                    "message": "image_url is required to create a post"
                }),
                mimetype="application/json", 
                status=400)
        if (caption is None):
            caption = ""
        if (alt is None):
            alt = ""        

        return Response(json.dumps({}), mimetype="application/json", status=201)


class PostDetailEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def patch(self, id):
        print("POST id=", id)
        # TODO: Add PATCH logic...
        return Response(json.dumps({}), mimetype="application/json", status=200)

    def delete(self, id):
        print("POST id=", id)

        # TODO: Add DELETE logic...
        return Response(
            json.dumps({}),
            mimetype="application/json",
            status=200,
        )

    def get(self, id):
        print("POST id=", id)
        # TODO: Add GET logic...
        return Response(
            json.dumps({}),
            mimetype="application/json",
            status=200,
        )


def initialize_routes(api, current_user):
    api.add_resource(
        PostListEndpoint,
        "/api/posts",
        "/api/posts/",
        resource_class_kwargs={"current_user": current_user},
    )
    api.add_resource(
        PostDetailEndpoint,
        "/api/posts/<int:id>",
        "/api/posts/<int:id>/",
        resource_class_kwargs={"current_user": current_user},
    )
