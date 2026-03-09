/**
 * @swagger
 * components:
 *   schemas:
 *     ItemPedidoEntrada:
 *       type: object
 *       required:
 *         - idItem
 *         - quantidadeItem
 *         - valorItem
 *       properties:
 *         idItem:
 *           type: string
 *           example: "2434"
 *         quantidadeItem:
 *           type: integer
 *           example: 1
 *         valorItem:
 *           type: number
 *           format: float
 *           example: 1000
 *     PedidoEntrada:
 *       type: object
 *       required:
 *         - numeroPedido
 *         - valorTotal
 *         - dataCriacao
 *         - items
 *       properties:
 *         numeroPedido:
 *           type: string
 *           example: "v10089015vdb-01"
 *         valorTotal:
 *           type: number
 *           format: float
 *           example: 10000
 *         dataCriacao:
 *           type: string
 *           format: date-time
 *           example: "2023-07-19T12:24:11.5299601+00:00"
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ItemPedidoEntrada'
 *     ItemPedidoSaida:
 *       type: object
 *       properties:
 *         productId:
 *           type: integer
 *           example: 10
 *         quantity:
 *           type: integer
 *           example: 2
 *         price:
 *           type: number
 *           format: float
 *           example: 49.9
 *     PedidoSaida:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 67cdab1234bca1f8a6a1ab12
 *         orderId:
 *           type: string
 *           example: PED-001
 *         value:
 *           type: number
 *           format: float
 *           example: 99.8
 *         creationDate:
 *           type: string
 *           format: date-time
 *           example: 2026-03-09T10:00:00.000Z
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ItemPedidoSaida'
 *         __v:
 *           type: integer
 *           example: 0
 */

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Cria um novo pedido
 *     tags:
 *       - Pedidos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PedidoEntrada'
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PedidoSaida'
 *       400:
 *         description: Body invalido
 *       409:
 *         description: Pedido ja existe com esse numero
 *       500:
 *         description: Erro interno ao criar pedido
 */

/**
 * @swagger
 * /order/list:
 *   get:
 *     summary: Lista todos os pedidos
 *     tags:
 *       - Pedidos
 *     responses:
 *       200:
 *         description: Lista de pedidos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PedidoSaida'
 *       500:
 *         description: Erro interno ao listar pedidos
 */

/**
 * @swagger
 * /order/{id}:
 *   get:
 *     summary: Obtem um pedido pelo identificador do pedido
 *     tags:
 *       - Pedidos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Identificador do pedido (orderId)
 *         example: PED-001
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PedidoSaida'
 *       404:
 *         description: Pedido nao encontrado
 *       500:
 *         description: Erro interno ao buscar pedido
 */

/**
 * @swagger
 * /order/{id}:
 *   put:
 *     summary: Atualiza um pedido pelo identificador do pedido
 *     tags:
 *       - Pedidos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Identificador do pedido (orderId)
 *         example: PED-001
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PedidoEntrada'
 *     responses:
 *       200:
 *         description: Pedido atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PedidoSaida'
 *       400:
 *         description: Body invalido
 *       404:
 *         description: Pedido nao encontrado
 *       500:
 *         description: Erro interno ao atualizar pedido
 */

/**
 * @swagger
 * /order/{id}:
 *   delete:
 *     summary: Deleta um pedido pelo identificador do pedido
 *     tags:
 *       - Pedidos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Identificador do pedido (orderId)
 *         example: PED-001
 *     responses:
 *       204:
 *         description: Pedido removido com sucesso
 *       404:
 *         description: Pedido nao encontrado
 *       500:
 *         description: Erro interno ao deletar pedido
 */
