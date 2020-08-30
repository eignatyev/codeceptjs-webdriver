const { I } = inject();

module.exports = {

  /* Locators */

  restaurantEntry: locate('.js-restaurant.restaurant a'),


  /* Step objects */

  /**
   * Selects a restaurant with the specified name from the list
   * @param  {[string]} restaurantName Restaurant name
   */
  openRestaurantMenu(restaurantName) {
    I.click(this.restaurantEntry.withText(restaurantName));
  }
};
