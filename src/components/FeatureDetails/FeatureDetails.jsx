import React from 'react'
import styles from './featureDetails.module.css';
import EqupmentIcon from '../EqupmentIcon/EqupmentIcon'
import EqupmentDetailsIcon from '../EqupmentDetailsIcon/EqupmentDetailsIcon'

 const FeatureDetails = ({item}) => {

  const { form, length, width, height, tank, consumption} = item;

  return (
    <div className={styles.wrapFeature} >
      <div className={styles.wrapIcon}>
         
      <ul className={styles.wrapEquipment}>
        <EqupmentIcon item={item}/>
        <EqupmentDetailsIcon item={item}/>    
      </ul>
      </div>

      <div className={styles.wrapVehicle}>
        <h3>Vehicle details</h3>

        <div className={styles.vehicleBloc}>
          <div className={styles.vehicle}>
          <p>Form</p>
          <p>{form}</p>
          </div >
          <div className={styles.vehicle}>
          <p>Length</p>
          <p>{length}</p>
          </div >
          <div className={styles.vehicle}>
          <p>Width</p>
          <p>{width}</p>
          </div >
          <div className={styles.vehicle}>
          <p>Height</p>
          <p>{height}</p>
          </div >
          <div className={styles.vehicle}>
          <p>Tank</p>
          <p>{tank}</p>
          </div >
          <div className={styles.vehicle}>
          <p>Consumption</p>
          <p>{consumption}</p>
         </div >

        </div>

      </div>
    </div>
  )
}

export default FeatureDetails
