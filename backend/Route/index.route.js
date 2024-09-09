import express from "express";
import DoctorController from "../controller/doctor.controller.js";
import deshauthenticate from "../middleware/deshauthenticate.js";
import DeshboardController from "../controller/deshboard.controller.js";
import { upload } from "../middleware/imageinput.middleware.js";


const router = express.Router();

router.post("/postreviewhospital",DoctorController.PostReview)
router.post("/getreviewhospital",DoctorController.GetReview)



router.post("/deshsignin",DeshboardController.signin)
router.post("/deshlogin",DeshboardController.login)



router.post("/deshboard",deshauthenticate,DeshboardController.home)
router.post("/adddoctor",upload.single("image"),deshauthenticate,DeshboardController.addDoctor)
router.post("/getdoctor",DeshboardController.getDoctor)
router.get("/alldoctor",DeshboardController.getAllDataInOneSeconds)



export default router