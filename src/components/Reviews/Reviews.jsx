import React from 'react';
import ReviewDetails from '../Reviewetails/ReviewDetails';
import FormaBook from '../FormaBook/FormaBook';
import styles from './reviews.module.css';

 const Reviews = ({item}) => {
  console.log(item)
  // const {adults, id, details, gallery, description,
  //   location, name, price, rating, reviews, transmission, engine} = item;
  
  return (
    <div className={styles.wrap}>
      <ReviewDetails item={item}/>
      <FormaBook/>
    </div>
  )
}

export default Reviews
