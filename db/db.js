const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './filmes.sqlite'
})

try{
  sequelize.authenticate();
  console.log("Banco de dados Conectado com Sucesso");
}catch(erro){
  console.log("erro ao conectar o banco de dados", erro);
}
module.exports = sequelize;
