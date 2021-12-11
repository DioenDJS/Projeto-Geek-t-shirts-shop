const express = require("express");
const routes = express.Router();
const cors = require("cors");

routes.use(cors());

const MarcaController = require('./controllers/MarcaController')
const CamisetaController = require('./controllers/CamisetaController')
const UsuarioController = require('./controllers/UsuarioController')
const LikeController = require('./controllers/LikeController')
const login = require("./middleware/login");

routes.get("/marcas", MarcaController.index)
      .get("/marcas_camisetas", MarcaController.marcas_camisetas);

routes.get("/camisetas", CamisetaController.index)
      .post("/camisetas", CamisetaController.store)
      .put("/camisetas/destaque/:id", CamisetaController.destaque)
      .put("/camisetas/like/:id", CamisetaController.like)
      .put("/camisetas/dislike/:id", CamisetaController.dislike)
      .get("/camisetas/destaques", CamisetaController.destaques)
      .get("/camisetas/pesq/:palavra", CamisetaController.search)
      .get("/camisetas/:id", CamisetaController.show)
      .delete("/camisetas/:id", CamisetaController.destroy)

routes.get("/usuarios", UsuarioController.index)
      .post("/usuarios", UsuarioController.store)
      .post("/login", UsuarioController.login);

routes.post("/likes", LikeController.store)
      .get("/likes/pesq/:usuario_id/:camiseta_id", LikeController.pesq)
      
module.exports = routes;
