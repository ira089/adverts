import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import * as camperSelectors from '../../redux/camperSelectors';
// import * as camperOperations from '../../redux/camperOperations';
import styles from '../CatalogList/CatalogList.module.css';
import CatalogItem from '../CatalogItem/CatalogItem';
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

  const elements = paginatedItems.map(item => (
    <CatalogItem
      key={item.id}
      item={item}
      
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

export default FavoriteCatalog
