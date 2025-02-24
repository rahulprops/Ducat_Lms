import {Router} from 'express'
import { adminRegister } from '../controller/AdminController.js';
// import multerMiddleware from '../multer/handle.profile.js';
import handleMulterMiddlware from '../multer/handle.profile.js';


const adminRoute=Router()

adminRoute.post("/adminregister",handleMulterMiddlware,adminRegister)
export default adminRoute;