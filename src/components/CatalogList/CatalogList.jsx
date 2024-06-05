
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

  const { isLoading, error,items } = useSelector(camperSelectors.selectCampers);
  console.log(items)


 const filter = {
  loc: 'location',
  cd: 'CD',
  shower: 'shower'
 }
console.log(filter['loc'])

 const filterItems = (items, filter) => {
  return items.filter(item => {
    for (const key in filter) {
      if (filter.hasOwnProperty(key)) {
        if (item.details[key] === 0) {
          return false;
        }

      }
    }
    return true;
  });
};

const filteredItems = filterItems(items, filter);
console.log(filteredItems)




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
  <div >
    {isLoading && <p>...Loading</p>}
    {error && <p>{error.message}</p>}
    {isItems && <ul >{elements}</ul>}
    {!allItemsLoaded && 
    <div className={styles.btnLoadMore}> 
      <Button  onClick={() => onAddCamper()}>Load more</Button>
    </div>}
  </div>
  )
}

export default CatalogList
