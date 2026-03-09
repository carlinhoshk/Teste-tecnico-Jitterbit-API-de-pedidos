function mapearPedido(dto, orderIdSobrescrito) {

  return {

    orderId: orderIdSobrescrito || dto.numeroPedido,
    value: dto.valorTotal,
    creationDate: dto.dataCriacao,

    items: (dto.items || []).map(item => ({
      productId: Number(item.idItem),
      quantity: item.quantidadeItem,
      price: item.valorItem
    }))
  }

}
module.exports = {
  mapearPedido
}
