const express = require('express');

const pedidoRoutes = require("./routes/pedidoRoutes");
const setupSwagger = require("./config/swagger");

const app = express();

app.use(express.json());
setupSwagger(app);

app.use("/order", pedidoRoutes);

module.exports = app;
