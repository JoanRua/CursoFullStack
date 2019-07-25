var serviceModel = require('./../models/serviceModel')


exports.services_all_get = function (req, res) {
    serviceModel.findAll({
      atributes:['id','name','description','cost','happy','image']
    }).then(data =>res.json)
    .catch( err => res.status(500).send('error') )
    //res.send('devolver todos los servicios del spa');
}

exports.services_detail_get = function (req, res) {
    res.send('devolver el servicios del spa con el id: ' + req.params.id);
    serviceModel.findByPk(req.params.id)({
      atributes:['id','name','description','cost','happy','image']
    }).then(data =>res.json)
    .catch( err => res.status(500).send('error') )
}


