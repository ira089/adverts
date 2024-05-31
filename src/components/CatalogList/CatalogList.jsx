
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import * as camperSelectors from '../../redux/camperSelectors';
import * as camperOperations from '../../redux/camperOperations';
import styles from './CatalogList.module.css';
import CatalogItem from '../CatalogItem/CatalogItem';

 const CatalogList = () => {
  const { isLoading, error, items } = useSelector(camperSelectors.selectCampers);

console.log(isLoading)
console.log(error)
console.log(items)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(camperOperations.getCampersThunk());
  }, [dispatch]);

  const elements = items.map(item => (
    <CatalogItem
      // key={item.id}
      // id={item.id}
      // number={item.number}
      // name={item.name}
    />
  ));

  const isItems = Boolean(items.length);

  return (
    <>
    {isLoading && <p>...Loading</p>}
    {error && <p>{error.message}</p>}
    {isItems && <ul className={styles.list}>{elements}</ul>}
  </>
    
  )
}

export default CatalogList
