// import { useGSAP } from "@gsap/react";
import { createContext} from "react";
import gsap from "gsap";

import Search from "../assets/images/service-icon-1.png";
import Glass from "../assets/images/service-icon-2.png";
import Detailes from "../assets/images/service-icon-3.png";
import Refort from "../assets/images/service-icon-4.png";
import Medicate from "../assets/images/service-icon-5.png";

import gadget1 from "../assets/images/gadget1.png";


import Doctor1 from "../assets/images/team1.jpg"
import Doctor2 from "../assets/images/team2.jpg"
import Doctor3 from "../assets/images/team3.jpg"
import Doctor4 from "../assets/images/team4.jpg"
import Doctor5 from "../assets/images/team5.jpg"
import Doctor6 from "../assets/images/team6.jpg"
import Doctor7 from "../assets/images/mypik.jpg"



export const MediaContext = createContext([]);

export function MediaProvider({children}){

    const tl1 = gsap.timeline();
    const tl2 = gsap.timeline()

    const Doctor = [
        {
          name:"Musfik",
          img:Doctor1,
          text:"MBBSMS (Gen. Surgery)MCh (Plastic Surgery)"
        },
        {
          name:"Rahman",
          img:Doctor2,
          text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, distinctio!"
        },
        {
          name:"Tamim",
          img:Doctor3,
          text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, distinctio!"
        },
        {
          name:"Nihal",
          img:Doctor4,
          text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, distinctio!"
        },
        {
          name:"Adil",
          img:Doctor5,
          text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, distinctio!"
        },
        {
          name:"Sayed",
          img:Doctor6,
          text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, distinctio!"
        },
        {
          name:"Sayed",
          img:Doctor7,
          text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, distinctio!"
        }
      ]



      const services = [
        {
          img:Search,
          text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, officia!"
        },
        {
          img: Glass,
          text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, officia!"
        },
        {
          img:Detailes,
          text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, officia!"
        },
        {
          img: Refort,
          text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, officia!"
        },
        {
          img: Medicate,
          text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, officia!"
        }
      ]
      

      const ServicesItems = [
        {
          img:"https://www.slashgear.com/img/gallery/this-little-gadget-can-offer-a-health-check-up-on-the-go/intro-1707998436.jpg",
          name:"THIS LITTLE GADGET CAN OFFER A HEALTH CHECK-UP ON-THE-GO",
          text:"According to health tech company, Withings, the BeamO is the worlds number one four-in-one vital monitor. The BeamO appears to be smaller than a smartphone in some dimensions, has a narrow design and with four sensors to measure your bodys health. It has a digital stethoscope — allowing you to listen to your lungs and heart. The BeamO also has a contactless thermometer to gauge your body temperature via temporal artery detection. Additionally, it features an oximeter that provides blood oxygen levels, and an electrocardiogram (ECG.) The company claims that the ECG can help detect possible cardiovascular issues."
        },
        {
          img:gadget1,
          name:"THIS LITTLE GADGET CAN OFFER A HEALTH CHECK-UP ON-THE-GO",
          text:"According to health tech company, Withings, the BeamO is the worlds number one four-in-one vital monitor. The BeamO appears to be smaller than a smartphone in some dimensions, has a narrow design and with four sensors to measure your bodys health. It has a digital stethoscope — allowing you to listen to your lungs and heart. The BeamO also has a contactless thermometer to gauge your body temperature via temporal artery detection. Additionally, it features an oximeter that provides blood oxygen levels, and an electrocardiogram (ECG.) The company claims that the ECG can help detect possible cardiovascular issues."
        },
        {
          img:gadget1,
          name:"THIS LITTLE GADGET CAN OFFER A HEALTH CHECK-UP ON-THE-GO",
          text:"According to health tech company, Withings, the BeamO is the worlds number one four-in-one vital monitor. The BeamO appears to be smaller than a smartphone in some dimensions, has a narrow design and with four sensors to measure your bodys health. It has a digital stethoscope — allowing you to listen to your lungs and heart. The BeamO also has a contactless thermometer to gauge your body temperature via temporal artery detection. Additionally, it features an oximeter that provides blood oxygen levels, and an electrocardiogram (ECG.) The company claims that the ECG can help detect possible cardiovascular issues."
        },
        {
          img:gadget1,
          name:"THIS LITTLE GADGET CAN OFFER A HEALTH CHECK-UP ON-THE-GO",
          text:"According to health tech company, Withings, the BeamO is the worlds number one four-in-one vital monitor. The BeamO appears to be smaller than a smartphone in some dimensions, has a narrow design and with four sensors to measure your bodys health. It has a digital stethoscope — allowing you to listen to your lungs and heart. The BeamO also has a contactless thermometer to gauge your body temperature via temporal artery detection. Additionally, it features an oximeter that provides blood oxygen levels, and an electrocardiogram (ECG.) The company claims that the ECG can help detect possible cardiovascular issues."
        },
        {
          img:gadget1,
          name:"THIS LITTLE GADGET CAN OFFER A HEALTH CHECK-UP ON-THE-GO",
          text:"According to health tech company, Withings, the BeamO is the worlds number one four-in-one vital monitor. The BeamO appears to be smaller than a smartphone in some dimensions, has a narrow design and with four sensors to measure your bodys health. It has a digital stethoscope — allowing you to listen to your lungs and heart. The BeamO also has a contactless thermometer to gauge your body temperature via temporal artery detection. Additionally, it features an oximeter that provides blood oxygen levels, and an electrocardiogram (ECG.) The company claims that the ECG can help detect possible cardiovascular issues."
        },
        {
          img:gadget1,
          name:"THIS LITTLE GADGET CAN OFFER A HEALTH CHECK-UP ON-THE-GO",
          text:"According to health tech company, Withings, the BeamO is the worlds number one four-in-one vital monitor. The BeamO appears to be smaller than a smartphone in some dimensions, has a narrow design and with four sensors to measure your bodys health. It has a digital stethoscope — allowing you to listen to your lungs and heart. The BeamO also has a contactless thermometer to gauge your body temperature via temporal artery detection. Additionally, it features an oximeter that provides blood oxygen levels, and an electrocardiogram (ECG.) The company claims that the ECG can help detect possible cardiovascular issues."
        },
      ]
      

    const windowHeight = window.innerWidth
    
    const values = {
        tl1,
        tl2,
        windowHeight,
        Doctor,
        services,
        ServicesItems
    }
    return(
        <MediaContext.Provider value={values} >
            {children}
        </MediaContext.Provider>
    )
}