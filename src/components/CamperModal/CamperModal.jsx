import React, {useState} from 'react'
import Reviews from 'components/Reviews/Reviews';
import Features from 'components/Features/Features';

import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import styles from './camperModal.module.css';

 const CamperModal = ({showModal, onClose, item}) => {
  // console.log(item)
const { gallery, description,location, name, price, rating, reviews} = item;

  const [activeTab, setActiveTab] = useState('')
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className={styles.wrapTitle}>
        <div className={styles.titleClouse}>
        <h2>{name}</h2> 
        <button className={styles.modalClose} type="button" aria-label="Close modal" onClick={onClose}>
        <RxCross2 />
        </button>
        </div>

        {/* <div className={styles.locationPrice}> */}
        <ul className={styles.wrapLocation}>
                <li>
                   <FaStar /> <span>{rating}({reviews.length} Reviews)</span>
                </li>
                <li>
                    <CiLocationOn />  <span>{location}</span>
                </li>
        </ul>
        <h2>{price},00</h2>
       {/* </div> */}
      </div>

      <div className={styles.wrapTextImg}>
        <div className={styles.image}>
          <img src={gallery[0]} alt={name} className={styles.img}/>
          <img src={gallery[1]} alt={name} className={styles.img}/>
          <img src={gallery[2]} alt={name} className={styles.img}/>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.featuresReviews}>
          <button onClick={() => handleTabClick('tabFeatures')}>Features</button>
          <button onClick={() => handleTabClick('tabReviews')}>Reviews</button>
        </div>
        {activeTab === 'tabFeatures' && <div><Features item={item}/></div>}
        {activeTab === 'tabReviews' && <div><Reviews item={item}/></div>}

      </div>
    </>
    
    

   
  )
}
export default CamperModal
