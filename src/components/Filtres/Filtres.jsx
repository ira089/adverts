import React from 'react'
import { useDispatch  } from 'react-redux';
// import * as camperSelectors from '../../redux/camperSelectors';
// import * as camperOperations from '../../redux/camperOperations';
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
  
  
  // const { items} = useSelector(camperSelectors.selectCampers);

  // const qwe = items[0]
  // console.log(items)
 
  // const {details} = items[0]
  // console.log(qwe.details.TV)

  // const [filterLocation, setFilterLocation] = useState('')

  // useEffect(() => {
  //   dispatch(camperOperations.getCampersThunk());
  // }, [dispatch]);

  // const changeFilterLocation = ({ target }) => {
  //   const {value} = target;
  //   setFilterLocation(value)
  // };

  // const changeAC = ({target}) => {
  //   console.log(target.name)
  // } 
// ---------------
  const filterCamper =  (evt) => {
    evt.preventDefault();
    console.dir(evt.target)
    console.log(evt.target[0].value)
    console.log(evt.target[1].name)

    const formData = {
      location: evt.target[0].value,
      ac: evt.target[1].name
    }
console.log(formData)
dispatch(addFilter(formData))
  }
   
  // const filterCamper = evt => {
  //   evt.preventDefault();
  // dispatch(addFilter(filterLocation));
  // setFilterLocation('');
  // }

  return (
    <form onSubmit={filterCamper}>
      
        <p className={styles.text}>Location</p>
        <label>
           <input className={styles.input}
          //  onChange={changeFilterLocation}
            placeholder= 'City'
             name="filter" />
        </label>
        
      
      <p className={styles.text}>Filters</p>
      <div className={styles.wrapEquipment}>
         <h3 className={styles.title}>Vehicle equipment</h3>
         <div className={styles.wrapCheckbox}>
           <button className={styles.checkbox}  type='checkbox'
            name="airConditioner"> 
             <FaWind size={32}/>
             <span>AC</span>
           </button>

           <button className={styles.checkbox} type='button'
          
           >
             <TbAutomaticGearbox size={32}/>
             <span>Automatic</span>
           </button>
           <button className={styles.checkbox} type='submit' 
          //  name={details.kitchen}
           >
             <TbToolsKitchen2 size={32}/>
             <span>Kitchen</span>
           </button>
           <button className={styles.checkbox} type='checkbox' 
          //  name={details.TV}
           >
             <LuTv size={32}/>
             <span>TV</span>
           </button>
           <button className={styles.checkbox} type='checkbox'
            // name={details.shower}
            >
             <LuShowerHead size={32}/>
             <span>Shower/WC</span>
           </button>
          </div>
       </div>
        
      <div className={styles.wrapEquipment}>
        <h3 className={styles.title}>Vehicle type</h3>
        <div className={styles.wrapCheckbox}>
           <button className={styles.radio}  type='radio'>
             <Icon width={40} height={28} name={"icon-ButtonO"}/>
             <span>Van</span>
           </button>
           <button className={styles.radio} type='radio'>
           <Icon width={40} height={28} name={"icon-Button-O1"}/>
             <span>Fully <br/>Integrated</span>
           </button>
           <button className={styles.radio} type='radio'>
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
