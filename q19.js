db.employees.find(
    {department: {$eq:"HR"}}
);
//eq : equal to
db.employees.find(
    {department: "HR"}
);
//Both are same

db.employees.find(
    {salary:{$gt:2000}}
);
//gt : greater than

db.employees.find(
    {salary:{$gte:2456}}
);
//gte : greater than or equal to

db.employees.find(
    {salary:{$lt:2456}}
);
//lt : less than

db.employees.find(
    {salary:{$lte:2456}}
);
//lte : less than or equal to