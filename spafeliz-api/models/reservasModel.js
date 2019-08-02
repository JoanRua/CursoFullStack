const Sequelize = require('sequelize');
const conn = require('../database/connection');

module.exports = conn.define('reservas', {
    id: {type: Sequelize.SMALLINT, primaryKey: true, autoIncrement: true},
    nombre: Sequelize.STRING,
    fecha: Sequelize.TIME,
    hora: Sequelize.TIME,
    email: Sequelize.STRING,
    idservicio: Sequelize.SMALLINT
}, {
    timestamps: false
})