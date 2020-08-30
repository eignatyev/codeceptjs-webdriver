const { I } = inject();

module.exports = {

  restaurantEntry: locate('.js-restaurant.restaurant a'),

  openRestaurantMenu(restaurantName) {
    I.click(this.restaurantEntry.withText(restaurantName));
  }
};
