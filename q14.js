db.employees.insertOne({
    name: "Jason George",
    email: "jason@gmail.com",
    address: {city: "Jacksonville", state:"FL"},
    department: "HR",
    salary: 1000,
    location: ["FL","TX"],
    date: Date(),
});
db.employees.find({"address.city":"Jacksonville"},{_id:0,name:1,department:1,email:1})
db.employees.find({location:"TX"})
db.employees.find({},{"name":1,dept:"$department"}) //to change the name of department to dept
//1st curly brace is for condition and second one is to get the output
db.employees.updateOne(
    {email:"amy@gmail.com"},
    {$set:{department:"Admin"}}
);
db.employees.find()

db.employees.find(
    {department:"HR"});

db.employees.find(
    {department:"HR",location:"OH"},
    {_id:0,name:1,email:1}
);

db.employees.find(
    {department:"HR",location:"FL"},
    {_id:0,name:1,email:1}
);

db.employees.updateOne(
    {email:"jason@gmail.com"},
    {$set:{email:"jason@yahoo.com"}}
);