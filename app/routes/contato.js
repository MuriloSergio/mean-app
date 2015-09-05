module.exports = function (App) {
    var Contatos = App.Controllers.Contato;

    App.route('/contatos/atualizar').post(Contatos.atualizar);
    App.route('/contatos/cadastrados').post(Contatos.cadastrados);
    App.route('/contatos/remover').post(Contatos.remover);
    App.route('/contatos/cadastrar').post(Contatos.cadastrar);
}
