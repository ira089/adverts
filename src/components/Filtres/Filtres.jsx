import React from 'react'
import { useDispatch  } from 'react-redux';
import { addFilter } from '../../redux/filterSlice';
import Button from 'components/Button/Button';
import { TbAutomaticGearbox, TbToolsKitchen2 } from "react-icons/tb";
import {  LuTv, LuShowerHead } from "react-icons/lu";
import { FaWind } from "react-icons/fa";
import Icon from 'components/Icon/Icon';
import styles from './filtres.module.css';

 const Filtres = () => {
  const dispatch = useDispatch();
  
  const filterCamper =  (evt) => {
    evt.preventDefault();

    const formData = {
      location: evt.target[0].value,
      airConditioner: evt.target[1].checked,
      transmission: evt.target[2].checked,
      kitchen: evt.target[3].checked,
      TV: evt.target[4].checked,
      shower: evt.target[5].checked,
    }

dispatch(addFilter(formData))

evt.target[0].value = ''
 evt.target[1].checked = false;
 evt.target[2].checked = false;
evt.target[3].checked = false;
 evt.target[4].checked = false;
 evt.target[5].checked = false;
  }

  return (
    <form onSubmit={filterCamper}>
      
        <p className={styles.text}>Location</p>
        <label>
           <input className={styles.input}
            placeholder= 'City'
             name="filter" />
        </label>
      
      <p className={styles.text}>Filters</p>
      <div className={styles.wrapEquipment}>
         <h3 className={styles.title}>Vehicle equipment</h3>
         <div className={styles.wrapCheckbox}>
          <label className={styles.checkbox}>
            <input type='checkbox' name="airConditioner" value='airConditioner' hidden/>
             <FaWind size={32}/> 
             <span>AC</span>
          </label>

          <label className={styles.checkbox}>
            <input type='checkbox' name="transmission" value='transmission' hidden/>
             <TbAutomaticGearbox size={32}/> 
             <span>Automatic</span>
          </label>

          <label className={styles.checkbox}>
            <input type='checkbox' name="kitchen" value='kitchen' hidden/>
             <TbToolsKitchen2 size={32}/> 
             <span>Kitchen</span>
          </label>

          <label className={styles.checkbox}>
            <input type='checkbox' name="TV" value='TV' hidden/>
             <LuTv size={32}/> 
             <span>TV</span>
          </label>

          <label className={styles.checkbox}>
            <input type='checkbox' name="shower" value='shower' hidden/>
             <LuShowerHead size={32}/> 
             <span>Shower/WC</span>
          </label>

          </div>
       </div>
        
      <div className={styles.wrapEquipment}>
        <h3 className={styles.title}>Vehicle type</h3>
        <div className={styles.wrapCheckbox}>
          <label className={styles.radio}>
            <input type='radio'  hidden/>
              <Icon width={40} height={28} name={"icon-ButtonO"}/>
              <span>Van</span>
          </label>

          <label className={styles.radio}>
            <input type='radio'  hidden/>
              <Icon width={40} height={28} name={"icon-Button-O1"}/>
              <span>Fully <br/>Integrated</span>
          </label>

          <label className={styles.radio}>
            <input type='radio'  hidden/>
              <Icon width={40} height={28} name={"icon-ButtonO-2"}/>
              <span>Alcove</span>
          </label>
           
        </div>
      </div>

      <Button>Search</Button>

    </form>
  )
}
export default Filtres
