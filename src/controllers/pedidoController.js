const service = require("../services/pedidoService")

async function criarPedido(req, res) {
  try {
    // tenta criar o pedido e retorna 201 quando tudo funciona
    const pedido = await service.criarPedido(req.body)

    res.status(201).json(pedido)
  } catch (error) {
    // se vier erro conhecido de negocio, devolve o status certo
    if (error.statusCode) {
      return res.status(error.statusCode).json({ erro: error.message })
    }

    // para erro inesperado, loga detalhe interno e responde mensagem amigavel
    console.error("erro inesperado ao criar pedido", error)
    res.status(500).json({ erro: "Erro interno ao criar pedido" })
  }
}

async function obterPedidoPorId(req, res) {
  try {
    const pedido = await service.buscarPedido(req.params.id)

    if (!pedido) {
      return res.status(404).json({ erro: "Pedido nao encontrado" })
    }

    res.json(pedido)
  } catch (error) {
    console.error("erro inesperado ao buscar pedido por id", error)
    res.status(500).json({ erro: "Erro interno ao buscar pedido" })
  }
}

async function listarPedidos(req, res) {
  try {
    const pedidos = await service.listarPedidos()
    res.json(pedidos)
  } catch (error) {
    console.error("erro inesperado ao listar pedidos", error)
    res.status(500).json({ erro: "Erro interno ao listar pedidos" })
  }
}

async function atualizarPedido(req, res) {
  try {
    // atualiza pelo id da url para manter a fonte da verdade em um unico lugar
    const pedidoAtualizado = await service.atualizarPedido(req.params.id, req.body)

    if (!pedidoAtualizado) {
      return res.status(404).json({ erro: "Pedido nao encontrado" })
    }

    res.json(pedidoAtualizado)
  } catch (error) {
    if (error.statusCode) {
      return res.status(error.statusCode).json({ erro: error.message })
    }

    console.error("erro inesperado ao atualizar pedido", error)
    res.status(500).json({ erro: "Erro interno ao atualizar pedido" })
  }
}

async function deletarPedido(req, res) {
  try {
    const pedidoDeletado = await service.deletarPedido(req.params.id)

    if (!pedidoDeletado) {
      return res.status(404).json({ erro: "Pedido nao encontrado" })
    }

    res.status(204).send()
  } catch (error) {
    console.error("erro inesperado ao deletar pedido", error)
    res.status(500).json({ erro: "Erro interno ao deletar pedido" })
  }
}

module.exports = {
  criarPedido,
  obterPedidoPorId,
  listarPedidos,
  atualizarPedido,
  deletarPedido
}
