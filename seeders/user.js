'use strict';
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
      {
        nama_user: 'admin',
        role: 'admin',
        email: 'admin@localhost',
        password: bcrypt.hashSync('123456789', 10),
      }, {
        nama_user: 'resepsionis',
        role: 'resepsionis',
        email: 'resepsionis@localhost',
        password: bcrypt.hashSync('123456789', 10),
      },
      {
        nama_user: 'tamu',
        role: 'tamu',
        email: 'tamu@localhost',
        password: bcrypt.hashSync('123456789', 10),
      },
      /*
      {
        nama_user: 'kasir',
        role: 'kasir',
        username: 'kasir',
        password: bcrypt.hashSync('kasir', 10),
      },*/
    ], {});
  },

  //reset
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
