import {motion} from "framer-motion"
import { useContext, useEffect } from "react"
import { MediaContext } from "../context/UserContext"


function Contact() {

  const {windowHeight} = useContext(MediaContext)

  // useEffect(()=>{
  //   window.scroll({top:0,left:0})
  // },[])
  
  return (
    <div className="flex w-[100%] flex-col md:flex-row h-auto overflow-hidden md:h-[85vh] md:gap-0 gap-y-5 overflow-x-hidden mt-10 md:mt-0">
        <motion.div className="md:w-[50%] flex items-center justify-center md:h-[100%]" 
        initial={windowHeight>768?{x:"-100%",opacity:0}:{y:"20px",opacity:0}}
        animate={windowHeight>768?{x:0,opacity:1}:{y:0,opacity:1}}
        transition={{duration:1,type:"spring"}}
        >
            <form className="md:w-[450px] w-[350px] flex flex-col gap-2">
                <input type="email" placeholder="Email" required className="h-10 rounded-md w-[100%] border px-2 outline-none" />
                <div className="flex w-[100%] gap-2">
                    <input required type="text" className="w-[50%] h-10 rounded-md border px-2 outline-none" placeholder="First Name" />
                    <input type="text" className="w-[50%] h-10 rounded-md border px-2 outline-none" placeholder="Last Name" />
                </div>
                <input type="email" placeholder="Phone" required className="h-10 rounded-md w-[100%] border px-2 outline-none" />

                <textarea name="" className="border h-[180px] py-2 resize-none outline-none px-2 break-words rounded-md" id=""></textarea>
                <motion.button className="w-[100%] py-[7px] rounded-md bg-green-600 shadow-sm text-white">
                  Submit
                </motion.button>
            </form>
        </motion.div>
        <motion.div initial={windowHeight>768?{x:"100%",opacity:0}:{y:"20px",opacity:0}} transition={{type:"spring",duration:1}} animate={windowHeight>768?{x:0,opacity:1}:{y:0,opacity:1}} className="md:w-[50%] w-[100%] px-2 md:mt-10 text-sm overflow-hidden">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto earum, nemo quidem doloremque illo corrupti quasi. Maxime illo, molestiae odio quia reprehenderit cum modi amet ex architecto. Dignissimos sed deleniti cupiditate ad odio impedit labore porro, ea officia distinctio excepturi eum natus perspiciatis obcaecati repellendus vel blanditiis nihil quaerat? Dolores mollitia nulla a eius accusamus facilis temporibus quam, consequatur cum corrupti labore illo vel amet recusandae neque quae asperiores maxime in! Vero ex vitae, perferendis quos in quas obcaecati laborum. Quam, suscipit eveniet cumque quaerat sapiente omnis molestias corrupti assumenda voluptas voluptatem minus iusto provident! Eius aspernatur et voluptates tempore cupiditate nihil explicabo recusandae similique, commodi dolorem repellendus doloremque alias iure in nobis. Porro molestias reprehenderit minus consequatur repudiandae unde odit magnam modi, ex sed accusamus, sunt ab laboriosam deserunt fuga accusantium, qui fugit tempore illum nulla quam non quaerat at suscipit. Qui cumque, iure voluptatum rerum exercitationem, ut labore esse perspiciatis amet omnis voluptatem! Minima saepe perferendis fuga ducimus enim cupiditate id culpa nemo! Ab asperiores nobis, illum fugiat perferendis ad minus, harum labore, atque illo id laudantium dignissimos dolore nam autem mollitia est itaque hic quo ea odio ipsa consequuntur? Sint, cupiditate pariatur dolore impedit illo similique incidunt deleniti id perspiciatis placeat maxime iure alias dolorum possimus reprehenderit nihil laboriosam fugit eos voluptate dignissimos delectus? Voluptate beatae laboriosam nostrum, a velit, architecto ab eum ipsa nulla, reiciendis expedita sunt est incidunt voluptatem. Veniam, consectetur? Itaque suscipit dolore odit at unde nam, nostrum nulla doloremque adipisci vel, consequuntur reiciendis assumenda optio! Quas at temporibus nihil reprehenderit cum ab, repellat in officia veniam expedita maiores amet asperiores non animi soluta illum ex. Cupiditate voluptatibus esse amet quae magnam, distinctio error debitis expedita? Maiores ut nostrum similique at quasi architecto, beatae amet nulla rerum, illum, corporis blanditiis eius? Eos, a labore.
        </motion.div>
    </div>
  )
}

export default Contact
