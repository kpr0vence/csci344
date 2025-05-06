import json

from flask import Response, request
from flask_restful import Resource

from models import db
from models.bookmark import Bookmark
from models.post import Post
from views import can_view_post

import flask_jwt_extended 



class BookmarksListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

# GET IS GOOD
    @flask_jwt_extended.jwt_required() 
    def get(self):
        # TODO: Add GET Logic...
        
        bookmarks = (Bookmark
                 .query.filter(Bookmark.user_id.__eq__(self.current_user.id)))

        data = [item.to_dict() for item in bookmarks.all()]
        return Response(json.dumps(data), mimetype="application/json", status=200)
    
    @flask_jwt_extended.jwt_required() 
    def post(self):
        # TODO: Add POST Logic...
        # Sends in a post id
        # post_id
        # Check the post we want to bookmark exists
        
        # Get the post id, and verify it's good input
        data = request.json
        post_id =  data.get("post_id")    #Gets the post id from the http request
        print(f"POST ID={post_id}")
        
        # Check for no id  given, 404
        if (post_id is None):
            return Response(
                json.dumps({
                    "message": "A post id is reqired to add a bookmark for that post."
                }),
                mimetype="application/json", 
                status=400)
        
        # Check for bad input (a string)
        try:
            post_id = int(post_id)
        except:
            return Response(
                json.dumps({
                    "message": "The post id must be an integer."
                }),
                mimetype="application/json", 
                status=400)

        # Check if post exists
        post = Post.query.get(post_id)

        if post is None:
            return Response(
                json.dumps({
                    "message": f"Post id={post_id} not found"
                }),
                mimetype="application/json", 
                status=404)


        # Check if they can view that post
        can_view = can_view_post(post_id, self.current_user)

        if not can_view:
            return Response(
                json.dumps({
                    "message": f"Post id={post_id} not found"
                }),
                mimetype="application/json", 
                status=404)
        
        # Check if already bookmarked
        bookmarks = (Bookmark
                 .query.filter(Bookmark.user_id.__eq__(self.current_user.id)))  # Gets all bookmarks for current user
        # I want to see if a bookmark with the same post_id is already here
        # I'm not crazy about this solution but it does seem to work...
        for bookmark in bookmarks:
            if (bookmark.post_id == post_id):
                return Response(
                json.dumps({
                    "message": f"Post id={post_id} has already been bookmarked."
                }),
                mimetype="application/json", 
                status=400)
        

        # If it passes all of this, we can make the new bookmark

        new_bookmark = Bookmark(self.current_user.id, post_id)
        db.session.add(new_bookmark)    #issues the insert statement
        db.session.commit()  #Comits the change to the database

        return Response(
            json.dumps(new_bookmark.to_dict()), mimetype="application/json", status=201)


class BookmarkDetailEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

# DELETE IS GOOD
    @flask_jwt_extended.jwt_required() 
    def delete(self, id):
        # TODO: Add Delete Logic...
        print("Bookmark id=", id)

        # try:
        #     id = int(id)
        # except:
        #     return Response(
        #         json.dumps({
        #             "message": "The id must be an integer."
        #         }),
        #         mimetype="application/json", 
        #         status=404)

        bookmark = Bookmark.query.get(id)
        # Validate it exists (if not 404 not found)
        if bookmark is None:
            return Response(
                json.dumps({
                    "message": f"Bookmark id={id} not found"
                }),
                mimetype="application/json", 
                status=404)
        
        # Check that they even have a bookmark for that post
        if bookmark.user_id != self.current_user.id:
            return Response(
                json.dumps({
                    "message": f"Bookmark id={id} not found for User={self.current_user.id}"
                }),
                mimetype="application/json", 
                status=404)
        
        bookmark.query.filter_by(id=id).delete()
        db.session.commit()

        return Response(
            json.dumps({"message":f"Bookmark id={bookmark.id} has been successfully deleted."}),
            mimetype="application/json",
            status=200,
        )


def initialize_routes(api, current_user):
    api.add_resource(
        BookmarksListEndpoint,
        "/api/bookmarks",
        "/api/bookmarks/",
        resource_class_kwargs={"current_user": current_user},
    )

    api.add_resource(
        BookmarkDetailEndpoint,
        "/api/bookmarks/<int:id>",
        "/api/bookmarks/<int:id>",
        resource_class_kwargs={"current_user": current_user},
    )
