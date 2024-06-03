import React, { useState } from 'react'
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import CamperModal from '../CamperModal/CamperModal'
import styles from '../CatalogItem/catalogItem.module.css';
import {  FaWind } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";
import { TbAutomaticGearbox, TbToolsKitchen2 } from "react-icons/tb";
import { LuFuel } from "react-icons/lu"; 
import { IoBedOutline } from "react-icons/io5";

 const FavoriteItem = ({item}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
    };
    
   const {adults, id, details, gallery, description,
    location, name, price, rating, reviews, transmission, engine} = item;
   const image = gallery[0];
  
    return (
      <>
       <li key={id} id={id} className={styles.wrapItem}>
         <img src={image} alt={name} className={styles.img}/>
      <div className={styles.wrapText}>
      
         <div className={styles.wrapTitle}>
        
              <div className={styles.title}>
                  <h2>{name}</h2> 
                  <div className={styles.wrapPrice}>
                      <h2>{price},00</h2>                   
                  </div>
  
              </div>          
              <ul className={styles.wrapLocation}>
                  <li>
                     <FaStar color='#ffc531' size={16}/> <span>{rating}({reviews.length} Reviews)</span>
                  </li>
                  <li>
                      <CiLocationOn />  <span>{location}</span>
                  </li>
              </ul>
             
          </div>
          <p className={styles.wrapDescription}>{description}</p>
          <ul className={styles.wrapEquipment}>
              <li>
                  <BsPeople />  <span>{adults} adults</span>
              </li>
              <li>
                   <TbAutomaticGearbox />  <span>{transmission}</span>
              </li>
              <li>
                   <LuFuel />  <span>{engine}</span>
              </li>
              <li>
                  <TbToolsKitchen2 />  <span>Kitchen</span>
              </li>
              <li>
                   <IoBedOutline />  <span>{details.beds} beds</span>
              </li>
              <li>
                   <FaWind />  <span>AC</span>
              </li>
          </ul>
          <Button  onClick={openModal}>Show more</Button>
  
      </div>
      </li>
    
      <Modal isOpen={isModalOpen}onClose={closeModal}>
         <CamperModal item={item} onClose={closeModal}/>
        </Modal>
    </> 
  )
}

export default FavoriteItem
