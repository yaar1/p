const {Sequelize}=require('sequelize');
const dbConfig=require('./config');

//xammpp  cd c:/xampp/mysql/bin
//orr
// cd c:/Program Files/MySQL
//dir
//cd MySQL Server 8.0/bin
//mysql -u root -p
const sequelize=new Sequelize(dbConfig.dbName,dbConfig.user,dbConfig.password,{
    host:dbConfig.host,
    dialect:dbConfig.dialect
})

sequelize.authenticate().then(()=>{
    console.log('Connected To Database');
}).catch((error)=>{
    console.log(error.message);
})
sequelize.sync({force:false}).then(()=>{
    console.log('Synced to Database')
}).catch((error)=>{
    console.log(error.message);
})

module.exports=sequelize;