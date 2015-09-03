module.exports = function(){
  var contatos = {};
  var contatos = [
    { _id: 1, nome: 'Contato 1', email: 'contato1@mean.com' },
    { _id: 2, nome: 'Contato 2', email: 'contato2@mean.com' },
    { _id: 3, nome: 'Contato 3', email: 'contato3@mean.com' },
    { _id: 4, nome: 'Contato 4', email: 'contato4@mean.com' },
    { _id: 5, nome: 'Contato 5', email: 'contato5@mean.com' },
  ];

  contatos.cadastrados = function(req, res){
    res.json(contatos);
  };

  contatos.comId = function(req, res){
    var idContato = req.params.id;
    var contato = contatos.filter(function(contato){
      return contato._id == idContato;
    })[0];

    contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
  }

  return contatos;
}
