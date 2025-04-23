db.posts.aggregate([
    {$lookup:{
        from:"users",
        localField:"userId", //posts
        foreignField:"_id", //users
        as:"user"
    }}
])

db.users.aggregate([
    {$lookup:{
        from:"posts",
        localField:"_Id", 
        foreignField:"userId",
        as:"posts"
    }}
])

db.users.aggregate([
    {$lookup:{
        from:"posts",
        localField:"_Id", 
        foreignField:"userId",
        as:"posts"
    }},
    {$project:{
        _id:0,
        name:1,
        "posts.title":1,
        "posts.desc":1
    }}
])