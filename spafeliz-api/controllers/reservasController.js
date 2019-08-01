var reservaModel = require("../models/reservasModel");

module.exports = {
  reservas_all_get: function(req, res) {
    reservaModel
      .findAll({
        attributes: [
          "id",
          "nombre_cliente",
          "fecha",
          "hora",
          "email",
          "id_servicio"
        ]
      })
      .then(data => res.json(data))
      .catch(err => res.status(500, err));
  },
  reservas_detail_get: function(req, res) {
    var Id = Number(req.params.id);
    reservaModel
      .findByPk(Id, {
        attributes: [
          "id",
          "nombre_cliente",
          "fecha",
          "hora",
          "email",
          "id_servicio"
        ]
      })
      .then(data => {
        res.json(data);
      })
      .catch(err => res.status(500).send("error"));
  },
  reservas_create: function(req, res) {
    reservaModel
      .create(req.body)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).send(err);
      });
  }
};
