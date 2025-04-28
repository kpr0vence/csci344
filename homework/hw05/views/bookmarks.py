import json

from flask import Response, request
from flask_restful import Resource

from models import db
from models.bookmark import Bookmark
from models.post import Post



class BookmarksListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

# GET IS GOOD
    def get(self):
        # TODO: Add GET Logic...
        
        bookmarks = (Bookmark
                 .query.filter(Bookmark.user_id.__eq__(self.current_user.id)))

        data = [item.to_dict() for item in bookmarks.all()]
        return Response(json.dumps(data), mimetype="application/json", status=200)
    
# POST IS VERY BAD
    def post(self):
        # TODO: Add POST Logic...
        


        return Response(
            json.dumps(),
            mimetype="application/json",
            status=201,
        )


class BookmarkDetailEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

# DELETE IS GOOD
    def delete(self, id):
        # TODO: Add Delete Logic...
        print("Bookmark id=", id)

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
