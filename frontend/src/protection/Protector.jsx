import axios from "axios"
import { useEffect } from "react"
import {useNavigate} from "react-router-dom"

function Protector({children}) {

    const navigate = useNavigate()

    useEffect(()=>{
        (async function(){
        const {data} =await axios.post("http://localhost:8000/deshboard","x",{
          headers:{
            Authorization:localStorage.getItem("deshlog")
          }
        })
        if(data.success==false){
            navigate("/deshboard")
        }
        }
      )()
      },[])
    
  return (
    children
  )
}

export default Protector
