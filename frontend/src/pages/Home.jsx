import Cheackup from "../assets/images/banner-image.png"
import ServicesCard from "../elements/ServicesCard";
import Doctorcard from "../elements/Doctorcard";


import {motion} from "framer-motion"

import { useContext, useEffect, useState } from "react";
import { MediaContext } from "../context/UserContext";
import axios from "axios";
import { NavLink } from "react-router-dom";



function Home() {
  
  const {windowHeight,services} = useContext(MediaContext)

  const [Doctor,setDoctor] = useState([])

  useEffect(()=>{
    (async function() {
      const {data} = await axios.post(`http://localhost:8000/getdoctor`,{page:0})
      // console.log(data)
      setDoctor(data.data)
    })()
  },[])

  return (
    <>
      {/* <div className="absolute hidden">Make Appointmnet</div> */}
      <div className="md:h-[370px] bg-blue-500 border flex flex-col-reverse md:flex md:flex-row mt-2 shadow-lg rounded-md mx-1 overflow-hidden" id="maindivs">
        <div className="h-[100%] md:w-[50%] flex-col justify-center md:px-3 flex relative md:pt-0 pt-4 md:bg-blue-500 bg-white">
          <div>
            <motion.h1 initial={{y:"-100px"}} animate={{y:0}} className="md:text-2xl font-serif text-center animate-bounce md:text-start text-black md:text-white font-extrabold " id="title">Imaprial</motion.h1>
          </div>
          <motion.div initial={{y:"50px", opacity:0}} transition={{duration:0.5}} animate={{y:0,opacity:1}} className="mt-2" id="titleD">
            <p className="md:text-sm text-sm text-black md:text-start text-center md:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quisquam ipsa odio laboriosam laborum veritatis ratione alias nostrum sapiente iusto amet esse, cupiditate iure nihil architecto minima dolorum beatae officia?
            </p>
          </motion.div>
          <motion.a
            href="https://www.google.com/maps/@23.0082969,91.4003893,3a,15y,273.17h,114.86t/data=!3m6!1e1!3m4!1sphkuglRSmJBYQGa1-EVQUw!2e0!7i16384!8i8192?coh=205409&entry=ttu"
            target="_blank"
            drag
            dragConstraints={{top:0,bottom:0,left:0,right:0}}
            _dragY={false}
            initial={{y:"50px", opacity:0}} transition={{duration:0.5}} animate={{y:0,opacity:1}}
            className="mt-2 md:mt-4 border relative w-fit px-2 font-bold hover:text-white text-black md:text-white cursor-pointer md:m-0 m-auto mb-4 rounded-md py-3 bg-gradient-to-tr from-blue-500 via-lime-500 to-amber-300 text-transparent bg-clip-text overflow-hidden"
          id="links" >
              Get Direction
          </motion.a>
        </div>

        <div className="md:h-[100%] md:w-[50%] h-[300px] flex justify-center">
          <motion.img 
          initial={windowHeight>768?{x:"50%",opacity:0}:{scale:0.5,opacity:0}} transition={{duration:0.5}} animate={windowHeight>768?{x:0,opacity:1}:{scale:1,opacity:1}}
          className="md:h-[100%] h-[100%] w-[50%] hover:animate-pulse" src={Cheackup} alt="" />
        </div>
        
      </div>
      <div className="mt-10">
        <div className="flex justify-center relative w-fit m-auto before:contents-'' before:w-[100%] before:absolute before:bottom-[-1px] before:h-1 before:bg-black ">
          <h1 className="text-lg font-semibold font-serif">OUR SERVICES</h1>
        </div>
        <div className="h-auto py-4 justify-center mt-5 items-center w-[100%] overflow-x-hidden overflow-y-hidden flex flex-wrap gap-3 boxBox">
          {
            services.map((items,index)=> <ServicesCard text={items.text} image={items.img} key={index} /> )
          }
        </div>

        <div className="flex justify-between mt-2 px-20">
          <div className="flex w-[60%] justify-end">
            <h1 className="text-lg font-semibold font-serif">OUR DOCTOR</h1>
          </div>
          <NavLink to={"/doctor"} className={"text-blue-500 font-semibold font-sens"}>See More</NavLink>
        </div>
        <div className="h-auto mb-10 w-[100%] mt-4 flex flex-wrap justify-center gap-5">
          {
            Doctor.map((items,index)=><Doctorcard items={items} key={index} />)

          }
        </div>
      </div>
    </>
  );
}
export default Home;
