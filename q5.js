db.employees.insertMany([{
    name: "Mike Joseh",
    email: "mike@gmail.com",
    department: "IT",
    salary: 2456,
    location: ["FL", "TX"],
    date: Date()
},
{
    name: "Cathy G",
    email: "cathy@gmail.com",
    department: "IT",
    salary: 3456,
    location: ["AZ", "TX"],
    date: Date()
}
])
db.employees.find()
// cls-clear the screen