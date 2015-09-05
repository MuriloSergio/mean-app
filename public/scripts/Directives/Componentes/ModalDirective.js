(function () {
    angular.module("app").directive("appModal", [
        ModalDirective
    ]);

    function ModalDirective() {
        return {
            restrict: "A",
            scope: {
                modal: "=appModal",
                show: "=appModalShow"
            },
            link: function ($scope, $element, attrs) {
                $scope.modal = {
                    show: false
                };

                $scope.$watch("show", function (show) {
                    if (angular.isUndefined(show)) return;
                    $scope.modal.show = show;
                });

                $scope.$watch("modal.show", function (show) {
                    var event = show ? "show" : "hide";
                    $element.modal(event);
                });

                $scope.$on("$routeChangeSuccess", angular.bind(this, function () {
                    $("body").children(".modal-backdrop.in").remove();
                    $("body").removeClass("modal-open");
                    $("body").css("padding-right", "0px");
                }));

                $element.on("hidden.bs.modal", function (e) {
                    $scope.modal.show = false;
                });

                $element.on("shown.bs.modal", function (e) {
                    $("body").css("padding-right", "0px");
                    $scope.modal.show = true;
                });
            }
        };
    }
})();
