import mongoose from "mongoose";
const connectDb=()=>{
    mongoose.connect('mongodb://localhost:27017/saraha')
  .then(() => console.log('Connected!')).catch(err => console.log('Error connecting',err));
}
export default connectDb;