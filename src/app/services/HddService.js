app.factory('HddService', function($http) {
    return $http.get('https://demo6292426.mockable.io/hddList')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
});