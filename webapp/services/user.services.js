angular.module('importApp').service('UserServices', ['$http', '$q', function($http, $q){

    var apiPath = '/api/users/';
    this.getAllUsers = function () {
        return $http.get(apiPath).
            then(function(response){
                return response.data;
            });
    };

    this.getUserForId = function (id) {
        return $http.get(apiPath + id).
            then(function(response){
                return response.data;
            },function(response){
                $q.reject(response.data);
            });
    };

    this.createUser = function (data) {
        return $http.post(apiPath, data, {}).
            then(function(response){
                return response.data;
            });
    };

    this.updateUser = function (id, data) {
        return $http.put(apiPath + id, data, {}).
            then(function(response){
                return response.data;
            });
    };

    this.deleteUser = function (id) {
        return $http.delete(apiPath + id, {}).
            then(function(response){
                return id;
            });
    };

}]);