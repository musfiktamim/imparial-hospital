import {motion} from "framer-motion";
import "aos/dist/aos.css";

function ServicesItemsBox({img,name,text,v}) {
    
    console.log(v)
    // viewport={{margin:""}} initial={v%2==0?{translateX:"-40%"}:{translateX:"40%"}} whileInView={{translateX:0}} transition={{duration:1,type:"spring",repeatType:"loop"}}
    return (
        <motion.div  initial={v%2==0?{translateX:"-40%"}:{translateX:"40%"}} whileInView={{translateX:0}} transition={{duration:1,type:"spring",repeatType:"loop"}}  className={`h-auto w-[100%] md:gap-x-4 gap-4 justify-center flex-col ${v%2==0?"md:flex-row":"md:flex-row-reverse"} md:flex`}>
            <div className="md:h-[300px] md:rounded-md overflow-hidden shadow-2xl w-full md:w-[400px] border" data-tilt>
                <img src={img} className="md:w-full md:h-full" alt="" loading="eager" data-tilt />
            </div>
            <div className="md:w-[600px] justify-center flex flex-col gap-y-2">
                <h1 className="text-lg md:mt-0 mt-3 font-semibold underline ">{name}</h1>
                <p>{text}</p>
            </div>

        </motion.div>
    )
}

export default ServicesItemsBox
