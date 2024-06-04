import React from 'react';
import ReviewDetails from '../Reviewetails/ReviewDetails';
import FormaBook from '../FormaBook/FormaBook';
import styles from './reviews.module.css';

 const Reviews = ({item}) => {
 
  return (
    <div className={styles.wrap}>
      <ReviewDetails item={item}/>
      <FormaBook/>
    </div>
  )
}

export default Reviews
