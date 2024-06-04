import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/filterSlice';
import Button from 'components/Button/Button';
import { TbAutomaticGearbox, TbToolsKitchen2 } from "react-icons/tb";
import {  LuTv, LuShowerHead } from "react-icons/lu";
// import { CiLocationOn } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import Icon from 'components/Icon/Icon';
import styles from './filtres.module.css';


 const Filtres = () => {
  const dispatch = useDispatch();
  const [filterLocation, setFilterLocation] = useState('')

  const changeFilterLocation = ({ target }) => {
    const {value} = target;
    setFilterLocation(value)
  };

  const filterCamper = evt => {
    evt.preventDefault();
  dispatch(addFilter(filterLocation));
  // setFilterLocation('');
  }

  return (
    <form onSubmit={filterCamper}>
      
        <p className={styles.text}>Location</p>
        <label>
           <input className={styles.input}onChange={changeFilterLocation}
            placeholder= 'City'
             name="filter" />
        </label>
        
      
      <p className={styles.text}>Filters</p>
      <div className={styles.wrapEquipment}>
         <h3 className={styles.title}>Vehicle equipment</h3>
         <div className={styles.wrapCheckbox}>
           <button className={styles.checkbox} type='button'>
             <FaWind size={32}/>
             <span>AC</span>
           </button>
           <button className={styles.checkbox} type='button'>
             <TbAutomaticGearbox size={32}/>
             <span>Automatic</span>
           </button>
           <button className={styles.checkbox} type='button'>
             <TbToolsKitchen2 size={32}/>
             <span>Kitchen</span>
           </button>
           <button className={styles.checkbox} type='button'>
             <LuTv size={32}/>
             <span>TV</span>
           </button>
           <button className={styles.checkbox} type='button'>
             <LuShowerHead size={32}/>
             <span>Shower/WC</span>
           </button>
          </div>
       </div>
        
      <div className={styles.wrapEquipment}>
        <h3 className={styles.title}>Vehicle type</h3>
        <div className={styles.wrapCheckbox}>
           <button className={styles.radio} type='button'>
             <Icon width={40} height={28} name={"icon-ButtonO"}/>
             <span>Van</span>
           </button>
           <button className={styles.radio} type='button'>
           <Icon width={40} height={28} name={"icon-Button-O1"}/>
             <span>Fully <br/>Integrated</span>
           </button>
           <button className={styles.radio} type='button'>
           <Icon width={40} height={28} name={"icon-ButtonO-2"}/>
             <span>Alcove</span>
           </button>
        </div>
      </div>

      <Button>Search</Button>

    </form>
  )
}
export default Filtres
