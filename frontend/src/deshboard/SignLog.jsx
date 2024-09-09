import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

function SignLog() {
  const [showLog,setShowLog] = useState(true)

  const navigate = useNavigate()

  const [sign,setSign] = useState({
    username:"",
    email:"",
    password:"",
    signkeys:""

  })
  
  const [login,setLogin] = useState({
    email:"",
    password:""
  })
  
  function handleChange1(e){
    setLogin((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  function handleChange2(e){
    setSign((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  async function handleSub1(e){
    e.preventDefault()
    if(login.email&&login.password){
      const {data} =await axios.post("http://localhost:8000/deshlogin",login)
      console.log(data)
      if(data.success){
        toast.success(data.message)
        localStorage.setItem("deshlog",data.token);
        navigate("/deshboard/showcase")
        setLogin({email:"",password:""})
      }else{
        toast.error(data.message)
      }
    }else{
      toast.error("plz fill all fields")
    }
  }

  async function handleSub2(e){
    e.preventDefault()

    if(sign.email&&sign.password&&sign.username&&sign.signkeys){
      if(sign.password.length>=6){
        const {data} = await axios.post("http://localhost:8000/deshsignin",sign)
        if(data.success){
          toast.success(data.message)
          navigate("/deshboard/showcase")
          setSign({email:"",password:"",signkeys:"",username:""})
        }else{
          toast.error(data.message)
        }
      }else{
        toast.error("password must be required 6 char")
      }
    }else{
      toast.error("plz fill all fields")
    }
    
  }

  
  return (
    <div className="h-auto w-[330px] py-5 flex rounded-md shadow-xl absolute left-[50%] top-[50%] overflow-x-hidden translate-x-[-50%] translate-y-[-50%] border">
      <form className={`flex flex-col w-[330px] gap-3 ${!showLog?"translate-x-[-100%] hidden":"translate-x-0"} transition-all justify-center h-[100%] items-center`} onSubmit={handleSub1}>
        <h1>Log In</h1>
        <div className="w-[100%] flex flex-col gap-2">
          <input value={login.email} type="email" name="email" onChange={handleChange1} className="w-[90%] h-9 px-1 shadow-md outline-none border rounded-lg mx-auto focus:shadow-blue-200 focus:transition-all focus:duration-300 focus:scale-105"/>
          <input value={login.password} type="password" name="password" onChange={handleChange1} className="w-[90%] h-9 px-1 shadow-md outline-none border rounded-lg mx-auto focus:shadow-blue-200 focus:transition-all focus:duration-300 focus:scale-105"/>
          <hr className="mt-1 w-[95%] mx-auto" />
        </div>
        <div className="w-[100%] flex gap-y-2 flex-col">
          <button type="submit" className="w-[95%] py-1 rounded-lg bg-blue-500 text-white transition-all mx-auto border">Log In</button>
          <button type="button" className="w-[95%] py-1 rounded-lg bg-white text-black border-black transition-all mx-auto border-[1px]" onClick={()=>setShowLog(false)}>Sign In</button>
        </div>
      </form>
      {/* hello  */}
      <form className={`flex flex-col w-[330px] gap-3 ${showLog?"translate-x-[100%] hidden":"translate-x-0 flex"} transition-all justify-center h-[100%] items-center`} onSubmit={handleSub2}>
      <h1>Sign In</h1>
        <div className="w-[100%] flex flex-col gap-2">
          <input placeholder="username" value={sign.username} type="text" name="username" onChange={handleChange2} className="w-[90%] h-9 px-1 focus:shadow-blue-200 focus:transition-all focus:duration-300 focus:scale-105 shadow-md outline-none border rounded-lg mx-auto"/>
          <input placeholder="email" value={sign.email} type="email" name="email" onChange={handleChange2} className="w-[90%] h-9 px-1 focus:shadow-blue-200 focus:transition-all focus:duration-300 focus:scale-105 shadow-md outline-none border rounded-lg mx-auto"/>
          <input placeholder="password" value={sign.password} type="password" name="password" onChange={handleChange2} className="w-[90%] h-9 px-1 focus:shadow-blue-200 focus:transition-all focus:duration-300 focus:scale-105 shadow-md outline-none border rounded-lg mx-auto"/>
          <input placeholder="signkeys" value={sign.signkeys} type="password" name="signkeys" onChange={handleChange2} className="w-[90%] h-9 px-1 focus:shadow-blue-200 focus:transition-all focus:duration-300 focus:scale-105 shadow-md outline-none border rounded-lg mx-auto"/>
          <hr className="mt-1 w-[95%] mx-auto" />
        </div>
        <div className="w-[100%] flex gap-y-2 flex-col">
          <button type="submit" className="w-[95%] py-1 rounded-lg bg-blue-500 text-white transition-all mx-auto border">Submit</button>
          <button type="button" className="w-[95%] py-1 rounded-lg bg-white text-black border-black transition-all mx-auto border-[1px]" onClick={()=>setShowLog(true)}>Already Have Account</button>
        </div>
      </form>
      
    </div>
  )
}

export default SignLog
