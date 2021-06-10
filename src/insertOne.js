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
    try{
        const reactStudent = new Student({
            roll: 107,
            name: "Prakash",
            age: 25,
            city: "Bhounrasa",
            status: true,
        });
        const result = await reactStudent.save();
        console.log(result._id);
    }catch(err){
        console.log(err);

    }
    
}

createDocument();


