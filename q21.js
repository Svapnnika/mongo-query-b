db.employees.find({
    location: {exists:false}
});
db.employees.find({
    location: {exists:true}
});

db.employees.find({
    department: {in:["HR","Admin"]}
});

db.employees.find({
    department: {nin:["HR","Admin"]}
});
//nin is not in array