const { I } = inject();

module.exports = {

  /* Locators */

  submitButton: locate('.basket__order-button'),
  mealNameLabel: locate('span.meal-name span'),
  menuCardContainer: locate('#imenucard'),
  categoryContainer: locate('.menucard__meals-group'),
  categoryNameLabel: locate('.menucard__meals-group-category'),


  /* Step objects */

  /**
   * Returns a complex XPath locator for the category container with a specific name
   * @param  {[string]} categoryName Category name
   * @return {[object]} The object representation of XPath
   */
  getCategoryContainer(categoryName) {
    return this.categoryContainer.withChild(this.categoryNameLabel.withText(categoryName));
  },

  /**
   * Adds all items to the basket from a specific category
   * Supports only simple items
   * @param  {[string]} categoryName Category name
   */
  async addCategoryItemsToBasket(categoryName) {
    const categoryContainer = this.getCategoryContainer(categoryName);
    const categoryItemsNames = await I.grabTextFrom(this.mealNameLabel.inside(categoryContainer));
    categoryItemsNames.forEach(n => this.addSimpleItemToBasket(n, categoryContainer));
  },

  /**
   * Adds a simple item to the basket
   * If the categoryContainer parameter's value isn't specified, adds the 1st occurrence from the menu
   * @param  {[string]} itemName Item name
   * @param  {[object]} categoryContainer (optional) XPath locator as an object
   */
  addSimpleItemToBasket(itemName, categoryContainer) {

    // Get a locator for menu item with the specified name
    let menuItem = this.mealNameLabel.withText(itemName);

    // Use global menu card container if no parent category container provided
    categoryContainer = categoryContainer || this.menuCardContainer;
    menuItem = menuItem.inside(categoryContainer);

    I.seeElement(menuItem);
    I.click(menuItem);
  },

  /**
   * Submits the basket by clicking the submit button on the menu page
   */
  submitBasket() {
    I.click(this.submitButton);
  }
};
