import React from 'react'
import { FaWind } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { TbAutomaticGearbox, TbToolsKitchen2 } from "react-icons/tb";
import { LuFuel } from "react-icons/lu"; 
import { IoBedOutline } from "react-icons/io5"
import styles from './equpmentIcon.module.css';

 const EqupmentIcon = ({item}) => {
    const {adults, details, transmission, engine} = item;

  return (
   
    <>
      <li className={styles.equipmentItem}>
    <BsPeople size={20} />  <span>{adults} adults</span>
    </li>

<li className={styles.equipmentItem}>
     <LuFuel size={20} />  <span>{engine}</span>
</li>
<li className={styles.equipmentItem}>
     <FaWind size={20}/>  <span>AC</span>
</li>
<li className={styles.equipmentItem}>
     <IoBedOutline size={20}/>  <span>{details.beds} beds</span>
</li>
<li className={styles.equipmentItem}>
    <TbToolsKitchen2 size={20}/>  <span>Kitchen</span>
</li>
<li className={styles.equipmentItem}>
     <TbAutomaticGearbox size={20}/>  <span>{transmission}</span>
</li>

    </>


  )
}

export default EqupmentIcon

