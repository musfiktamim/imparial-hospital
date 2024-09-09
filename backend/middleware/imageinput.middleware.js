import multer from "multer";

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public/doctorimage")
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}_${file.originalname}`)
    }
})

export const upload = multer({storage:storage})