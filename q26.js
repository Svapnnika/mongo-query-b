//aggregation framework
db.createCollection("employees")
db.employees.aggregate([
    {},//pipeline1
    {},//pipeline2
    {},//pipeline3
])
db.employees.aggregate([
    {$match:{department:{$eq:"HR"}}}
])
db.employees.aggregate([
    {$project:{_id:0,name:1,department:1}}
])
db.employees.aggregate([
    {$match:{department:{$eq:"HR"}}},
    {$project:{_id:0,name:1,department:1}}
])
db.employees.aggregate([
    {$match:{department:{$eq:"HR"}}},
    {$addFields:{Bonus: "NA"}},
    {$project:{_id:0,name:1,department:1,Bonus:1}},
    {$sort:{name:1}},
    {$skip:1},
    {$limit:1}
])
db.employees.aggregate([
    {$match:{department:{$eq:"HR"}}},
    // {$addFields:{Bonus: "NA"}},
    {$project:{_id:0,name:1,department:1,Bonus:1}},
    {$sort:{name:1}},
    {$skip:1},
    {$limit:1}
])
//we can directly add it to project also instead of addfields

