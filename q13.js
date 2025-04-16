db.employees.find({},{_id:0,name:1}) //to display only names id:0 should be kept to hide the id if not by default is displays
// db.employees.find({},{_id:0,email:1}) //to display only emails
//2nd curly brace is used to specify the fields that we want to show in output
//1st curly brace is used to specify the condition on which basis we are filtering our data
db.employees.find({},{_id:0,name:1,department:1})
db.employees.find(
    {email:"amy@gmail.com"},
    {_id:0,name:1,department:1})
db.employees.find(
    {email:"amy@gmail.com"},
    {_id:0,name:1,department:1,email:1})    
db.employees.find(
    {email:"amy@gmail.com"},
    {_id:false,name:true,department:true,email:true})