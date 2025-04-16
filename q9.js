db.employees.count()
db.employees.find().skip(1) //to display the doc except the 1st doc
db.employees.find().sort({name:1})
db.employees.find().sort({name:-1})
db.employees.find().limit(2)
db.employees.find().skip(1).limit(1) //to display 2nd doc only
db.employees.findOne({email:"cathy@gmail.com"})