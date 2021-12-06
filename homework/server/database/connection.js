const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        
        const con = await mongoose.connect("mongodb+srv://ozi:sadecesens259@cluster0.sjbwk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB