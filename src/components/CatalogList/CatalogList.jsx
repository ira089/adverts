
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import * as camperSelectors from '../../redux/camperSelectors';
import * as camperOperations from '../../redux/camperOperations';
import styles from './CatalogList.module.css';
import CatalogItem from '../CatalogItem/CatalogItem';
import Button from 'components/Button/Button';

 const CatalogList = () => {
  const { isLoading, error, items } = useSelector(camperSelectors.selectCampers);

console.log(items)


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(camperOperations.getCampersThunk());
  }, [dispatch]);

  const elements = items.map(item => (
    <CatalogItem
      key={item._id}
      item={item}
      
    />
  ));

  const isItems = Boolean(items.length);

  return (
    <div>
    {isLoading && <p>...Loading</p>}
    {error && <p>{error.message}</p>}
    {isItems && <ul className={styles.list}>{elements}</ul>}
    <Button>Load more</Button>
  </div>
    
  )
}

export default CatalogList
