import React from 'react'
import { FaStar} from "react-icons/fa6";
import styles from './reviewDetails.module.css';

 const ReviewDetails = ({item}) => {
  const {reviews} = item;

  const firstLetter = (obj) => {
    const arr = [...obj.reviewer_name];
    const letter = arr[0];
    return letter
  }

  const elements = reviews.map(el => (
    <li>
      <div className={styles.nameReviewer}>
        <div className={styles.circle}>{firstLetter(el)}</div>
        <div>
          <h3>{el.reviewer_name}</h3>
          {el.reviewer_rating >= 1 ?  <FaStar color='#ffc531' size={16}/> : <FaStar color='#f2f4f7' size={16}/>}
          {el.reviewer_rating >= 2 ?  <FaStar color='#ffc531' size={16}/> : <FaStar color='#f2f4f7' size={16}/>}
          {el.reviewer_rating >= 3 ?  <FaStar color='#ffc531' size={16}/> : <FaStar color='#f2f4f7' size={16}/>}
          {el.reviewer_rating >= 4 ?  <FaStar color='#ffc531' size={16}/> : <FaStar color='#f2f4f7' size={16}/>}
          {el.reviewer_rating >= 5 ?  <FaStar color='#ffc531' size={16}/> : <FaStar color='#f2f4f7' size={16}/>} 
        </div>
      </div>
      <p>{el.comment}</p>
    </li>
      
    
  ));
  const isReviews = Boolean(reviews.length);

  return (
    <div className={styles.wrapReview}>
      {isReviews ? <ul >{elements}</ul> : <h2>There are no reviews for the selected camper</h2>}
    </div>
  )
}

export default ReviewDetails
