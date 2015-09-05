module.exports = function () {
    var contatos = {};

    var resultado = {
        cadastrados: [
          { _id: 1, nome: 'Contato 1', email: 'contato1@mean.com' },
          { _id: 2, nome: 'Contato 2', email: 'contato2@mean.com' },
          { _id: 3, nome: 'Contato 3', email: 'contato3@mean.com' },
          { _id: 4, nome: 'Contato 4', email: 'contato4@mean.com' },
          { _id: 5, nome: 'Contato 5', email: 'contato5@mean.com' },
        ]
    };

    contatos.atualizar = function (req, res) {
        var contatoAtualizar = req.body;

        resultado.cadastrados = resultado.cadastrados.map(function (contato) {
            if (contato._id === contatoAtualizar._id) {
                contato = contatoAtualizar;
            }
            return contato;
        });

        res.status(200).json("Contato atualizado com sucesso");
    }

    contatos.cadastrados = function (req, res) {
        res.json(resultado);
    };

    contatos.cadastrar = function (req, res) {
        var contato = req.body;
        contato._id = Math.max.apply(Math, resultado.cadastrados.map(function (c) { return c._id; })) + 1;
        resultado.cadastrados.push(contato);

        contato ? res.status(200).json("Contato salvo com sucesso") : res.status(404).send('Erro ao salvar');
    }

    contatos.remover = function (req, res) {
        var idContato = req.body._id;

        resultado.cadastrados = resultado.cadastrados.filter(function (contato) {
            return contato._id != idContato;
        });

        res.status(200).json("Contato removido com sucesso");
    }

    return contatos;
}
