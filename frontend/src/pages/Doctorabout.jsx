import { useState,useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {motion} from "framer-motion"
import { ShareOutlined } from '@mui/icons-material'
import 'react-calendar/dist/Calendar.css';
import AppointmentForm from '../elements/AppointmentForm'

function Doctorabout() {

    const [seMore,setSemor]  = useState("See More")
    
    const [showAppointment,setShowAppointment] = useState(false)
    const {state} = useLocation()
    
    console.log(state)
    
    function handleClick(){
        if(seMore=="See More"){
            setSemor("See Less")
        }else{
            setSemor("See More")
        }
    }

    const seMoreLes = <p className='text-gray-800 underline'>{seMore}</p>

    // useEffect(()=>{
    //     window.scroll({top:0,left:0})
    //   },[])
    

    function timeFormator (times) {
        const hour = parseInt(times.split(":")[0]);
        if(hour>11){
            if(hour==12){
                return `${hour}:${times.split(":")[1]} PM`
            }else{

                return `${hour-12}:${times.split(":")[1]} PM`
            }
        }else{
            return `${times} AM`
        }
    }
    
  return (
    <div>
        <div className='flex mt-2 px-2 gap-2'>
            <div className='md:w-2/3 w-full border rounded-md'>
                <div className='md:flex flex gap-4'>
                    <div className='h-[200px] md:mt-3 w-[200px] border rounded-md'>
                        <img src={`http://localhost:8000/doctorimage/${state.image}`} loading='lazy' decoding='async' role='presentation' className='h-[100%] w-[100%]' alt="" />
                    </div>
                    <div className='md:mt-3 flex flex-col gap-1'>
                        <h1 className='font-semibold text-lg'>{state.name}</h1>
                        <p className='font-thin text-sm'>{state.bio}</p>
                        <p className='font-thin text-sm mt-2'>{state.specializations[0]}</p>
                        <p className='font-semibold text-[#0451A6] text-sm mt-2'>{state.experiance}</p>
                        <p className='font-semibold text-[#0451A6] text-sm'>{state.Where}</p>
                        <div className='md:flex hidden md:mt-2'>
                            <div className='flex w-1/2 items-center h-auto gap-2'>
                                <motion.svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#0451A6" className="fill-steel-blue-t01"><motion.path initial={{pathLength:0}} animate={{pathLength:1,transition:{ease:"easeInOut",duration:1}}} d="M14,8h1a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2Zm0,4h1a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2ZM9,8h1a1,1,0,0,0,0-2H9A1,1,0,0,0,9,8Zm0,4h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,8H20V3a1,1,0,0,0-1-1H5A1,1,0,0,0,4,3V20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm-8,0H11V16h2Zm5,0H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v5H6V4H18Z"></motion.path></motion.svg>
                                <div className='flex flex-col'>
                                    <h1 className='font-semibold text-md'>Imaprial Feni</h1>
                                    <p className='font-thin'>Plot 81, Block: E, Bashundhara R/A, 6, Vatara, Dhaka-1229, Bangladesh</p>
                                    <a href='https://www.google.com/maps/@23.0082969,91.4003893,3a,15y,273.17h,114.86t/data=!3m6!1e1!3m4!1sphkuglRSmJBYQGa1-EVQUw!2e0!7i16384!8i8192?coh=205409&entry=ttu' target='_blank' className="px-2 py-3 hover:bg-[#078FF7] transition-colors duration-500 hover:text-white text-[#078FF7] w-fit rounded-md bg-[#DBEFFE]">Get Direction</a>
                                </div>
                            </div>
                            <div className='flex w-1/2 items-center h-auto gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#0451A6"  className="fill-steel-blue-t01"><path d="M12,6a.99974.99974,0,0,0-1,1v4.38379L8.56934,12.60693a.99968.99968,0,1,0,.89843,1.78614l2.98145-1.5A.99874.99874,0,0,0,13,12V7A.99974.99974,0,0,0,12,6Zm0-4A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"></path></svg>
                                <div className='flex flex-col'>
                                    <h1 className='font-semibold text-md'>Availability</h1>
                                    <p className='font-thin'>{state.day.map((item)=>{return `${item} `})} {timeFormator(state.start)} - {timeFormator(`12:00`)} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={()=>setShowAppointment(!showAppointment)} className='py-2 mt-2 md:hidden w-full bg-blue-500 text-white rounded-md'>
                    Make Apportment
                </button>
                <div className='font-sans md:mt-0 mt-4 w-full font-semibold text-sm md:px-2'>
                    <h1>Serves for:</h1>
                    <div className='w-full flex flex-wrap mt-1 gap-2'>
                        {
                            console.log()
                        }
                        {
                            state.specializations.concat(state.experiences).concat(state.concentration).map((items,index)=>{
                                return <NavLink key={index} className={"w-fit text-xs px-3 py-[5px] border-[1px] rounded-md hover:text-white hover:bg-blue-300"}>{items}</NavLink>
                            })
                        }
                    </div>
                </div>

                <hr className='mt-5 mb-5 w-[90%] m-auto' />

                <div className='font-sans md:mt-0 mt-4 w-full font-semibold text-sm md:px-2'>
                    <div className='flex justify-between'>
                        <h1>About:</h1>
                        <button className='h-2'>
                            <ShareOutlined />
                        </button>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="fill:#04518c"><path d="m21.707 11.293-8-8A1 1 0 0 0 12 4v3.545A11.015 11.015 0 0 0 2 18.5V20a1 1 0 0 0 1.784.62 11.456 11.456 0 0 1 7.887-4.049c.05-.006.175-.016.329-.026V20a1 1 0 0 0 1.707.707l8-8a1 1 0 0 0 0-1.414ZM14 17.586V15.5a1 1 0 0 0-1-1c-.255 0-1.296.05-1.562.085a14.005 14.005 0 0 0-7.386 2.948A9.013 9.013 0 0 1 13 9.5a1 1 0 0 0 1-1V6.414L19.586 12Z"></path></svg> */}
                    </div>
                    <div className='w-full text-xs break-words text-gray-400 flex flex-wrap mt-1 py-2 gap-2'>
                        <p>
                            {
                                seMore=="See More"?state.about.length>1000?state.about.slice(0,1000):state.about:state.about
                            }
                            <button onClick={handleClick}>
                                {state.about.length>1000?seMoreLes:null}
                            </button>
                        </p>

                    </div>
                </div>
                
            </div>
            
            <div className='md:w-1/3 w-[96vw]  absolute bg-white z-20 h-auto md:static overflow-x-hidden overflow-y-auto border md:flex flex-col'>
                <div className='h-10 hidden mt-2 md:flex items-center justify-center'>
                    <button onClick={()=>setShowAppointment(!showAppointment)} className='h-[80%] w-[80%] flex items-center justify-center rounded-md text-white bg-[#078FF7]'>
                        Make Appointment
                    </button>
                </div>
                <hr className='w-[90%] md:flex hidden m-auto mt-2 mb-2' />

                {
                    showAppointment && <AppointmentForm setShowAppointment={setShowAppointment} />
                    
                }
            </div>
        </div>

        <div className='mt-3'>
            <div className='h-10 flex px-5 gap-2 m-auto' id='nav'>
                <button className='h-[100%] w-fit px-2 flex items-center justify-center font-sans font-semibold relative after:contents-" " after:transition-transform hover:after:translate-x-0 after:absolute after:w-[100%] after:bg-green-500 after:h-[8%] after:bottom-0 overflow-x-hidden after:translate-x-[-100%]  '>Info</button>
                <button className='h-[100%] w-fit px-2 flex items-center justify-center font-sans font-semibold relative after:contents-" " after:transition-transform hover:after:translate-x-0 after:absolute after:w-[100%] after:bg-green-500 after:h-[8%] after:bottom-0 overflow-x-hidden after:translate-x-[-100%]  '>Video</button>
            </div>
            <div className='md:w-1/2 w-full '>
                <div className='flex flex-col pl-2'>
                    <h1 className='font-semibold'>Field of Concentration</h1>
                    <ul className='flex md:w-1/2 mt-2 w-full justify-between md:pl-5 px-2 md:justify-between gap-x-5 gap-y-2 list-none flex-wrap'>
                        {
                            state.concentration.map((items,index)=><li className='text-md w-fit px-5  text-sm font-normal text-[#39434D]' key={index}>{items}</li>)
                        }
                    </ul>
                </div>
                <hr className='m-auto w-[90%] mt-5 mb-5' />
                <div className='flex flex-col pl-2'>
                    <h1 className='font-semibold'>Specializations</h1>
                    <ul className='flex md:w-1/2 mt-2 w-full justify-between md:pl-5 px-2 md:justify-between gap-x-5 gap-y-2 list-none flex-wrap'>
                        {
                            state.specializations.map((item,index)=><li className='text-md w-fit px-5 text-sm font-normal text-[#39434D]' key={index}>{item}</li>)
                        }
                    </ul>
                </div>

                <hr className='m-auto w-[90%] mt-5 mb-5' />

                <div className='flex flex-col pl-2'>
                    <h1 className='font-semibold'>Work Experiences</h1>
                    <ul className='flex md:w-1/2 mt-5 w-full justify-between md:pl-5 px-2 md:justify-between gap-x-5 gap-y-2 list-none flex-wrap'>
                        {
                            state.experiences.map((item,index)=><li className='text-md w-fit px-5 text-sm font-normal text-[#39434D]' key={index}>{item}</li>)
                        }
                        
                    </ul>
                </div>

                <hr className='m-auto w-[90%] mt-5 mb-5' />

                <div className='flex flex-col pl-2'>
                    <h1 className='font-semibold'>Education</h1>
                    <ul className='flex md:w-1/2 mt-5 w-full justify-between md:pl-5 px-2 md:justify-between gap-x-5 gap-y-2 list-none flex-wrap'>
                        {
                            state.education.map((item,index)=><li className='text-md w-fit px-5 text-sm font-normal text-[#39434D]' key={index}>{item}</li>)
                        }
                        <li className='text-md w-fit px-5 text-sm font-normal text-[#39434D]'>MBBS- Bachelor of Medicine and Bachelor of Surgery</li>
                        <li className='text-md w-fit px-5 text-sm font-normal text-[#39434D]'>DEM- Diploma in Endocrinology & Metabolism</li>
                        <li className='text-md w-fit px-5 text-sm font-normal text-[#39434D]'>MD (Endocrinology)- Doctor of Medicine</li>
                    </ul>
                </div>

                
            </div>
        </div>
        
    </div>
  )
}

export default Doctorabout
