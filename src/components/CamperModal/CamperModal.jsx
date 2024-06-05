import React, {useState} from 'react'
import Reviews from 'components/Reviews/Reviews';
import Features from 'components/Features/Features';
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import styles from './camperModal.module.css';

 const CamperModal = ({ onClose, item}) => {
 
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
        <RxCross2 size={30}/>
        </button>
        </div>

       
        <ul className={styles.wrapLocation}>
                <li>
                   <FaStar color='#ffc531'size={16} /> <span className={styles.review}>{rating}({reviews.length} Reviews)</span>
                </li>
                <li>
                    <CiLocationOn />  <span>{location}</span>
                </li>
        </ul>
        <h2>{price},00</h2>
   
      </div>

      <div className={styles.wrapTextImg}>
        <div className={styles.image}>
          <img src={gallery[0]} alt={name} className={styles.img}/>
          <img src={gallery[1]} alt={name} className={styles.img}/>
          <img src={gallery[2]} alt={name} className={styles.img}/>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.wrapTab}>
          <button className={styles.tab} onClick={() => handleTabClick('tabFeatures')}>Features</button>
          <button className={styles.tab} onClick={() => handleTabClick('tabReviews')}>Reviews</button>
        </div>
        {activeTab === 'tabFeatures' && <div><Features item={item}/></div>}
        {activeTab === 'tabReviews' && <div><Reviews item={item}/></div>}

      </div>
    </> 
  )
}
export default CamperModal
