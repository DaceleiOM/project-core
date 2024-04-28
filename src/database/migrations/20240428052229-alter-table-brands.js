'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('brands', 'logo', {
      type: Sequelize.STRING(255),
      allowNull: true,
    });
    await queryInterface.addColumn('brands', 'description', {
      type: Sequelize.STRING(255),
      allowNull: true,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('brands', 'logo');
    await queryInterface.removeColumn('brands', 'description');
  },
};

