const { assert } = require('chai');

Feature('Order');

Scenario('Add 1 item, tip and submit', async (
    I,
    orderData,
    landingPage, restaurantsPage, menuPage, orderPage, orderConfirmationPage) => {

    I.amOnPage('/en');
    I.setCookie({name: 'cookieConsent', value: 'full'});

    landingPage.findRestaurantsInArea('8888', 'Alpha');
    restaurantsPage.openRestaurantMenu('TEST Restaurant Selenium');
    menuPage.addSimpleItemToBasket('Sprite');
    menuPage.submitBasket();
    await orderPage.fillFormAndSubmit(orderData, 'As soon as possible', true);

    I.scrollPageToBottom();  // To see a relevant screenshot if the test fails
    const orderReferenceValue = await I.grabTextFrom(orderConfirmationPage.orderReferenceValue);
    assert.match(orderReferenceValue, /^[A-Z0-9]{6}$/, 'The reference value is invalid');

}).injectDependencies({ orderData: require('./order_data.json') });

Scenario('Add 1 menu and submit', async (
    I,
    orderData,
    landingPage, restaurantsPage, menuPage, orderPage, orderConfirmationPage) => {

    I.amOnPage('/en');
    I.setCookie({name: 'cookieConsent', value: 'full'});

    landingPage.findRestaurantsInArea('8888', 'Alpha');
    restaurantsPage.openRestaurantMenu('TEST Restaurant Selenium');
    await menuPage.addMenuToBasket('Drinks');
    menuPage.submitBasket();
    await orderPage.fillFormAndSubmit(orderData, 'As soon as possible');

    I.scrollPageToBottom();  // To see a relevant screenshot if the test fails
    const orderReferenceValue = await I.grabTextFrom(orderConfirmationPage.orderReferenceValue);
    assert.match(orderReferenceValue, /^[A-Z0-9]{6}$/, 'The reference value is invalid');

}).injectDependencies({ orderData: require('./order_data.json') });
