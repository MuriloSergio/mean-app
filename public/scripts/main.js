angular.module("app", [
    "ngRoute"
]).config(function ($routeProvider) {
    $routeProvider
        .when("/", { redirectTo: '/contatos' })
        .when("/contatos", { templateUrl: "/views/contatos/consultar.html" })
        .when("/404", { templateUrl: "/views/app/404.html" })
        .otherwise({ redirectTo: '/404' });
});
