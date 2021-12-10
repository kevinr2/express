'use strict';
const { UserSchema, USER_TABLE } = require('./../models/user.model')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(USER_TABLE, 'role', UserSchema.rol)
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(USER_TABLE, 'role')
  }
};
