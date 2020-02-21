app.controller('FeaturesController', FeaturesController)

function FeaturesController($scope, ComputerService, ProcessorsService, $location) {

    //console.log(ProcessorsService);

    $scope.computerProcesador = ComputerService.computerProcesador.name;


    $scope.toggleComputer = function() {
        //ComputerService.toggleComputer();
        $location.path('/switch');
    }


    ProcessorsService.success(
        function(data) {
            console.log(data);
            $scope.ListProcesors = data.data;
        }
    );
    //$scope.ListRam = RamService;
    //$scope.ListHdd = HddService;




}