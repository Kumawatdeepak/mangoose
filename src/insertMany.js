const mongoose = require('mongoose');

//Create new connection and create new db
mongoose.connect("mongodb://localhost:27017/student", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Connection Successfull...!")).catch((err) => console.log(err));

//Schema 
const studentlistSchema = new mongoose.Schema({

    roll: Number,
    name: String,
    age: Number,
    city: String,
    status: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

//Create new collection

const Student = new mongoose.model('student', studentlistSchema);


//Create document or insert 

const createDocument = async () => {
    try {
        const indoreStudent = new Student({
            roll: 103,
            name: "Dharmesh",
            age: 26,
            city: "indore",
            status: true,
        });
        const dewasStudent = new Student({
            roll: 104,
            name: "Mahendra",
            age: 30,
            city: "Dewas",
            status: true,
        });
        const ujjainStudent = new Student({
            roll: 105,
            name: "Hema",
            age: 34,
            city: "Ujjain",
            status: true,
        });
        const bhopaltStudent = new Student({
            roll: 106,
            name: "Dharmendra",
            age: 40,
            city: "Bhopal",
            status: true,
        });
        const result = await Student.insertMany([indoreStudent, dewasStudent, ujjainStudent, bhopaltStudent]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}

createDocument();


