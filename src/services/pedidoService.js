const repository = require("../repositories/pedidoRepository")
const mapper = require("../mappers/pedidoMapper")
const AppError = require("../utils/appError")

async function criarPedido(dados) {
  validarPedido(dados, true)

  const pedidoMapeado = mapper.mapearPedido(dados)
  const pedidoExistente = await repository.buscarPorId(pedidoMapeado.orderId)

  if (pedidoExistente) {
    throw new AppError("Pedido ja existe com esse numero", 409)
  }

  return await repository.salvar(pedidoMapeado)
}

async function buscarPedido(id) {
  return await repository.buscarPorId(id)
}

async function listarPedidos() {
  return await repository.listarTodos()
}

async function atualizarPedido(id, dados) {
  validarPedido(dados, false)

  const pedidoMapeado = mapper.mapearPedido(dados, id)

  return await repository.atualizar(id, pedidoMapeado)
}

async function deletarPedido(id) {
  return await repository.deletar(id)
}

function validarPedido(dados, exigirNumeroPedido) {
  // valida o payload antes de bater no banco para retornar erros mais claros ao cliente
  if (!dados || typeof dados !== "object") {
    throw new AppError("Body da requisicao invalido", 400)
  }

  const numeroPedidoInvalido = exigirNumeroPedido && !dados.numeroPedido

  if (numeroPedidoInvalido || dados.valorTotal === undefined || dados.valorTotal === null || !dados.dataCriacao || !Array.isArray(dados.items)) {
    throw new AppError("Campos obrigatorios: valorTotal, dataCriacao e items (numeroPedido e obrigatorio na criacao)", 400)
  }
}

module.exports = {
  criarPedido,
  buscarPedido,
  listarPedidos,
  atualizarPedido,
  deletarPedido
}
