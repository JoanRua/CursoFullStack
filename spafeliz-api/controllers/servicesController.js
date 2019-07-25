var serviceModel = require('./../models/serviceModel')


exports.services_all_get = function (req, res) {
    serviceModel.findAll({}).then(data => res.json(data) )
    .catch( err => res.status(500).send('error') )
    //res.send('devolver todos los servicios del spa');
}

exports.services_detail_get = function (req, res) {
   // res.send('devolver el servicios del spa con el id: ' + req.params.id);
    serviceModel.findAll({where: {id: req.params.id}})({
      atributes:['id','name','description','cost','happy','image']
    }).then(data =>res.json(data))
    .catch( err => res.status(500).send('error') )
}


