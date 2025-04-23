db.students.insertOne({
    studentName: "John"
})
db.subjects.insertOne({
    subjectName: "Maths"
})
db.marks.insertOne({
    studentId: ObjectId('6808a7509db2a267acb5f89c'),
    subjectId: ObjectId('6808a75a9db2a267acb5f89d'),
    score: 95
})
//display studentName,subjectName,score
db.marks.find(
    {},
    {_id:0,score:1}
)
db.marks.aggregate([
    {$lookup:{
        from: "subjects",
        localField: "subjectId",
        foreignField: "_id",
        as: "subjects",
    },},
    {$unwind:"$subjects"},
    {$lookup:{
        from: "students",
        localField: "studentId",
        foreignField: "_id",
        as: "students",
    },},
    {$unwind:"$students"},
    {$project:{
        _id:0,
        "students.studentName":1,
        "subjects.subjectName":1,
        score: 1
    }},
])
db.createView("marksView","marks",[
    {$lookup:{
        from: "subjects",
        localField: "subjectId",
        foreignField: "_id",
        as: "subjects",
    },},
    {$unwind:"$subjects"},
    {$lookup:{
        from: "students",
        localField: "studentId",
        foreignField: "_id",
        as: "students",
    },},
    {$unwind:"$students"},
    {$project:{
        // _id:0,
        "students.studentName":1,
        "subjects.subjectName":1,
        score: 1
    }},
])
db.marksView.find()
db.marksView.drop()