import {Schema,model} from 'mongoose'

const adminSchema=new Schema({
    adminName:String,
    adminEmail:{
        type:String,
        unique:true
    },
    adminPass:String,
},{timestamps:true})
const adminModel=model("admin",adminSchema)
export default adminModel;