//show dbs
//use mydb 
db.createCollection("users");
db.createCollection("posts");
db.users.insertMany([
    {
        name: "name1"
    },
    {
        name: "name2"
    }
]);
db.posts.insertMany([
    {
        title: "title1",
        desc: "desc1",
        userId: ObjectId('68088a47e145a29b59b5f8a2')
    },
    {
        title: "title2",
        desc: "desc2",
        userId: ObjectId('68088a47e145a29b59b5f8a2')
    },
    {
        title: "title3",
        desc: "desc3",
        userId: ObjectId('68088a47e145a29b59b5f8a3')
    }
]);
db.users.find()
db.posts.find()
db.createCollection("userPosts")
db.userPosts.insertMany([
    {
        title:"title1",
        desc: "desc1",
        name: "name1"
    },
    {
        title:"title2",
        desc: "desc2",
        name: "name2"
    },
    {
        title:"title3",
        desc: "desc3",
        name: "name3"
    }
])
db.userPosts.find({}, { name: 1, title: 1, _id: 0 });
db.userPosts.find({}, { name: 1, title: 1});
db.userPosts.updateMany(
    { name: "name 1" },
    {
      $set: { name: "n1" },
    }
  );
  db.createCollection("cust", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "email"],
      },
    },
  });
db.cust.insertOne({
    name: "customer1",
    email: "customer1@gmail.com",
    city: "Hyd"
})