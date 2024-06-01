import React from 'react';
import styles from './button.module.css';
// import { Button } from '@chakra-ui/react';

 const Button = ({ type = 'submit', children, onClick }) => {
  return (
    <button className={styles.btn} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button