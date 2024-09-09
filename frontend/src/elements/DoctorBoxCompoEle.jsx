import {toast} from "sonner"

function DoctorBoxCompoEle({setValues,values,setValue,value,nameOfInputs}) {
  
  return (
    <div className="flex flex-wrap items-center gap-x-2">
      <div className="flex w-fit h-fit items-center flex-wrap gap-2">
        {
          values.map((items, index) =>(
            <div key={index} className="relative focus-within:scale-105 focus-within:transition-all focus-within:duration-300 ">
              <div className="absolute bg-gray-300 overflow-hidden h-4 w-4 flex items-center justify-center rounded-full right-[-10px] top-[-10px]">
                <button type="button" onClick={(e)=>{
                  const filterds = values.filter((item)=>items!=item)
                  values.length>1?
                  delete value[items]
                  :null
                  values.length>1?
                  setValues(filterds)
                  :toast.warning("never do this")

                }}>x</button>
              </div>
              <input type="text" value={value[items]} placeholder={nameOfInputs} className="px-2 py-1 outline-none rounded-md border border-gray-500 " name={items} onChange={(e) =>{
                e.target.value.includes(",")?toast.warning("you can't write (,)"):setValue((prev) => ({...prev,[e.target.name]: e.target.value}))
              }}/>
            </div>
        ))
        }
      </div>
      <button type="button" className="px-2 py-1 shadow-md border rounded-md border-black" onClick={() => {
          const Keys = `name${parseInt(values[values.length - 1][values[values.length - 1].length-1]) + 1}`;
          setValues((prev) => [...prev, Keys]);
          setValue((prev) => ({ ...prev, [Keys]: "" }));
        }}
      >
        +
      </button>
    </div>
  );
}

export default DoctorBoxCompoEle;
