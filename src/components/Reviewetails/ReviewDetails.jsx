import React from 'react'
import { FaStar} from "react-icons/fa6";
import styles from './reviewDetails.module.css';

 const ReviewDetails = ({item}) => {
  const {reviews} = item;
  const elements = reviews.map(el => (
    <li>
      <div>
        <span>A</span>
        <div>
          <h3>{el.reviewer_name}</h3>
          <FaStar/>
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
