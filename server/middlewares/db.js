import mongoose from "mongoose";

const mongodburi = process.env.MONGODB_URI 
// || 'mongodb://127.0.0.1:27017/Gamic'
export default await mongoose.connect(mongodburi)
    .then(
        () => { console.log("db connected") }
    )
    .catch((error) => { console.log(error); })
