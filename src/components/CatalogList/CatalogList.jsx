
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import * as camperSelectors from '../../redux/camperSelectors';
import * as camperOperations from '../../redux/camperOperations';
import styles from './CatalogList.module.css';
import CatalogItem from '../CatalogItem/CatalogItem';
import Button from 'components/Button/Button';

 const CatalogList = () => {
  const itemsPerPage = 4

  const dispatch = useDispatch();

  const { isLoading, error } = useSelector(camperSelectors.selectCampers);
  

  const [page, setPage] = useState(1)
  const [allItemsLoaded, setAllItemsLoaded] = useState(false)
  const [paginatedItems, setPaginatedItems] = useState([]) 

  useEffect(() => {
    dispatch(camperOperations.getCampersThunk());
  }, [dispatch]);

  // функции для фильтра
  const itemsVisible = useSelector(camperSelectors.selectFilteredCamper);

  useEffect(() => {
    setPaginatedItems(itemsVisible.slice(0, page * itemsPerPage))
  }, [page,itemsVisible])
  
  const onAddCamper = () => {
    const allLoaded = itemsVisible.length <= page * itemsPerPage
    setAllItemsLoaded(allLoaded)
    if (!allLoaded) {
      setPage(page + 1)
    }
  }
// ------------

  // useEffect(() => {
  //   setPaginatedItems(items.slice(0, page * itemsPerPage))
  // }, [page,items])
  
  // const onAddCamper = () => {
  //   const allLoaded = items.length <= page * itemsPerPage
  //   setAllItemsLoaded(allLoaded)
  //   if (!allLoaded) {
  //     setPage(page + 1)
  //   }
  // }

  const isVariant = { variant: true};
  const elements = paginatedItems.map(item => (
    <CatalogItem
      key={item.id}
      item={item}
      isVariant={isVariant}
    />
  ));

  const isItems = Boolean(paginatedItems.length);

  return (
  <div>
    {isLoading && <p>...Loading</p>}
    {error && <p>{error.message}</p>}
    {isItems && <ul className={styles.list}>{elements}</ul>}
    {!allItemsLoaded && <Button onClick={() => onAddCamper()}>Load more</Button>}
  </div>
  )
}

export default CatalogList
