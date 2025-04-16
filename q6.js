db.employees.insertOne(
    {
        name: "test",
        email: "test@gmail.com",
        nationality: "Indian"
    }
);
db.employees.find();
db.employees.findOne();
db.employees.deleteOne({email:"test@gmail.com"})
db.employees.find();