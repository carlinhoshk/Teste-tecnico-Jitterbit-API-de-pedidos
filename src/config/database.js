const mongoose = require("mongoose")

async function conectarBanco() {

  try {
    // tenta abrir conexao com o mongo antes de iniciar a api
    await mongoose.connect(
      "mongodb://admin:admin123@localhost:27017/pedidos?authSource=admin"
    )

    console.log("MongoDB conectado")
  } catch (error) {
    // se nao conectar, sobe o erro para o servidor decidir encerrar o processo
    console.error("erro ao conectar no mongo", error)
    throw error
  }

}

module.exports = conectarBanco
