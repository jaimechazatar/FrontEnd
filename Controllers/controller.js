import { Producto } from "../Models/productos.js";
import { Cliente } from "../Models/clientes.js";
import { Pedido } from "../Models/pedidos.js";
import { PedidoProducto } from "../Models/pedidos_productos.js";


const getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const postProductos = async (req, res) => {
  const { nombre, detalle, precio } = req.body;
  try {
    const newProducto = await Producto.create({
      nombre,
      detalle,
      precio,
    });
    res.status(200).json(newProducto);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const putProductos = async (req, res) => {
  const { idProducto } = req.params;
  const { nombre, detalle, precio } = req.body;
  try {
    const oldProducto = await Producto.findByPk(idProducto);
    oldProducto.nombre = nombre;
    oldProducto.detalle = detalle;
    oldProducto.precio = precio;
    const modProducto = await oldProducto.save();
    res.status(200).json(modProducto);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const deleteProductos = async (req, res) => {
  const { idProducto } = req.params;
  try {
    const respuesta = await Producto.destroy({
      where: {
        idProducto,
      },
    });
    res.status(200).json({ mensaje: "Registro Eliminado" });
  } catch (error) {
    res.status(400).json({ mensaje: "Registro No Eliminado" + error });
  }
};


const getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const postClientes = async (req, res) => {
  const { idCliente, nombre, telefono } = req.body;
  try {
    const newCliente = await Cliente.create({
      idCliente,
      nombre,
      telefono,
    });
    res.status(200).json(newCliente);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const putClientes = async (req, res) => {
  const { idCliente } = req.params;
  const { nombre, telefono } = req.body;
  try {
    const oldCliente = await Cliente.findByPk(idCliente);
    oldCliente.nombre = nombre;
    oldCliente.telefono = telefono;
    const modCliente = await oldCliente.save();
    res.status(200).json(modCliente);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const deleteClientes = async (req, res) => {
  const { idCliente } = req.params;
  try {
    const respuesta = await Cliente.destroy({
      where: {
        idCliente,
      },
    });
    res.status(200).json({ mensaje: "Registro Eliminado" });
  } catch (error) {
    res.status(400).json({ mensaje: "Registro No Eliminado" + error });
  }
};


const getPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const postPedidos = async (req, res) => {
  const { cedCliente, fecha, estado } = req.body;
  try {
    const newPedido = await Pedido.create({
      cedCliente,
      fecha,
      estado,
    });
    res.status(200).json(newPedido);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const putPedidos = async (req, res) => {
  const { idPedido } = req.params;
  const { fecha, estado } = req.body;
  try {
    const oldPedido = await Pedido.findByPk(idPedido);
    oldPedido.fecha = fecha;
    oldPedido.estado = estado;
    const modPedido = await oldPedido.save();
    res.status(200).json(modPedido);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const deletePedidos = async (req, res) => {
  const { idPedido } = req.params;
  try {
    const respuesta = await Pedido.destroy({
      where: {
        idPedido,
      },
    });
    res.status(200).json({ mensaje: "Registro Eliminado" });
  } catch (error) {
    res.status(400).json({ mensaje: "Registro No Eliminado" + error });
  }
};

const getPedidosProductos = async (req, res) => {
  try {
    const pedido_producto = await PedidoProducto.findAll();
    res.status(200).json(pedido_producto);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const postPedidosProductos = async (req, res) => {
  const { pedido, producto, cantidad } = req.body;
  try {
    const newPedidoProducto = await PedidoProducto.create({
      pedido,
      producto,
      cantidad,
    });
    res.status(200).json(newPedidoProducto);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const putPedidosProductos = async (req, res) => {
  const { idPedPro } = req.params;
  const { cantidad } = req.body;
  try {
    const oldPedidoProducto = await PedidoProducto.findByPk(idPedPro);
    oldPedidoProducto.cantidad = cantidad;
    const modPedidoProducto = await oldPedidoProducto.save();
    res.status(200).json(modPedidoProducto);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const deletePedidosProductos = async (req, res) => {
  const { idPedPro } = req.params;
  try {
    const respuesta = await PedidoProducto.destroy({
      where: {
        idPedPro,
      },
    });
    res.status(200).json({ mensaje: "Registro Eliminado" });
  } catch (error) {
    res.status(400).json({ mensaje: "Registro No Eliminado" + error });
  }
};


export {
  getProductos, postProductos, putProductos, deleteProductos,
  getClientes, postClientes, putClientes, deleteClientes,
  getPedidos, postPedidos,putPedidos,deletePedidos,
  getPedidosProductos, postPedidosProductos, putPedidosProductos, deletePedidosProductos
};
