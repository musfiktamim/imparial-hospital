import  { useState } from 'react'
import DoctorBoxCompoEle from '../elements/DoctorBoxCompoEle'
import { toast } from 'sonner'
import { addDoctor } from '../api/api'

function AddDoctor() {
  const [image,setImage]  = useState(null)

  // FieldofConcentration Specialization WorkExperience Education 

  const [FieldofConcentration,setFieldofConcentration] = useState({"name1":""})
  const [FieldofConcentrations,setFieldofConcentrations] = useState(["name1"])

  const [Specialization,setSpecialization] = useState({"name1":""})
  const [Specializations,setSpecializations] = useState(["name1"])
  
  const [WorkExperience,setWorkExperience] = useState({"name1":""})
  const [WorkExperiences,setWorkExperiences] = useState(["name1"])

  const [Education,setEducation] = useState({"name1":""})
  const [Educations,setEducations] = useState(["name1"])

  //day
  const [day,setDay] = useState([]);
  const [dis,setDis] = useState(false)
  //normandatas
  const [normalData,setNormalData] = useState({"name":"","bio":"","experiance":"","where":"","stime":"","etime":"","about":""})

  function handleChange(e){
    if(e.target.checked){
      setDay((prev)=>[...prev,e.target.value])
    }else{
      const filterd = day.filter((item)=>item!=e.target.value)
      setDay(filterd);
    }
  }
  async function handleSub(e){
    e.preventDefault();
    const FieldofConcentrationValues = Object.values(FieldofConcentration);
    const SpecializationValues = Object.values(Specialization);
    const WorkExperienceValues = Object.values(WorkExperience);
    const EducationValues = Object.values(Education);
    if(normalData.name&&normalData.bio&&normalData.stime&&normalData.etime&&normalData.about&&normalData.where&&normalData.bio&&image&&day.length!=0&&FieldofConcentrationValues.length!=0&&SpecializationValues.length!=0&&EducationValues!=0){
      const formData = new FormData();
      // formData.append("normaldata",normalData);

      formData.append("name",normalData.name);
      formData.append("bio",normalData.bio);
      formData.append("stime",normalData.stime)
      formData.append("etime",normalData.etime)
      formData.append("about",normalData.about)
      formData.append("where",normalData.where)
      formData.append("experiance",normalData.experiance)

      
      
      formData.append("day",day);
      formData.append("FieldofConcentration",FieldofConcentrationValues)
      formData.append("WorkExperience",WorkExperienceValues);
      formData.append("Specialization",SpecializationValues);
      formData.append("Education",EducationValues)
      formData.append("image",image)


      const res = await addDoctor(formData);
      if(res.success){
        toast.success(res.message)
        setDis(true)
        setNormalData({"name":"","bio":"","experiance":"","where":"","stime":"","etime":"","about":""})
        setDay([])
        setFieldofConcentration({"name1":""})
        setFieldofConcentrations(["name1"])
        setSpecialization({"name1":""})    
        setSpecializations(["name1"])
        setWorkExperience({"name1":""})
        setWorkExperiences(["name1"])
        setEducation({"name1":""})
        setEducations(["name1"])
        setImage(null)
        
        
        setTimeout(() => {
          setDis(false)
        }, 3000);
      }else{
        toast.error(res.message)
      }
      
    }else{
      toast.warning("plz fill required fields")
    }
  }
  
  console.log(day)

  return (
    <form className='flex w-full flex-col px-2 gap-y-2 py-2' onSubmit={handleSub}>
        <label htmlFor="doctorImage" className='mx-auto flex items-center object-cover justify-center flex-col gap-y-2'>
            <div className='h-40 w-40 mx-auto border box-border rounded-full'>
                {image?<img src={URL.createObjectURL(image)} className='h-full w-full rounded-full' />:null}
            </div>
            <p className='font-semibold'>Doctor Image</p>
        </label>
        <input type="file" className='hidden' id='doctorImage' onChange={(e)=>setImage(e.target.files[0])} />
        <label htmlFor="" className='flex items-center gap-x-2' >
            <p>Name:</p>
            <input type="text" value={normalData.name} name='name' onChange={e=>setNormalData((prev)=>({...prev,[e.target.name]:e.target.value}))} placeholder='Name' className='border-2 focus:duration-300 px-2 py-1 rounded-md outline-none focus:scale-105 focus:shadow-md font-mono focus:font-sans focus:shadow-blue-400 focus:border-t ' />
        </label>
        <label htmlFor="" className='flex items-center gap-x-2' >
            <p>Bio:</p>
            <input type="text" value={normalData.bio} name='bio' onChange={e=>setNormalData((prev)=>({...prev,[e.target.name]:e.target.value}))} placeholder='Bio' className='border-2 focus:duration-300 px-2 py-1 w-3/5 rounded-md outline-none focus:scale-105 focus:shadow-md font-mono focus:font-sans focus:shadow-blue-400 focus:border-t ' />
        </label>
        <label htmlFor="" className='flex items-center gap-x-2' >
            <p>Experiance:</p>
            <input type="text" value={normalData.experiance} name='experiance' onChange={e=>setNormalData((prev)=>({...prev,[e.target.name]:e.target.value}))} placeholder='Experiance' className='border-2 focus:duration-300 px-2 py-1 w-2/5 rounded-md outline-none focus:scale-105 focus:shadow-md font-mono focus:font-sans focus:shadow-blue-400 focus:border-t ' />
        </label>
        <label htmlFor="" className='flex items-center gap-x-2' >
            <p>Where:</p>
            <input type="text" value={normalData.where} name='where' onChange={e=>setNormalData((prev)=>({...prev,[e.target.name]:e.target.value}))} placeholder='where' className='border-2 focus:duration-300 px-2 py-1 w-2/5 rounded-md outline-none focus:scale-105 focus:shadow-md font-mono focus:font-sans focus:shadow-blue-400 focus:border-t ' />
        </label>
        <div className='flex gap-x-2'>
          <label htmlFor="" className='flex items-center gap-x-2' >
              <p>Start:</p>
              <input type="time" value={normalData.stime} name='stime' onChange={e=>setNormalData((prev)=>({...prev,[e.target.name]:e.target.value}))} placeholder='Experiance' className='border-2 focus:duration-300 px-2 py-1 w-40 rounded-md outline-none focus:scale-105 focus:shadow-md font-mono focus:font-sans focus:shadow-blue-400 focus:border-t ' />
          </label>
          <label htmlFor="" className='flex items-center gap-x-2' >
              <p>End:</p>
              <input type="time" value={normalData.etime} name='etime' onChange={e=>setNormalData((prev)=>({...prev,[e.target.name]:e.target.value}))} placeholder='Experiance' className='border-2 focus:duration-300 px-2 py-1 w-40 rounded-md outline-none focus:scale-105 focus:shadow-md font-mono focus:font-sans focus:shadow-blue-400 focus:border-t ' />
          </label>
        </div>


        <div className='border px-2 py-2 rounded-md w-fit flex gap-x-3'>
          <label className='flex gap-x-1' htmlFor="">
            <p>Sat</p>
            <input type="checkbox" name='sat' checked={day.find((ite)=>ite=="sat"?true:false)} value={"sat"} onChange={handleChange} />
          </label>
          <label className='flex gap-x-1' htmlFor="">
            <p>Sun</p>
            <input type="checkbox" name='sun' checked={day.find((ite)=>ite=="sun"?true:false)} value={"sun"} onChange={handleChange} />
          </label>
          <label className='flex gap-x-1' htmlFor="">
            <p>Mon</p>
            <input type="checkbox" name='mon' checked={day.find((ite)=>ite=="mon"?true:false)} value={"mon"} onChange={handleChange} />
          </label>
          <label className='flex gap-x-1' htmlFor="">
            <p>Tue</p>
            <input type="checkbox" name='tue' checked={day.find((ite)=>ite=="tue"?true:false)} value={"tue"} onChange={handleChange} />
          </label>
          <label className='flex gap-x-1' htmlFor="">
            <p>Wed</p>
            <input type="checkbox" name='wed' checked={day.find((ite)=>ite=="wed"?true:false)} value={"wed"} onChange={handleChange} />
          </label>
          <label className='flex gap-x-1' htmlFor="">
            <p>Thu</p>
            <input type="checkbox" name='thu' checked={day.find((ite)=>ite=="thu"?true:false)} value={"thu"} onChange={handleChange} />
          </label>
          <label className='flex gap-x-1' htmlFor="">
            <p>Fri</p>
            <input type="checkbox" name='fri' checked={day.find((ite)=>ite=="fri"?true:false)} value={"fri"} onChange={handleChange} />
          </label>
        </div>

      <label htmlFor="">
        <p>About</p>
        <textarea name="about" value={normalData.about} onChange={e=>setNormalData((prev)=>({...prev,[e.target.name]:e.target.value}))} id="" placeholder='About' className='w-1/2 h-20 outline-none border-2 px-2 py-2 rounded-md resize-none'></textarea>
      </label>

      <div className='flex flex-wrap mt-2 flex-col gap-x-2'>
          <h1 className='text-center font-semibold'>Field of Concentration</h1>
          <DoctorBoxCompoEle nameOfInputs={"Field of Concentration"} setValue={setFieldofConcentration} values={FieldofConcentrations} value={FieldofConcentration} setValues={setFieldofConcentrations} />
      </div>
      <div className='flex flex-wrap mt-2 flex-col gap-x-2'>
          <h1 className='text-center font-semibold'>Specializations</h1>
          <DoctorBoxCompoEle nameOfInputs={"Specializations"} setValue={setSpecialization} values={Specializations} setValues={setSpecializations} value={Specialization} />
      </div>
      <div className='flex flex-wrap mt-2 flex-col gap-x-2'>
          <h1 className='text-center font-semibold'>Work Experiences</h1>
          <DoctorBoxCompoEle nameOfInputs={"Work Experiences"} setValue={setWorkExperience} values={WorkExperiences} setValues={setWorkExperiences} value={WorkExperience} />
      </div>
      <div className='flex flex-wrap mt-2 flex-col gap-x-2'>
          <h1 className='text-center font-semibold'>Education</h1>
          <DoctorBoxCompoEle nameOfInputs={"Education"} setValue={setEducation} values={Educations} setValues={setEducations} value={Education} />
      </div>

      <button type='submit' disabled={dis} className={`border w-fit h-fit m-auto mt-2 px-10 rounded-md duration-300 transition-all ${dis?"bg-gray-300 scale-0":"bg-blue-500 hover:border-black hover:bg-white hover:text-black"} border-white text-white py-2`}>Submit</button>
        
    </form>
  )
}

export default AddDoctor
