import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import * as camperOperations from '../../redux/camperOperations';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import CamperModal from '../CamperModal/CamperModal'
import styles from './catalogItem.module.css';
import EqupmentIcon from '../EqupmentIcon/EqupmentIcon'
import { FaRegHeart } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaStar, FaHeart } from "react-icons/fa6";

 const CatalogItem = ({item, isVariant}) => {
  const {variant} = isVariant
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();

  const handleClick = () =>  dispatch(camperOperations.toggleFavoritesThunk(item))

const {id, gallery, description, location, name, price, rating, reviews, favorite} = item;
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

                    {variant && 
                    <button className={styles.btnHeart}  onClick={handleClick} type='submit'>
                    {favorite ?  <FaHeart className={styles.heartActive}/> :  <FaRegHeart className={styles.heart}/>}
                    </button> }
                </div>

            </div>          
            <ul className={styles.wrapLocation}>
                <li>
                   <FaStar color='#ffc531'size={16} /> <span>{rating}({reviews.length} Reviews)</span>
                </li>
                <li>
                    <CiLocationOn />  <span>{location}</span>
                </li>
            </ul>
           
        </div>
        <p className={styles.wrapDescription}>{description}</p>
        <ul className={styles.wrapEquipment}>
          <EqupmentIcon item={item}/>

        </ul>
        
        <Button  onClick={openModal}>Show more</Button>

    </div>

    </li>
    
    <Modal isOpen={isModalOpen}
     onClose={closeModal}>
       <CamperModal item={item} onClose={closeModal}/>
      </Modal>
    </>
   
  )
}

export default CatalogItem
