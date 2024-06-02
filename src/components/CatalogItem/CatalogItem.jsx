import React, { useState } from 'react'
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import CamperModal from '../CamperModal/CamperModal'
import styles from './catalogItem.module.css';
import { FaRegHeart } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";
import { TbAutomaticGearbox } from "react-icons/tb";
import { LuFuel } from "react-icons/lu"; 
// import { TbToolsKitchen2 } from "react-icons/tb";
// <TbToolsKitchen2 />
// import { IoBedOutline } from "react-icons/io5";
// <IoBedOutline />
// import { FaWind } from "react-icons/fa";cond
// <FaWind />
// import { LuTv } from "react-icons/lu";
// <LuTv />
// import { LuShowerHead } from "react-icons/lu";
// <LuShowerHead />

 const CatalogItem = ({item}) => {
    // const [showModal, setShowModal] = useState(false);
    // const toggleModal = () => setShowModal(prevShowModal => !prevShowModal)
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
 const {adults, _id, details, gallery, description,
  location, name, price, rating, reviews, transmission, engine} = item;
 const image = gallery[0];
//  console.log(gallery)
//  console.log(image);
//  console.log(details)
  return (
    <>
     <li key={_id} id={_id} className={styles.wrapItem}>
       <img src={image} alt={name} className={styles.img}/>
    <div className={styles.wrapText}>
      {/* весь текст */}
       <div className={styles.wrapTitle}>
        {/* название цена локация отзывы */}
            <div className={styles.title}>
                <h2>{name}</h2> 
                <div className={styles.wrapPrice}>
                    <h2>{price}.00</h2>
                    <button type='submit'>
                    <FaRegHeart />
                    </button>       
                </div>

            </div>          
            <ul className={styles.wrapLocation}>
                <li>
                   <FaStar /> <span>{rating}({reviews.length} Reviews)</span>
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
        </ul>
        <Button  onClick={openModal}>Show more</Button>

    </div>

    </li>
    {/* {showModal && (<Modal showModal={setShowModal} onClose={() => showModal(false)}/>)} */}
    <Modal isOpen={isModalOpen} onClose={closeModal}>
       <CamperModal/>
      </Modal>
    </>
   
  )
}

export default CatalogItem
