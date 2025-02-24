/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE, // Tipo de data para o momento da criação do registro
        allowNull: false, // Não permite valores nulos
      },
      updated_at: {
        type: Sequelize.DATE, // Tipo de data para o momento da atualização do registro
        allowNull: false, // Não permite valores nulos
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('categories');
  },
};
