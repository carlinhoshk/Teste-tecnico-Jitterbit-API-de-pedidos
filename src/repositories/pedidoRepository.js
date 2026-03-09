const Pedido = require("../models/pedidoModel")

async function salvar(pedido) {
  return await Pedido.create(pedido)
}

async function buscarPorId(id) {
  return await Pedido.findOne({ orderId: id })
}

async function listarTodos() {
  return await Pedido.find()
}

async function atualizar(id, pedido) {
  return await Pedido.findOneAndUpdate(
    { orderId: id },
    pedido,
    { new: true, runValidators: true }
  )
}

async function deletar(id) {
  return await Pedido.findOneAndDelete({ orderId: id })
}

module.exports = {
  salvar,
  buscarPorId,
  listarTodos,
  atualizar,
  deletar
}
