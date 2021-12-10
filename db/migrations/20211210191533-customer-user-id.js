'use strict';

const { CustomerSchema, CUSTOMER_TABLE } = require('./../models/customer.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', CustomerSchema.userId);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};
