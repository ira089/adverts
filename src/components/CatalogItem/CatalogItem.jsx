import React, { useState } from 'react'
import { useDispatch } from "react-redux";
// import * as camperSelectors from '../../redux/camperSelectors';
import * as camperOperations from '../../redux/camperOperations';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import CamperModal from '../CamperModal/CamperModal'
import styles from './catalogItem.module.css';
import { FaRegHeart, FaWind } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaStar, FaHeart } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";
import { TbAutomaticGearbox, TbToolsKitchen2 } from "react-icons/tb";
import { LuFuel } from "react-icons/lu"; 
import { IoBedOutline } from "react-icons/io5";

// import { LuTv } from "react-icons/lu";
// <LuTv />
// import { LuShowerHead } from "react-icons/lu";
// <LuShowerHead />

 const CatalogItem = ({item}) => {
  // console.log(item)
    // const [showModal, setShowModal] = useState(false);
    // const toggleModal = () => setShowModal(prevShowModal => !prevShowModal)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();
  // const [isActive, setIsActive] = useState(false);
  // const handleClick = () => {
  //   setIsActive(!isActive);
  //   if (!item.favorite){
  //     const toggleItem = {...item, favorite: true}
  //     dispatch(camperOperations.toggleFavoritesThunk(toggleItem))
  //   }else {} 
  // };

  const handleClick = () =>  dispatch(camperOperations.toggleFavoritesThunk(item))

  

 const {adults, id, details, gallery, description,
  location, name, price, rating, reviews, transmission, engine, favorite} = item;
 const image = gallery[0];
//  console.log(gallery)
//  console.log(image);
//  console.log(details)
  return (
    <>
     <li key={id} id={id} className={styles.wrapItem}>
       <img src={image} alt={name} className={styles.img}/>
    <div className={styles.wrapText}>
      {/* весь текст */}
       <div className={styles.wrapTitle}>
        {/* название цена локация отзывы */}
            <div className={styles.title}>
                <h2>{name}</h2> 
                <div className={styles.wrapPrice}>
                    <h2>{price},00</h2>
                    <button className={styles.btnHeart}  onClick={handleClick} type='submit'>
                    {favorite ?  <FaHeart className={styles.heartActive}/> :  <FaRegHeart className={styles.heart}/>}
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
    {/* {showModal && (<Modal showModal={setShowModal} onClose={() => showModal(false)}/>)} */}
    <Modal isOpen={isModalOpen}
     onClose={closeModal}>
       <CamperModal item={item} onClose={closeModal}/>
      </Modal>
    </>
   
  )
}

export default CatalogItem
