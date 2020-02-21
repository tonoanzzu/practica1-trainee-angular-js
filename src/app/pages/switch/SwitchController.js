app.controller('SwitchController', SwitchController);

function SwitchController($scope, ComputerService, $location) {
    $scope.name = "Jesus";
    $scope.toggleComputer = function() {
        ComputerService.toggleComputer();
        $location.path('/features');
    }
}