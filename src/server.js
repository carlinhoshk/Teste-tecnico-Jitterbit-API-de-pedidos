const app = require("./app")
const conectarBanco = require("./config/database")

const PORT = 3000

async function startServer() {
  try {
    // conecta primeiro no banco para evitar api no ar sem persistencia
    await conectarBanco()

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`)
    })
  } catch (error) {
    // se falhar na inicializacao, encerra com codigo de erro para facilitar diagnostico
    console.error("erro ao iniciar servidor", error)
    process.exit(1)
  }
}

startServer()
