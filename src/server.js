const app = require("./app")
const conectarBanco = require("./config/database")

const PORT = 3000

async function startServer() {

  await conectarBanco()

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
  })

}

startServer()
