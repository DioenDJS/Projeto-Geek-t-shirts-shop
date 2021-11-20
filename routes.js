const express = require("express");
const routes = express.Router();
const cors = require("cors");

routes.use(cors());

const MarcaController = require('./controllers/MarcaController')
const CamisetaController = require('./controllers/CamisetaController')
const UsuarioController = require('./controllers/UsuarioController')
const login = require("./middleware/login");

routes.get("/marcas", MarcaController.index)
      .get("/marcas_camisetas", MarcaController.marcas_camisetas);

routes.get("/camisetas", CamisetaController.index)
      .post("/camisetas", CamisetaController.store)
      .put("/camisetas/destaque/:id", CamisetaController.destaque)
      .get("/camisetas/destaques", CamisetaController.destaques)
      .get("/camisetas/pesq/:palavra", CamisetaController.search)
      .get("/camisetas/:id", CamisetaController.show)
      .delete("/camisetas/:id", CamisetaController.destroy)

routes.get("/usuarios", UsuarioController.index)
      .post("/usuarios", UsuarioController.store)
      .post("/login", UsuarioController.login);

module.exports = routes;
