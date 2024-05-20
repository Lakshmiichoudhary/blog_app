const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('blog-app','root','Lakshmi123..',{
    dialect:'mysql',
    host:'localhost'
})

module.exports= sequelize