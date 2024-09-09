import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { NavLink, Outlet } from "react-router-dom"

function DeshNav() {
    const [showNav,setShowNav] = useState(false)

  return (
    <div className={`static md:flex md:gap-x-2 mt-2 overflow-x-hidden`}>
        <div className="">
            <div className={`h-10 w-full ${showNav?"hidden":"flex"} md:hidden`} onClick={()=>setShowNav(true)}>
                <MenuIcon />
            </div>
            <div className={`h-[85vh] ${showNav?"translate-x-0":"translate-x-[-100%]"} overflow-y-auto transition-transform md:translate-x-0 md:flex md:flex-col shadow-lg shadow-blue-300 absolute bg-[#3B82F6] md:static rounded-md w-[350px]`}>
                <div className='text-white md:hidden h-10 flex items-center pl-2'>
                    <div className='h-fit w-fit' onClick={()=>setShowNav(false)}>
                        <ClearIcon />
                    </div>
                </div>
                <div className="h-[50px] mt-2 w-[95%] ml-auto rounded-l-md">
                    <NavLink to={"showcase"} className={"h-full w-full pl-4 hover:transition-colors rounded-l-md hover:duration-200 hover:bg-white hover:text-[#3B82F6] text-white flex items-center justify-start"}>
                        Showcase
                    </NavLink>
                </div>
                <div className="h-[50px] mt-2 w-[95%] ml-auto rounded-l-md">
                    <NavLink to={"adddoctor"} className={"h-full w-full pl-4 hover:transition-colors rounded-l-md hover:duration-200 hover:bg-white hover:text-[#3B82F6] text-white flex items-center justify-start"}>
                        Add Doctor
                    </NavLink>
                </div>
                <div className="h-[50px] mt-2 w-[95%] ml-auto rounded-l-md">
                    <NavLink to={"editdoctor"} className={"h-full w-full pl-4 hover:transition-colors rounded-l-md hover:duration-200 hover:bg-white hover:text-[#3B82F6] text-white flex items-center justify-start"}>
                        Edit Doctor
                    </NavLink>
                </div>
                <div className="h-[50px] mt-2 w-[95%] ml-auto rounded-l-md">
                    <NavLink className={"h-full w-full pl-4 hover:transition-colors rounded-l-md hover:duration-200 hover:bg-white hover:text-[#3B82F6] text-white flex items-center justify-start"}>
                        Appointment
                    </NavLink>
                </div>
                <div className="h-[50px] mt-2 w-[95%] ml-auto rounded-l-md">
                    <NavLink className={"h-full w-full pl-4 hover:transition-colors rounded-l-md hover:duration-200 hover:bg-white hover:text-[#3B82F6] text-white flex items-center justify-start"}>
                        Services
                    </NavLink>
                </div>
                <div className="h-[50px] mt-2 w-[95%] ml-auto rounded-l-md">
                    <NavLink className={"h-full w-full pl-4 hover:transition-colors rounded-l-md hover:duration-200 hover:bg-white hover:text-[#3B82F6] text-white flex items-center justify-start"}>
                        Reviews
                    </NavLink>
                </div>
            </div>
        </div>
      <Outlet />
    </div>
  )
}

export default DeshNav
