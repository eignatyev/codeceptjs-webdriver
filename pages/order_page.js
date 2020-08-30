const { I } = inject();

module.exports = {

  /* Locators */

  submitButton: '.checkout-orderbutton-btn input',
  deliveryTimeDropDown: '#ideliverytime',
  totalPriceLabel: '#sum .row-sum .cart-sum-price',
  paymentDropDown: '#ipayswith',
  paymentOption: '#ipayswith option',


  /* Step objects */

  /**
   * Gets the number value from a string of the following type: "£ 30,00"
   * Returns the number value
   * @param  {[string]} priceString Category name
   * @return {[number]} The number value of a price
   */
  extractPriceValue(priceString) {

    // Remove a currency symbol
    const numericValue = parseFloat(priceString.replace(/\D+/, ''));

    return numericValue;
  },

  /**
   * Gets the next bigger value from pay options than the price and selects it
   */
  async tip() {
    const totalPriceValue = this.extractPriceValue(await I.grabTextFrom(this.totalPriceLabel));

    // Get payment options as a list of strings
    const paymentOptions = await I.grabTextFrom(this.paymentOption);

    // Parse payment options' values as numbers
    const availablePayValues = paymentOptions.map(o => this.extractPriceValue(o));

    // Get the next bigger value than the total price value
    const priceWithTipValue = availablePayValues.filter(v => v > totalPriceValue)[0];

    // Set an option with the determined value
    const priceWithTipText = paymentOptions[availablePayValues.indexOf(priceWithTipValue)];
    I.selectOption(this.paymentDropDown, priceWithTipText);
  },

  /**
   * Gets the number value from a string of the following type: "£ 30,00"
   * Returns the number value
   * @param  {[object]} orderData Data to use to fill the order form
   * @param  {[boolean]} isToTip Specifies whether to tip or not
   */
  async fillFormAndSubmit(orderData, isToTip) {

    // Verify the form is present
    I.see('Address');

    // Fill the form
    I.fillField('Address', orderData.OrderForm.Address);
    I.fillField('Postcode', orderData.OrderForm.PostCode);
    I.fillField('City', orderData.OrderForm.City);
    I.fillField('Name', orderData.OrderForm.Name);
    I.fillField('E-mail', orderData.OrderForm.EMail);
    I.fillField('Phone number', orderData.OrderForm.PhoneNumber);
    I.selectOption(this.deliveryTimeDropDown, orderData.OrderForm.DeliveryTime);

    // Select a pay option with the next bigger pay value than the total price if isToTip === true
    if (isToTip) {
      await this.tip();
    }

    I.click(this.submitButton);

    // Verify the order page is closed
    I.dontSeeElement(this.submitButton);
  }
};
