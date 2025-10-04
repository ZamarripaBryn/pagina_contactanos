import {Router} from "express"
const router = Router()

router.get("/",(req,res)=>{
	res.render("index")
})

router.get("/abc",(req,res)=>{//req resivir datos y res mandar datos
     res.send("Estas en abc")
})

router.get("/contactanos",(req,res)=>{
	res.render("contactanos")
	})
router.get("/contactanos",(req,res)=>{
	res.render("index")
})

export default router 