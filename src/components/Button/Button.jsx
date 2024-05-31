import React from 'react';
import styles from './button.module.css';
// import { Button } from '@chakra-ui/react';

 const Button = ({ type = 'submit', children }) => {
  return (
    <button className={styles.btn} type={type}>
      {children}
    </button>
  );
};
export default Button