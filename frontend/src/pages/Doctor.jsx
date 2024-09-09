import { useEffect,  useState } from 'react'
import { TfiSearch } from "react-icons/tfi";
import Doctorcard from '../elements/Doctorcard';
import axios from "axios"

function Doctor() {
    
    const [data,setData] = useState([])
    const [page,setPage] = useState(0)
    const [doctor,setDoctor] = useState([])

    function handleChange(e){
        const filtedData = doctor.filter((items)=> items.name.toLowerCase().includes(e.target.value.toLowerCase()) )
        setData(filtedData)
    }
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            const windowHeight = window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            if(windowHeight+scrollTop >= scrollHeight){
                setPage(page+1)
            }
        })
    })

    useEffect(()=>{
        (async function() {
            const res = await axios.post(`http://localhost:8000/getdoctor`,{"page":page})
            if(res.data.data_length!=0){
                setData((prev)=>[...prev,...res.data.data])
                setDoctor((prev)=>[...prev,...res.data.data])
            }
        })()
    },[page])

    
    
  return (
    <>
        <div className='h-12 shadow-lg flex items-center justify-center gap-2 sticky top-16 z-20 bg-white shadow-blue-200 mt-2'>
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
        <div className='mt-2 pl-3'>
            <h1 className='text-lg text-center font-serif'>Our Doctor</h1>
        </div>

        <div className='h-auto mb-10 w-[100%] mt-4 flex flex-wrap justify-center gap-10'>
            {
                data && data.map((items,index)=><Doctorcard key={index} items={items} />)
            }
        </div>
        
    </>
  )
}

export default Doctor
