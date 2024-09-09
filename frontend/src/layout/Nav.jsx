import { NavLink } from "react-router-dom"
import logo from "../assets/images/logo2.png"
import { Menu} from "@mui/icons-material"

import {motion} from "framer-motion"
import { useContext, useState } from "react"
import {MediaContext} from "../context/UserContext"

function Nav() {
    const {windowHeight} = useContext(MediaContext)
    const [menu,setMenu] = useState(false)
    
    
  return (
    <>
        <div className='h-16  shadow-lg flex items-center justify-between px-1 py-1 sticky top-0 bg-white overflow-hidden z-50'>
        
        <motion.div  className="md:hidden" id="hambur1" initial={windowHeight>768?null:{x:"-200px",opacity:0}} animate={windowHeight>768?null:{x:0,opacity:1}} transition={{duration:0.2,ease:"easeIn"}}>
            <button onClick={()=>setMenu(!menu)}>
                <Menu />
            </button>
        </motion.div>

        <motion.div className='md:h-[100%] md:w-auto w-32 logo ' initial={windowHeight>768?{x:"-200px",opacity:0}:{y:"10px",opacity:0}} animate={windowHeight>768?{x:0,opacity:1}:{y:0,opacity:1}} transition={{duration:0.3}} >
            <img src={logo} alt="" className="h-[100%]" />
        </motion.div>
        <div className="h-[100%] hidden md:flex gap-3">
            <motion.div initial={{y:"10px",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.3,type:"tween"}} className="list-none hover:text-green-500 relative h-[100%] flex items-center justify-cente after:contents-'' after:absolute after:h-[3px] after:bg-green-500 after:w-0 after:left-0 after:bottom-[25%] after:rounded-xl hover:after:w-[100%] after:transition-all listNav1">
                <NavLink to={"/"}>Home</NavLink>
            </motion.div>
            <motion.div initial={{y:"10px",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.3,type:"tween"}} className="list-none hover:text-green-500 relative h-[100%] flex items-center justify-cente after:contents-'' after:absolute after:h-[3px] after:bg-green-500 after:w-0 after:left-0 after:bottom-[25%] after:rounded-xl hover:after:w-[100%] after:transition-all listNav1">
                <NavLink to={"/"}>About Us</NavLink>
            </motion.div>
            <motion.div initial={{y:"10px",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.3,type:"tween"}} className="list-none hover:text-green-500 relative h-[100%] flex items-center justify-cente after:contents-'' after:absolute after:h-[3px] after:bg-green-500 after:w-0 after:left-0 after:bottom-[25%] after:rounded-xl hover:after:w-[100%] after:transition-all listNav1">
                <NavLink to={"/contact"}>Contact</NavLink>
            </motion.div>
            <motion.div initial={{y:"10px",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.3,type:"tween"}} className="list-none hover:text-green-500 relative h-[100%] flex items-center justify-cente after:contents-'' after:absolute after:h-[3px] after:bg-green-500 after:w-0 after:left-0 after:bottom-[25%] after:rounded-xl hover:after:w-[100%] after:transition-all listNav1">
                <NavLink to={"/doctor"}>Doctor</NavLink>
            </motion.div>
            <motion.div initial={{y:"10px",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.3,type:"tween"}} className="list-none hover:text-green-500 relative h-[100%] flex items-center justify-cente after:contents-'' after:absolute after:h-[3px] after:bg-green-500 after:w-0 after:left-0 after:bottom-[25%] after:rounded-xl hover:after:w-[100%] after:transition-all listNav1">
                <NavLink to={"/services"}>Services</NavLink>
            </motion.div>
            <motion.div initial={{y:"10px",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.3,type:"tween"}} className="list-none hover:text-green-500 relative h-[100%] flex items-center justify-cente after:contents-'' after:absolute after:h-[3px] after:bg-green-500 after:w-0 after:left-0 after:bottom-[25%] after:rounded-xl hover:after:w-[100%] after:transition-all listNav1">
                <NavLink to={"/reviews"}>Review</NavLink>
            </motion.div>
        </div>
        <motion.div initial={{x:"200px",opacity:0}} animate={{x:0,opacity:1}} transition={{ease:"easeIn",duration:0.2}} className="h-[100%] flex items-center justify-center navbtn1 " >
            <NavLink to={"/"} className='py-2 px-1 font-sans bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg hover:border-b-4 border-black transition-all '>
                Make Appointment
            </NavLink>
        </motion.div>
        </div>
        <div className={`h-[85vh] md:hidden rounded-md gap-2 pt-3 z-[1000] flex flex-col shadow-2xl overflow-hidden fixed top-18 bg-neutral-700 text-white w-[300px] ${menu?"translate-x-[0px]":"translate-x-[-300px]"} `} style={{transitionProperty:"transform",transitionDuration:"0.3s"}} >
            <div className="list-none px-2 relative h-10  flex">
                <NavLink onClick={()=>setMenu(false)} to={"/"} className={"w-[100%] flex justify-start items-center shadow-lg px-2 hover:translate-x-5 transition-transform "}>Home</NavLink>
            </div>
            <div className="list-none px-2 relative h-10 flex  justify-cente">
                <NavLink onClick={()=>setMenu(false)} to={"/"} className={"w-[100%] flex justify-start items-center shadow-lg px-2 hover:translate-x-5 transition-transform "}>About Us</NavLink>
            </div>
            <div className="list-none px-2 h-10 flex  justify-cente">
                <NavLink onClick={()=>setMenu(false)} to={"/contact"} className={"w-[100%] flex justify-start items-center shadow-lg px-2 hover:translate-x-5 transition-transform  "}>Contact</NavLink>
            </div>
            <div className="list-none px-2 h-10 flex  justify-center">
                <NavLink onClick={()=>setMenu(false)} to={"/doctor"} className={"w-[100%] flex justify-start items-center shadow-lg px-2 hover:translate-x-5 transition-transform "}>Doctor</NavLink>
            </div>
            <div className="list-none px-2 h-10 flex  justify-center">
                <NavLink onClick={()=>setMenu(false)} to={"/services"} className={"w-[100%] flex justify-start items-center shadow-lg px-2 hover:translate-x-5 transition-transform  "}>Services</NavLink>
            </div>
            <div className="list-none px-2 h-10 flex  justify-center">
                <NavLink onClick={()=>setMenu(false)} to={"/reviews"} className={"w-[100%] flex items-center justify-start shadow-lg px-2 hover:translate-x-5 transition-transform  "}>Review</NavLink>
            </div>
        </div>
    </>
  )
}

export default Nav
