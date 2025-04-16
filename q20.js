db.employees.find(
    {salary:{$gt:2000},
    department: {$eq:"HR"}}
);

db.employees.find({
    $or:[
        {salary: {$gt:2000}},
        {department: {$eq:"HR"}}
    ],
});
//or operator is used to find the records which are in the list of values

db.employees.find({
    $and:[
        {salary: {$gt:2000}},
        {department: {$eq:"HR"}}
    ],
});
//and operator is used to find the records which are not in the list of values

db.employees.find({
    $nor:[
        {salary: {$gt:2000}},
        {department: {$eq:"HR"}}
    ],
})
//nor operator is used to find the records which are not in the list of values