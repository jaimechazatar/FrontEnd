import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const Producto = sequelize.define(
  "productos",
  {
    // Definicion de Atributos
    idProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    detalle: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

export { Producto };
