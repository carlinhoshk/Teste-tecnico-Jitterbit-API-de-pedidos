const express = require("express")
const controller = require("../controllers/pedidoController")

const router = express.Router()

// cria um novo pedido com mapeamento para o modelo interno
router.post('/', controller.criarPedido);

// lista todos os pedidos cadastrados
router.get('/list', controller.listarPedidos);

// busca um pedido especifico pelo numero do pedido
router.get('/:id', controller.obterPedidoPorId);

// atualiza um pedido a partir do numero na url
router.put('/:id', controller.atualizarPedido);

// remove um pedido pelo numero informado na url
router.delete('/:id', controller.deletarPedido);

module.exports = router
