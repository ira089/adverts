import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import * as camperSelectors from '../../redux/camperSelectors';
import * as camperOperations from '../../redux/camperOperations';
import styles from '../CatalogList/CatalogList.module.css';
import CatalogItem from 'components/CatalogItem/CatalogItem';
import Button from 'components/Button/Button';

 const FavoriteCatalog = () => {

  const itemsPerPage = 4
 
  const { isLoading, error, items } = useSelector(camperSelectors.selectCampers);
// console.log(items)
// console.log(isLoading)
const dispatch = useDispatch();
useEffect(() => {
  dispatch(camperOperations.getCampersThunk());
}, [dispatch]);

  const [page, setPage] = useState(1)
  const [allItemsLoaded, setAllItemsLoaded] = useState(false)
  const [paginatedItems, setPaginatedItems] = useState([]) 
  const [itemsFavorite, setItemsFavorite] = useState([]) 

  console.log(items)
  console.log(itemsFavorite)
  console.log(paginatedItems)

  useEffect(() => {
setItemsFavorite(items.filter(el => el.favorite))
  }, [items]);

  
  useEffect(() => {
      const allLoaded = itemsFavorite.length <= page * itemsPerPage
     setAllItemsLoaded(allLoaded)
    setPaginatedItems(itemsFavorite.slice(0, page * itemsPerPage))
  }, [page,itemsFavorite])

  const onAddCamper = () => {
    if (!allItemsLoaded) {
      setPage(page + 1)
    }
  }

  
console.log(paginatedItems)

  const isVariant = { variant: false};
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
    {isItems ? <ul className={styles.list}>{elements}</ul> : <h2>you don't have any favorites</h2>}
    {!allItemsLoaded && <Button onClick={() => onAddCamper()}>Load more</Button>}
  </div>
    
  )
}

export default FavoriteCatalog
