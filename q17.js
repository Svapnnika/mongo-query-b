db.employees.updateMany(
    {},
    {$rename: {points: "score"}}
);

db.employees.find();
//remove the score field
db.employees.updateMany(
    {},
    {$unset: {score: ""}} 
);