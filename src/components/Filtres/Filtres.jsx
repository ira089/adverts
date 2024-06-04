import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/filterSlice';
import Button from 'components/Button/Button'
// import { CiLocationOn } from "react-icons/ci";
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
      <div>
        <h3>Vehicle equipment</h3>
        <label>
          <input type="checkbox" name="equipment" value="AC"/>
        </label>
        
      </div>
      <div>
        <h3>Vehicle type</h3>
        <ul>
          {/* радищкнопки */}
        </ul>
      </div>
      <Button>Search</Button>

    </form>
  )
}
export default Filtres
