export const selectCampers = state => state.campers;
export const selectFilter = state => state.filter;

export const selectFilteredCamper = state => {
    const filterState = selectFilter(state);
    const { items } = selectCampers(state);
  
    if (!filterState) {
      return items;
    }

    if(filterState.location) {
      const normalizedFilter = filterState.location.toLowerCase();
      const itemsLocationFilter = items.filter(camper =>
          camper.location.toLocaleLowerCase().includes(normalizedFilter));
          const filteredItems = filterItems(itemsLocationFilter, filterState);
          return filteredItems;
    }
    const filteredItems = filterItems(items, filterState);
          return filteredItems;  
  };

  function filterItems(items, filter) {
    return items.filter(item => {
          for (const key in filter) {
            if (filter[key]) {
              if (item.details[key] === 0) {
                return false;
             }
           }
         }
         return true;
        });
  }

  