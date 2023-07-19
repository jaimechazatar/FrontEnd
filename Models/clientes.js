import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const Cliente = sequelize.define(
  "clientes",
  {
    // Definicion de Atributos
    idCliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true
    },
  },
  {
    timestamps: false,
  }
);

export { Cliente };