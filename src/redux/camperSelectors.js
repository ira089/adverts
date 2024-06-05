export const selectCampers = state => state.campers;
export const selectFilter = state => state.filter;

export const selectFilteredCamper = state => {
    const filterState = selectFilter(state);
    const { items } = selectCampers(state);
  
    if (!filterState) {
      return items;
    }
    // const normalizedFilter = filterState.toLowerCase();
    const normalizedFilter = filterState.location.toLowerCase()
    // return items.filter(camper =>
    //   camper.location.toLocaleLowerCase().includes(normalizedFilter)
    // );
    const itemsLocationFilter = items.filter(camper =>
        camper.location.toLocaleLowerCase().includes(normalizedFilter))
        const itemsAcFilter = itemsLocationFilter.filter(camper =>
          camper.details.airConditioner > 0)
          return itemsAcFilter
  };