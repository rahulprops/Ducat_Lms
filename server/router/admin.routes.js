import {Router} from 'express'
import { adminRegister } from '../controller/AdminController.js';

const adminRoute=Router()

adminRoute.post("/adminregister",adminRegister)
export default adminRoute;