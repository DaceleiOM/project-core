'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('brands', 'slug', {
      type: Sequelize.STRING(255),
      allowNull: false
    });
    await queryInterface.addColumn('branches', 'address', {
      type: Sequelize.STRING(255),
      allowNull: false,
    });
    await queryInterface.addColumn('branches', 'slug', {
      type: Sequelize.STRING(255),
      allowNull: false    
    });
    await queryInterface.addColumn('branches', 'facebook', {
      type: Sequelize.STRING(255),
      allowNull: true    
    });
    await queryInterface.addColumn('branches', 'instagram', {
      type: Sequelize.STRING(255),
      allowNull: true    
    });
    await queryInterface.addColumn('brand_categories', 'slug', {
      type: Sequelize.STRING(255),
      allowNull: false    
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('brands', 'slug');
    await queryInterface.removeColumn('branches', 'address');
    await queryInterface.removeColumn('branches', 'slug');
    await queryInterface.removeColumn('branches', 'facebook');
    await queryInterface.removeColumn('branches', 'instagram');
    await queryInterface.removeColumn('brand_categories', 'slug');

  },
};

