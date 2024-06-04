export const selectCampers = state => state.campers;
export const selectFilter = state => state.filter;

export const selectFilteredCamper = state => {
    const filterState = selectFilter(state);
    const { items } = selectCampers(state);
  
    if (!filterState) {
      return items;
    }
    const normalizedFilter = filterState.toLowerCase();
    return items.filter(camper =>
      camper.location.toLocaleLowerCase().includes(normalizedFilter)
    );
  };