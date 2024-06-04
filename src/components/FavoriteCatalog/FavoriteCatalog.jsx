import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import * as camperSelectors from '../../redux/camperSelectors';
// import * as camperOperations from '../../redux/camperOperations';
import styles from '../CatalogList/CatalogList.module.css';
// import FavoriteItem  from '../FavoriteItem/FavoriteItem';
import CatalogItem from 'components/CatalogItem/CatalogItem';
import Button from 'components/Button/Button';

 const FavoriteCatalog = () => {
  const itemsPerPage = 4

//   const dispatch = useDispatch();

  const { isLoading, error, items } = useSelector(camperSelectors.selectCampers);
// console.log(items)


//   console.log(itemsFavorite)

  const [page, setPage] = useState(1)
  const [allItemsLoaded, setAllItemsLoaded] = useState(false)
  const [paginatedItems, setPaginatedItems] = useState([]) 
  const [itemsFavorite, setItemsFavorite] = useState([]) 

  useEffect(() => {
setItemsFavorite(items.filter(el => el.favorite))

    // const itemsFavorite = items.filter(el => el.favorite)
  }, [items]);

  
  useEffect(() => {
    setPaginatedItems(itemsFavorite.slice(0, page * itemsPerPage))
  }, [page,itemsFavorite])

  const onAddCamper = () => {
    const allLoaded = itemsFavorite.length <= page * itemsPerPage
    setAllItemsLoaded(allLoaded)
    if (!allLoaded) {
      setPage(page + 1)
    }
  }

  // const elements = paginatedItems.map(item => (
  //   <FavoriteItem 
  //     key={item.id}
  //     item={item}
      
  //   />
  // ));

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
