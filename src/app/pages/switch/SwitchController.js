app.controller('SwitchController', SwitchController);

function SwitchController($scope, PersonajeService, $location) {
    $scope.togglePersonaje = function() {
        PersonajeService.togglePersonaje();
        $location.path('/features');
    }
    $scope.changeViewtoFeatures = function() {
        $location.path('/features');
    }
    $scope.changeViewtoSwitch = function() {
        $location.path('/switch');
    }
}