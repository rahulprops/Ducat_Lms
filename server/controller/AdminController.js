import handleRes from "../helper/handleRes.js"
import adminModel from "../models/admin.model.js";
import bcrypt from 'bcrypt'
export const adminRegister=async (req,res)=>{
    const {adminName,adminEmail,adminPass}=req.body;
    if(!adminName || !adminEmail || !adminPass)
        return handleRes(res,400,"all feilds requied")
    try {
        const isExistAdmin=await adminModel.findOne({adminEmail})
        if(isExistAdmin)
            return handleRes(res,400,"already exist admin")
        // hash password
        const hashPass=await bcrypt.hash(adminPass,12)
        const newAdmin=new adminModel({
            adminName,
            adminEmail,
            adminPass:hashPass
        })
        if(newAdmin){
            const admin=await newAdmin.save()
            if(admin)
                handleRes(res,200,"create admin sucess")
        }else{
            handleRes(res,400,"create admin failed")
        }
       
    } catch (err) {
     return handleRes(res,500,`server error ${err.message}`)  
    }
}