

const Sequelize = require('sequelize')
const conn = new Sequelize('DaWy638dOU','DaWy638dOU','OlAMYb0pmW',{
    host:'remotemysql.com',
    dialect:'mysql'
})

conn.authenticate()
.then(()=>{
    console.log('connection ok with database');
})
.catch((err)=> console.log('connection error with database',err));

/*
Username: DaWy638dOU

Database name: DaWy638dOU

Password: OlAMYb0pmW

Server: remotemysql.com

Port: 3306
*/

module.exports = conn;