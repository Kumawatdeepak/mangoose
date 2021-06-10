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


//Get document or insert 

const getDocument = async () => {
    try {
        //const result = await Student.find({city:"Dewas"});
        //const result = await Student.find({city:"Dewas"}).select({name:1, _id:0});
        //const result = await Student.find({ city: "Dewas" }).select({ name: 1, _id: 0 }).limit(1);
        //const result = await Student.find({ roll: { $gt : 103}}).select({name:1});
        //const result = await Student.find({ roll: {$gte : 105}}).select({name:1});
        const result = await Student.find({ city: {$in : ['Dewas']}}).select({name:1});
        console.log(result);

    } catch (err) {
        console.log(err);
    }
}
getDocument();


