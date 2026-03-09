const mongoose = require("mongoose")

async function conectarBanco() {

  try {

    await mongoose.connect(
      "mongodb://admin:admin123@localhost:27017/pedidos?authSource=admin"
    )

    console.log("MongoDB conectado")

  } catch (error) {

    console.error("Erro ao conectar no Mongo", error)

  }

}

module.exports = conectarBanco

