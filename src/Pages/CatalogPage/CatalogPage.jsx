import CatalogList from 'components/CatalogList/CatalogList'
import Filtres from '../../components/Filtres/Filtres'
import React from 'react'
import styles from './CatalogPage.module.css';

 const CatalogPage = () => {
  return (
    <div className={styles.wrapCatalogPage}>
      <Filtres/>
      <CatalogList/>
    </div>
  )
}
export default CatalogPage
