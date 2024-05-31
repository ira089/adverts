import CatalogList from 'components/CatalogList/CatalogList'
// import Sidebar from 'components/Sidebar/Sidebar'
import React from 'react'
import styles from './CatalogPage.module.css';

 const CatalogPage = () => {
  return (
    <div className={styles.wrapCatalogPage}>
      {/* <Sidebar/> */}
      <CatalogList/>
    </div>
  )
}
export default CatalogPage
