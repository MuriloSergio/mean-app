angular.module("app").service("ApiRequest", [
    "$http",
    function ($http) {

        this.json = function (url, data) {
            return $http({
                url: url,
                method: "POST",
                data: data
            });
        };
    }
]);