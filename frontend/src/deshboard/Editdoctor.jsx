import axios from "axios"
import { useEffect, useState } from "react"
import {motion} from "framer-motion"
import { NavLink } from "react-router-dom"
import EdirCard from "./elements/EdirCard"
import { TfiSearch } from "react-icons/tfi";
import bgimage from "../assets/images/about1.png"

function Editdoctor() {
    const [page,setPage] = useState(0)
    const [data,setData] = useState([])
    const [searchDoctor,setSearchDoctor] = useState([])
    const [doctor,setDoctor] = useState([])
    const [showDialogs,setShowDialogs] = useState(false)
    const [dialogs,setDialogs] = useState({})
    const [searchText,setSearchText] = useState("")

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            const windowHeight = window.innerHeight;
            const scrollbarHeight = document.documentElement.scrollHeight;
            const scrolltop = document.documentElement.scrollTop;
            if(windowHeight+scrolltop>=scrollbarHeight){
                setPage(page+1);
            }
        })
    })

    useEffect(()=>{
        (async function(){
            const {data} = await axios.get(`http://localhost:8000/alldoctor`)
            setDoctor(data)
        })()
    },[])

    
    
    useEffect(()=>{
        (async function() {
            const {data} = await axios.post(`http://localhost:8000/getdoctor`,{page:page})
            if(data.data_length!=0){
                setData((prev)=>[...prev,...data.data])
            }
        })()
    },[page])

    function handleChange(e){
        const filtedWithName = doctor.filter((items)=> items.name.toLowerCase().includes(e.target.value.toLowerCase()) )
        const filterWithSpetalization = doctor.filter((items)=>items.specializations.some((item)=>item.toLowerCase().includes(e.target.value.toLowerCase())))
        const filterWithEducation = doctor.filter((items)=>items.education.some((item)=>item.toLowerCase().includes(e.target.value.toLowerCase())))
        const filterWithConcertation = doctor.filter((items)=>items.concentration.some((item)=>item.toLowerCase().includes(e.target.value.toLowerCase())))
        const filterWithExperiences = doctor.filter((items)=>items.experiences.some((item)=>item.toLowerCase().includes(e.target.value.toLowerCase())))
        const allArray = new Set([...filtedWithName,...filterWithSpetalization,...filterWithConcertation,...filterWithExperiences,...filterWithEducation])
        setSearchDoctor([...allArray])
        setSearchText(e.target.value)
    }
    
  return (
    <> 
    <div className="flex flex-col relative gap-y-5">
        <div className='h-12 shadow-lg flex items-center justify-center gap-2 z-20 bg-white shadow-blue-200 mt-2'>
            <select className='border rounded-md py-2 outline-none' name="" id="">
                <option value="">Hello</option>
                <option value="">Hellos</option>
                <option value="">Helle</option>
                <option value="">Helld</option>
                <option value="">Hellp</option>
            </select>

            <div className='h-[100%] items-center flex'>
                <input type="text" onChange={handleChange} className='h-[80%] w-[60vw] outline-none border-l border-t border-b rounded-l-md px-2 md:w-[40vw]' />
                <button className='px-4 border-r border-t border-b py-[10px] rounded-r-md'>
                    <TfiSearch />
                </button>
            </div>            
        </div>

        <div className={`absolute w-[100%] flex-wrap min-h-64 top-14 border z-30 bg-white ${searchText?"flex":"hidden"} `} >
            {
                searchDoctor.length!=0?
                searchDoctor && searchDoctor.map((item,index)=><EdirCard key={index} item={item} setDialogs={setDialogs} setShowDialogs={setShowDialogs}  />)
                : <img src={bgimage} alt="" className="opacity-50 w-[100%] h-[100%]" />
            }
        </div>

        <div className={`absolute z-50 w-[100%] min-h-[70vh] top-14 border ${!showDialogs?"hidden":null} bg-white`}>

        </div>

        <div className={`${searchText?"hidden":"flex"} ${!showDialogs?"flex":"hidden"} flex-wrap gap-3 w-full mx-2`}>
        {
            data && data.map((item,index)=><EdirCard key={index} item={item} setDialogs={setDialogs} setShowDialogs={setShowDialogs}  />)
        }
        </div>
    </div>
    </>
  )
}

export default Editdoctor
