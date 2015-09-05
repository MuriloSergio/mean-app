(function () {
    angular.module("app").config([
        "$routeProvider",
        AppRoutes
    ]);

    function AppRoutes($routeProvider) {
        $routeProvider
        .when("/", { redirectTo: '/Contatos' })
        .when("/Contatos", { templateUrl: "/Views/Contatos/Consultar.html" })
        .when("/404", { templateUrl: "/Views/App/404.html" })
        .otherwise({ redirectTo: '/404' });
    }
})();
