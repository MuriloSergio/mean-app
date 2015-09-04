angular.module("app").controller("ContatosController",
function () {

    this.total = 0;

    this.filtro = '';

    this.incrementar = function () {
        this.total++;
    };

    this.iniciar = function () {
        this.cadastrados = [
            { _id: 1, nome: 'Contato 1', email: 'contato1@mean.com' },
            { _id: 2, nome: 'Contato 2', email: 'contato2@mean.com' },
            { _id: 3, nome: 'Contato 3', email: 'contato3@mean.com' },
            { _id: 4, nome: 'Contato 4', email: 'contato4@mean.com' },
            { _id: 5, nome: 'Contato 5', email: 'contato5@mean.com' },
        ];
    };
});
