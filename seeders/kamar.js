'use strict';
const fs = require("fs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipe_kamar', [
      {
        nama_tipe_kamar: 'biasa',
        harga: 10000,
        deskripsi: 'biasa',
        foto: 'biasa.jpg',
      }
      /*
      {
        nama_tipe_kamar: 'biasa',
        harga: 10000,
        deskripsi: 'biasa',
        password: 'biasa.png',
      }*/
    ], {});
    try {
      fs.mkdirSync("public/images");
    } catch (e) { }
    try {
      fs.mkdirSync("public/images/kamar");
    } catch (e) { }
    fs.copyFileSync('public/tempelate/kamar/biasa.jpg', 'public/images/kamar/biasa.jpg');
  },

  //reset
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipe_kamar', null, {});
    try {
      fs.mkdirSync("public/images/kamar");
    } catch (e) { }
  }
};
