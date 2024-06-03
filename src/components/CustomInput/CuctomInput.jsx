import React from 'react'
import { LuCalendar } from "react-icons/lu";
import styles from './customInput.module.css';

const CustomInput = ({ value, onClick }) => (
    <div  className={styles.customInput} >
      <input type="text" value={value}  placeholder="Booking date"  readOnly />
      <LuCalendar onClick={onClick} size={20}/>
    </div>
  );

  export default CustomInput