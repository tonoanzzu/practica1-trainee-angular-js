app.factory('RamService', function($http) {
    return $http.get('http://demo6292426.mockable.io/ramMemory')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
});