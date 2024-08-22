import { model, Schema } from "mongoose";
const userSchema = new Schema({
userName:{
    type: String,
    required:true,
},
email:{
    type: String,
    required:true,
    unique:true,
},
password:{
    type: String,
    required:true,
},
age:{
    type: Number,
  
},
confirmEmail:{
    type: 'boolean',
    default:false,
},
gender:{
    type: String,
    enum:['Male','Female'],     
}



},{timestamps:true})
const userModel=model('USer',userSchema)
export default userModel;