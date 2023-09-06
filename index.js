const database = require("./db/db");
const express = require("express");
const Video = require("./models/filme")
const app = express();
const hand = require("express-handlebars");
const VideoRoutes = require("./routes/FilmesRoutes");
const VideosControllers = require("./controller/FilmesController")

//UTILIZAÇÃO DO HANDLEBARS
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({extended: true,}));
app.use(express.json());
app.use(express.static("public"));
//ROTAS
app.use("/", VideoRoutes);


try{
  database.sync().then(()=>{
  app.listen(9443, ()=> {console.log('Servidor Rodando')});
  })
}catch(erro){
  console.log("Erro ao sincronizar o banco de dados");
};