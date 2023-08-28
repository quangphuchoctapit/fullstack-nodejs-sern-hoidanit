const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hoidanit', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

let connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('connection has been established successfully')
    } catch (e) {
        console.error(e)
    }
}

module.exports = connectDB;