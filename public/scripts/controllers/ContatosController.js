(function () {
    angular.module("app").controller("ContatosController", [
        "Contatos",
        ContatosController
    ]);

    function ContatosController(Contatos) {
        this.filtro = '';

        this.consultar = function () {
            Contatos
                .cadastrados()
                .listar()
                .success(angular.bind(this, function (contatos) {
                    this.cadastrados = contatos.cadastrados;
                }))
                .error(angular.bind(this, function (status, erros) {
                    this.erros = erros;
                    console.log("Não foi possivel obter a lista de contatos");
                }));
        }

        this.novo = function () {
            this.contato = {};
            this.modal = { cadastro: { show: true } };
        }

        this.remover = function (contato) {
            Contatos
                .remover(contato)
                .success(angular.bind(this, function (info) {
                    console.info(info);
                    this.info = info;
                    this.consultar();
                    console.log("Removido com sucesso");
                }))
            .error(angular.bind(this, function (status, erros) {
                console.log("Não foi possivel remover");
            }));
        };

        this.salvar = function () {
            Contatos
               .salvar(this.contato)
               .success(angular.bind(this, function (mensagem) {
                   this.info = mensagem;
                   this.modal.cadastro.show = false;
                   this.consultar();
               }))
               .error(angular.bind(this, function (status, erros) {
                   this.erros = erros;
               }));
        };

        this.selecionar = function (contato) {
            this.contato = angular.copy(contato);
            this.modal = { cadastro: { show: true } };
        };

        this.visualizar = function (contato) {
            this.contato = angular.copy(contato);
            this.modal = { detalhes: { show: true } };
        }
    }
})();
