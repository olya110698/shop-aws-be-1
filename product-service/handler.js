'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        productName: 'Notebook',
        price: 123
      }
    )
  };
};