angular.module("app", [
    "ngRoute"
]).config(function ($routeProvider) {
    $routeProvider
        .when("/contatos", { templateUrl: "/views/contatos/consultar.html" })
        .otherwise({redirectTo: '/pagina-nao-encontrada.html'});
});
