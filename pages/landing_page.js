const { I, restaurantsPage } = inject();

module.exports = {

  searchField: '#imysearchstring',
  suggestedLocations: '#iautoCompleteDropDownContent',
  suggestedDeliveryAreas: '#reference',

  findRestaurantsInArea(location, area) {
    I.fillField(this.searchField, location);
    I.click(locate(this.suggestedLocations).withText(location));
    I.click(locate(this.suggestedDeliveryAreas).withText(`${location} ${area}`));
    I.seeElement(restaurantsPage.restaurantEntry);
  }
};
