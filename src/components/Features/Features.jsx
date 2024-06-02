import React from 'react'
import FeatureDetails from '../FeatureDetails/FeatureDetails';
import FormaBook from '../FormaBook/FormaBook';
import styles from '../Reviews/reviews.module.css';


 const Features = ({item}) => {
  
  return (
    <div className={styles.wrap}>
      <FeatureDetails item={item}/>
      <FormaBook/>
    </div>
  )
}

export default Features
