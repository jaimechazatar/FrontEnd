import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const Pedido = sequelize.define(
  "pedidos",
  {
    // Definicion de Atributos
    idPedido: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    cedCliente: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

export { Pedido };