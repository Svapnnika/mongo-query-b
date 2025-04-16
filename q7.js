db.employees.insertMany([{
    name: "test1",
    email: "test1@gmail.com",
    nationality: "ABC"
},
{
    name: "test2",
    email: "test2@gmail.com",
    nationality: "DEF"
}]
)
db.employees.find({nationality: "ABC"})
db.employees.findOne({nationality: "ABC"})
db.employees.deleteMany({nationality: "ABC"})   
