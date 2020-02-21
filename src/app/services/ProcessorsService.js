app.factory('ProcessorsService', function($http) {
    return $http.get('http://demo6292426.mockable.io/processors')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
});