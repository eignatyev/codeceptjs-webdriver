const { I } = inject();

module.exports = {

  submitButton: '.basket__order-button',
  mealNameLabel: locate('span.meal-name span'),
  menuCardContainer: locate('#imenucard'),
  categoryContainer: locate('.menucard__meals-group'),
  categoryNameLabel: locate('.menucard__meals-group-category'),

  getCategoryContainer(categoryName) {
    return this.categoryContainer.withChild(this.categoryNameLabel.withText(categoryName));
  },

  async addMenuToBasket(menuName) {
    const categoryContainer = this.getCategoryContainer(menuName);
    const menuItemsNames = await I.grabTextFrom(this.mealNameLabel.inside(categoryContainer));
    menuItemsNames.forEach(n => this.addSimpleItemToBasket(n, categoryContainer));
  },

  addSimpleItemToBasket(itemName, categoryContainer) {

    let menuItem = this.mealNameLabel.withText(itemName);
    categoryContainer = categoryContainer || this.menuCardContainer;
    menuItem = menuItem.inside(categoryContainer);
    I.seeElement(menuItem);
    I.click(menuItem);
  },

  submitBasket() {
    I.click(this.submitButton);
  }
};
