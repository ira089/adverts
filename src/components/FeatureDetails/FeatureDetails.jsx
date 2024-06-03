import React from 'react'
import styles from './featureDetails.module.css';
import { FaWind } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { TbAutomaticGearbox, TbToolsKitchen2, TbAirConditioning, TbToiletPaper } from "react-icons/tb";
import { LuFuel, LuTv, LuShowerHead } from "react-icons/lu"; 
import { IoBedOutline,  IoWaterOutline } from "react-icons/io5";
import { LiaCompactDiscSolid } from "react-icons/lia"
import { BiRadio } from "react-icons/bi";
import { MdMicrowave } from "react-icons/md";
import { RiFridgeLine } from "react-icons/ri";
import { HiFire } from "react-icons/hi"; 
import { GiHobbitDwelling } from "react-icons/gi"; 


 const FeatureDetails = ({item}) => {

  const {adults,  details,  transmission, engine, 
    form, length, width, height, tank, consumption} = item;
// console.log({details})
const {CD, TV, airConditioner,  freezer, gas, hob, microwave,
   radio, shower, toilet, water} = details;
   const isCd = Boolean(CD);
   console.log(isCd)


  return (
    <div className={styles.wrapFeature} >
      <div className={styles.wrapIcon}>
      <ul className={styles.wrapEquipment}>
            <li>
                <BsPeople size={20} />  <span>{adults} adults</span>
            </li>
            <li>
                 <TbAutomaticGearbox size={20}/>  <span>{transmission}</span>
            </li>
            <li>
                 <FaWind size={20}/>  <span>AC</span>
            </li>
            <li>
                 <LuFuel size={20}/>  <span>{engine}</span>
            </li>
            <li>
                <TbToolsKitchen2 size={20}/>  <span>kitchen</span>
            </li>
            <li>
                 <IoBedOutline size={20}/>  <span>{details.beds} beds</span>
            </li>
            {isCd && 
            <li>
                 <LiaCompactDiscSolid size={20}/>  <span>CD</span>
            </li>}
            {TV && 
            <li>
                 <LuTv size={20}/>  <span>TV</span>
            </li>}
            {airConditioner && 
            <li>
                 <TbAirConditioning size={20}/>  <span>{airConditioner} Air conditioner</span>
            </li>}
            {freezer && 
            <li>
                 <RiFridgeLine size={20}/>  <span>Freezer</span>
            </li>}
            {gas && 
            <li>
                 <HiFire size={20}/>  <span>Gas</span>
            </li>}
            {hob && 
            <li>
                 <GiHobbitDwelling size={20}/>  <span>{hob} hob</span>
            </li>}
            {microwave && 
            <li>
                 <MdMicrowave size={20}/>  <span>Microwave</span>
            </li>}
            {radio && 
            <li>
                 <BiRadio size={20}/>  <span>Radio</span>
            </li>}
            {shower && 
            <li>
                 <LuShowerHead size={20}/>  <span>Shower</span>
            </li>}
            {toilet && 
            <li>
                 <TbToiletPaper size={20}/>  <span>Toilet</span>
            </li>}
            {water && 
            <li>
                 <IoWaterOutline size={20}/>  <span>Water</span>
            </li>}
            
            
      </ul>
      </div>

      <div className={styles.wrapVehicle}>
        <h3>Vehicle details</h3>

        <div className={styles.vehicleBloc}>
          <div className={styles.vehicle}>
          <p>Form</p>
          <p>{form}</p>
          </div >
          <div className={styles.vehicle}>
          <p>Length</p>
          <p>{length}</p>
          </div >
          <div className={styles.vehicle}>
          <p>Width</p>
          <p>{width}</p>
          </div >
          <div className={styles.vehicle}>
          <p>Height</p>
          <p>{height}</p>
          </div >
          <div className={styles.vehicle}>
          <p>Tank</p>
          <p>{tank}</p>
          </div >
          <div className={styles.vehicle}>
          <p>Consumption</p>
          <p>{consumption}</p>
         </div >

        </div>

      </div>
    </div>
  )
}

export default FeatureDetails
