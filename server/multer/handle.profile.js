import { log } from 'console'
import multer from 'multer'

import path from 'path'
import handleRes from '../helper/handleRes.js'

  let getPublicDir=path.join("public")
 
   

    const storage=multer.diskStorage({
        destination:(req,file,cb)=>{
          return cb(null, `${getPublicDir}/adminProfile`)
        },
        filename:(req,file,cb)=>{
          return cb(null,file.originalname)
        }
      })
      let multerMiddleware= multer({storage}).single("profile")

      function handleMulterMiddlware(req,res,next){
        multerMiddleware(req,res,(err)=>{
            // console.log(err)
            if(err && err.field !=="profile"){
                return handleRes(res,400,"invalid profile fields")
            }
            // console.log(req.file)
            if(req.file.mimetype !=="image/jpeg")
                return handleRes(res,400,"allow only jpeg")
            next()
        })
      }
      export default handleMulterMiddlware
     
  
