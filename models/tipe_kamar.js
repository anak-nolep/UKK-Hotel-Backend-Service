"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tipe_kamar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tipe_kamar.hasMany(models.kamar, {
        foreignKey: "id_tipe_kamar",
      });
      tipe_kamar.hasMany(models.pemesanan, {
        foreignKey: "id_tipe_kamar",
      });
    }
  }
  tipe_kamar.init(
    {
      id_tipe_kamar: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama_tipe_kamar: DataTypes.STRING,
      harga: DataTypes.INTEGER,
      deskripsi: DataTypes.TEXT,
      foto: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "tipe_kamar",
      tableName: "tipe_kamar",
      timestamps: false,
    }
  );
  return tipe_kamar;
};
