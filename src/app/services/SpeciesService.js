app.factory('SpeciesService', function($http) {
    return $http.get('https://swapi.co/api/species/')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
});