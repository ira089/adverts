import React from 'react'
import styles from './homePage.module.css';

const Home = () => {
  return (
    <div className={styles.wrap}>
      <h1>What do you get by renting a motorhome?</h1>

      <ul>
        <li>unlimited mileage;</li>
        <li> assistance in planning routes and choosing campsites;</li>
        <li>compulsory insurance policy;</li>
        <li>specialist support by telephone 27/7;</li>
        <li>Full-fledged sleeping places for rest, often with orthopedic mattresses;</li>
        <li> Shower cabin, toilet;</li>
        <li>Kitchen: hob, washbasin, refrigerator;</li>
        <li>Blinds, curtains, mosquito net;</li>
        <li> Marquis;</li>
        <li>Air conditioning, TV, satellite dish, heater, boiler.</li>
        
      </ul>
 
    </div>
  );
};

export default Home