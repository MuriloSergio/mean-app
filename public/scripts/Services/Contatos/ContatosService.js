(function () {
    angular.module("app").service("Contatos", [
        "ApiRequest",
        ContatosService
    ]);

    function ContatosService(ApiRequest) {
        var url = "";
        var contato;

        this.cadastrados = function () {
            url = "/contatos/cadastrados";
            contato = {};
            return this;
        }

        this.remover = function (contato) {
            url = "/contatos/remover";
            return ApiRequest.json(url, {
                _id: contato._id
            });
        }

        this.salvar = function (contato) {
            url = contato._id ? "/contatos/atualizar" : "/contatos/cadastrar";
            return ApiRequest.json(url, contato);
        }

        this.listar = function () {
            return ApiRequest.json(url);
        }
    }
})();