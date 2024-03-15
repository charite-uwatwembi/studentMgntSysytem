import mongoose from "mongoose";

const facilitatorSchema= new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:String,
        required:true,
        unique:true
    },
    nationalId:{
        type:String,
        required:true,
        unique:true
    },
    course:[{
        type:String,
        required:true
    }],
    role: {
        type: String,
        enum: ['assist', 'teach'],
        required: true
      }
},{timestamp:true})

const facilitatorModel = mongoose.model('Facilitator',facilitatorSchema)
export default facilitatorModel