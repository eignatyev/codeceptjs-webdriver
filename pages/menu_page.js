const { I } = inject();

module.exports = {

  submitButton: '.basket__order-button',
  mealNameLabel: locate('span.meal-name span'),
  categoryContainer: locate('.menucard__meals-group'),
  categoryNameLabel: locate('.menucard__meals-group-category'),

  getCategoryContainer(categoryName) {
    return this.categoryContainer.withChild(this.categoryNameLabel.withText(categoryName));
  },
  async addMenuToBasket(menuName) {
    const menuItemNames = await I.grabTextFrom(this.mealNameLabel.inside(this.getCategoryContainer(menuName)));
    menuItemNames.forEach(n => this.addSimpleItemToBasket(n));
  },
  addSimpleItemToBasket(itemName) {
    const menuItem = this.mealNameLabel.withText(itemName);
    I.seeElement(menuItem);
    I.click(menuItem);
  },
  submitBasket() {
    I.click(this.submitButton);
  }
};
