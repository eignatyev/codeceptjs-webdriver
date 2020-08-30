const { I } = inject();

module.exports = {

  submitButton: '.checkout-orderbutton-btn input',
  deliveryTimeDropDown: '#ideliverytime',
  totalPriceLabel: '#sum .row-sum .cart-sum-price',
  paymentDropDown: '#ipayswith',
  paymentOption: '#ipayswith option',

  extractPriceValue(priceString) {
    return parseFloat(priceString.replace(/\D+/, ''));  // Remove currency symbol
  },

  async tip() {
    const totalPriceValue = this.extractPriceValue(await I.grabTextFrom(this.totalPriceLabel));
    const paymentOptions = await I.grabTextFrom(this.paymentOption);
    const availablePayValues = paymentOptions.map(o => this.extractPriceValue(o));
    const priceWithTipValue = availablePayValues.filter(v => v > totalPriceValue)[0];
    const priceWithTipText = paymentOptions[availablePayValues.indexOf(priceWithTipValue)];
    I.selectOption(this.paymentDropDown, priceWithTipText);
  },

  async fillFormAndSubmit(orderData, deliveryTime, isToTip) {
    I.see('Address');
    I.fillField('Address', orderData.Address);
    I.fillField('Postcode', orderData.PostCode);
    I.fillField('City', orderData.City);
    I.fillField('Name', orderData.Name);
    I.fillField('E-mail', orderData.EMail);
    I.fillField('Phone number', orderData.PhoneNumber);

    I.selectOption(this.deliveryTimeDropDown, deliveryTime);

    if (isToTip) {
      await this.tip();
    }

    I.click(this.submitButton);
    I.dontSeeElement(this.submitButton);
  }
};
