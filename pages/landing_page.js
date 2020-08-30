const { I, restaurantsPage } = inject();

module.exports = {

  /* Locators */

  searchField: locate('#imysearchstring'),
  suggestedLocations: locate('#iautoCompleteDropDownContent'),
  suggestedDeliveryAreas: locate('#reference'),


  /* Step objects */

  /**
   * Searches for restaurant in specified location and area and verifies restaurants' list is displayed
   * @param  {[string]} location Item name
   * @param  {[string]} area (optional) XPath locator as an object
   */
  findRestaurantsInArea(location, area) {
    I.fillField(this.searchField, location);
    I.click(this.suggestedLocations.withText(location));
    I.click(this.suggestedDeliveryAreas.withText(`${location} ${area}`));

    // Verify the restaurants' page is opened
    I.seeElement(restaurantsPage.restaurantEntry);
  }
};
