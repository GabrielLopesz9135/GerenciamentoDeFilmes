const Filme = require('../models/filme');

module.exports = class FilmeController{

  static cadastrarFilme(req, res){
    res.render("cadastrar");
  }

  static async FilmeCreate(req, res){
     const filme = {
       link_img: req.body.link_img,
       titulo: req.body.titulo,
       diretor: req.body.diretor,
       genero: req.body.genero,
       link_sinopse: req.body.link_sinopse
     }
     await Filme.create(filme);
     res.send("Cadastro realizado com sucesso!");
    res.redirect("/");

  }
  
  static async listarFilmes(req, res){

    const filme = await Filme.findAll({raw:true})
    res.render('listar',{filme});
  }

  static async UpdateFilme(req, res){

    const id_filme = req.params.id_filme
    const filme = await Filme.findOne({where: {id_filme: id_filme}, raw:true});
    res.render("update", {filme})
  }

   static async FilmeUpdate(req, res) {
     const id_filme = req.body.id_filme
    const filme = {
       link_img: req.body.link_img,
       titulo: req.body.titulo,
       diretor: req.body.diretor,
       genero: req.body.genero,
       link_sinopse: req.body.link_sinopse
     }
     await Filme.update(filme, { where: { id_filme:id_filme }})
     res.redirect("/")
 }

  static async removerFilme(req, res){

    const id_filme = req.body.id_filme;
    await Filme.destroy({where:{id_filme:id_filme}})
  }
  
}