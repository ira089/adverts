import React from 'react'
import {  TbAirConditioning, TbToiletPaper } from "react-icons/tb";
import {  LuTv, LuShowerHead } from "react-icons/lu"; 
import {   IoWaterOutline } from "react-icons/io5";
import { LiaCompactDiscSolid } from "react-icons/lia"
import { BiRadio } from "react-icons/bi";
import { MdMicrowave } from "react-icons/md";
import { RiFridgeLine } from "react-icons/ri";
import { HiFire } from "react-icons/hi"; 
import { GiHobbitDwelling } from "react-icons/gi"; 
import styles from '../EqupmentIcon/equpmentIcon.module.css';

const EqupmentDetailsIcon = ({item}) => {
    const { details} = item;
    const {CD, TV, airConditioner,  freezer, gas, hob, microwave,
        radio, shower, toilet, water} = details;

    const isCd = Boolean(CD);

  return (
    <>
       {isCd && 
            <li className={styles.equipmentItem}>
                 <LiaCompactDiscSolid size={20}/>  <span>CD</span>
            </li>}
            {TV && 
            <li className={styles.equipmentItem}>
                 <LuTv size={20}/>  <span>TV</span>
            </li>}
            {airConditioner && 
            <li className={styles.equipmentItem}>
                 <TbAirConditioning size={20}/>  <span>{airConditioner} Air conditioner</span>
            </li>}
            {freezer && 
            <li className={styles.equipmentItem}>
                 <RiFridgeLine size={20}/>  <span>Freezer</span>
            </li>}
            {gas && 
            <li className={styles.equipmentItem}>
                 <HiFire size={20}/>  <span>Gas</span>
            </li>}
            {hob && 
            <li className={styles.equipmentItem}>
                 <GiHobbitDwelling size={20}/>  <span>{hob} hob</span>
            </li>}
            {microwave && 
            <li className={styles.equipmentItem}>
                 <MdMicrowave size={20}/>  <span>Microwave</span>
            </li>}
            {radio && 
            <li className={styles.equipmentItem}>
                 <BiRadio size={20}/>  <span>Radio</span>
            </li>}
            {shower && 
            <li className={styles.equipmentItem}>
                 <LuShowerHead size={20}/>  <span>Shower</span>
            </li>}
            {toilet && 
            <li className={styles.equipmentItem}>
                 <TbToiletPaper size={20}/>  <span>Toilet</span>
            </li>}
            {water && 
            <li className={styles.equipmentItem}>
                 <IoWaterOutline size={20}/>  <span>Water</span>
            </li>}
            
    </>
  )
}

export default EqupmentDetailsIcon
