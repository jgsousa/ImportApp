angular.module(importApp).service('ProfileServices', ['$http', '$q', function ($http, $q) {

    var apiPath = '/api/profile/';
    this.getAllProfiles = function () {
        return $http.get(apiPath).
            then(function (response) {
                return response.data;
            });
    };

    this.getProfileForId = function (id) {
        return $http.get(apiPath + id).
            then(function (response) {
                return response.data;
            }, function (response) {
                $q.reject(response.data);
            });
    };

    this.createProfile = function (data) {
        return $http.post(apiPath, data, {}).
            then(function (response) {
                return response.data;
            });
    };

    this.updateProfile = function (id, data) {
        return $http.put(apiPath + id, data, {}).
            then(function (response) {
                return response.data;
            });
    };

    this.deleteProfile = function (id) {
        return $http.delete(apiPath + id, {}).
            then(function (response) {
                return id;
            });
    };

}]);
