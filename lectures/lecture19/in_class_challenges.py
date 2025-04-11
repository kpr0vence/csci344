from models.user import User
from models.post import Post
from pprint import pprint

# create 5 users:
user1 = User('Violet', 'Woolard', 'vwoolard', 'https://example.com/shirlyjones.jpg', 'Violet is a software engineer', True)
user2 = User('Walter', 'Smith', 'waltersmith', 'https://example.com/waltersmith.jpg', 'Walter is a software engineer', True)
user3 = User('Emma', 'Davis', 'emmadavis', 'https://example.com/emmadavis.jpg', 'Emma is a data scientist', True)
user4 = User('Michael', 'Brown', 'michaelbrown', 'https://example.com/michaelbrown.jpg', 'Michael is a product manager', False)
user5 = User('Sarah', 'Wilson', 'sarahwilson', 'https://example.com/sarahwilson.jpg', 'Sarah is a UX designer', True)

# create 10 posts:
post1 = Post(1, 'https://picsum.photos/200?id=1', 'This is a post', 'This is a post', user1)
post2 = Post(2, 'https://picsum.photos/200?id=2', 'This is a post', 'This is a post', user2)
post3 = Post(3, 'https://picsum.photos/200?id=3', 'This is a post', 'This is a post', user3)
post4 = Post(4, 'https://picsum.photos/200?id=4', 'This is a post', 'This is a post', user4)
post5 = Post(5, 'https://picsum.photos/200?id=5', 'This is a post', 'This is a post', user5)
post6 = Post(6, 'https://picsum.photos/200?id=6', 'This is a post', 'This is a post', user1)
post7 = Post(7, 'https://picsum.photos/200?id=7', 'This is a post', 'This is a post', user2)
post8 = Post(8, 'https://picsum.photos/200?id=8', 'This is a post', 'This is a post', user3)
post9 = Post(9, 'https://picsum.photos/200?id=9', 'This is a post', 'This is a post', user4)
post10 = Post(10, 'https://picsum.photos/200?id=10', 'This is a post', 'This is a post', user5)

# Add all the users to a list (for convenience):
users = [user1, user2, user3, user4, user5]

# Store all posts in an array
posts = [post1, post2, post3, post4, post5, post6, post7, post8, post9, post10]

################################
# In-Class Challenges (users): #
################################
# For each of the tasks below, write a function that performs the requested operation:
# 1. Prints a dictionary representation of each user to the console.
def print_dictionary_of_users(userList):
    for user in userList:
        print(f"{user.to_dict()}");

print_dictionary_of_users(users)
# 2. Returns a list of usernames (list of string)
def get_all_usernames(userList):
    names = [user.username for user in userList]
    return names

print(f"\nAll usernames = {get_all_usernames(users)}")
# 3. Returns a list of active users (list of User objects)
def get_all_active_users(userList):
    active_users = []
    for user in userList:
        if (user.is_active):
            active_users.append(user)   #if you want user OBJECTS
            #active_users.append(user.username)     #if you want a better representation
    
    # return [user fr user in users if user.is_active]

    return active_users

print(f"All Active users: {get_all_active_users(users)}")
# 4. Prints a dictionary representation of the first 3 users
def print_first_three(userList):
    first3 = [userList[0:3]]
    print(first3)

print_first_three(users)
# 5. Returns a list of image_urls of the posts (list of strings)
def get_img_urls(postList):
    images = [ post.image_url for post in postList]
    return images

print(f"All post images: {get_img_urls(posts)}")
################################
# In-Class Challenges (posts): #
################################
# For each of the tasks below, write a function that performs the requested operation:
# 1. Prints a dictionary representation of each post to the console.
def print_dictionary_of_post(postList):
    for post in postList:
        print(f"{post.to_dict()}");

print_dictionary_of_post(posts);
# 2. Returns a list of posts' image_urls (list of strings)
post_images = get_img_urls(posts)
# 3. Returns a distinct list of posts' authors (list of User objects)
def get_posters_no_repeats(postList):
    posters = []
    for post in postList:
        if post.user.username not in posters:
            posters.append(post.user.username)
    return posters

print(f"All Posters: {get_posters_no_repeats(posts)}")
# 4. Returns all of the post objects that belong to a given user (e.g., user3)  (list of Post objects)
def get_users_post(user):
    users_posts = []
    for post in posts:
        if post.user == user:
            users_posts.append(post)
    return users_posts

chosen_user = users[0]
print(f"All of {chosen_user.username}'s posts: {get_users_post(chosen_user)}")



