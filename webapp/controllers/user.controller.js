angular.module('importApp')
    .controller('usersController', ['$scope', 'ngToast', 'UserServices', '$modal',
        function ($scope, ngToast, UserServices, $modal) {
        UserServices.getAllUsers().then(function (data) {
            $scope.users = data;
        }, function (data) {

        });

        var deleteUser = function(code){
                return UserServices.deleteUser($scope.selected._id);
            },
            removeUserFromTable = function(){
                var index = $scope.users.indexOf($scope.selected);
                if (index > -1) {
                    $scope.users.splice(index, 1);
                }
            };

        $scope.requestDeleteSelected = function (user) {
            $scope.selected = user;
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: '/modals/popToConfirm.html',
                controller: 'popToConfirmController',
                size: 'sm',
                resolve: {
                    texto: function () {
                        return "Deseja apagar este utilizador?";
                    }
                }
            });

            modalInstance.result.
                then(deleteUser).
                then(removeUserFromTable);
        };
    }])

    .controller('userDetailController', ['$scope', 'UserServices', '$routeParams', '$location', 'ngToast',
        function ($scope, UserServices, $routeParams, $location, ngToast) {
        UserServices.getUserForId($routeParams.id).then(function (data) {
            if (data) {
                $scope.userData = data;
            } else {
                $location.path('/users/');
            }
        }, function (err) {
        });

        $scope.gravar = function () {

            if ($scope.modificarForm.$valid) {
                UserServices.updateUser($routeParams.id, $scope.userData).then(function (data) {
                    ngToast.create('Gravado com sucesso');
                }, function (err) {
                });
            }
        };
    }]);