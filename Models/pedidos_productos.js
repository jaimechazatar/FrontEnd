import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const PedidoProducto = sequelize.define(
  "pedido_producto",
  {
    // Definicion de Atributos
    idPedPro: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    pedido: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    producto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
  },
  {
    timestamps: false,
  }
);

export { PedidoProducto };