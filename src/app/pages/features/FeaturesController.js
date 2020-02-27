app.controller('FeaturesController', FeaturesController)

function FeaturesController($scope, PersonajeService, StarShipsService, PlanetsService, SpeciesService, VehiclesService, $location) {
    $scope.personajeStatus = PersonajeService.personajeStatus
    $scope.personajeNombre = PersonajeService.personajeData.name;
    $scope.personajeStarShips = PersonajeService.personajeStarShips.name;
    $scope.personajeVehicles = PersonajeService.personajeVehicles.name;
    $scope.personajeSpecies = PersonajeService.personajeSpecies.name;
    $scope.personajePlanets = PersonajeService.personajePlanets.name;

    $scope.personajeStatusFeature = PersonajeService.personajeStatus;

    $scope.togglePersonaje = function() {
        PersonajeService.togglePersonaje();
    }

    $scope.changeViewtoSwitch = function() {
        $location.path('/switch');
    }

    $scope.updateSpeciesSelect = function() {

        $scope.personajeSpecies = $scope.SpeciesServiceList[$scope.SpeciesSelect].name
        PersonajeService.personajeSpecies.name = $scope.SpeciesServiceList[$scope.SpeciesSelect].name
    }

    $scope.updateStarShipsSelect = function() {

        $scope.personajeStarShips = $scope.StarShipsList[$scope.StarShipsSelect].name
        PersonajeService.personajeStarShips.name = $scope.StarShipsList[$scope.StarShipsSelect].name
    }

    $scope.updateVehiclesSelect = function() {

        $scope.personajeVehicles = $scope.VehiclesServiceList[$scope.VehicleSelect].name
        PersonajeService.personajeVehicles.name = $scope.VehiclesServiceList[$scope.VehicleSelect].name
    }

    $scope.updatePlanetsSelect = function() {

        $scope.personajePlanets = $scope.PlanetServiceList[$scope.PlanetsSelect].name
        PersonajeService.personajePlanets.name = $scope.PlanetServiceList[$scope.PlanetsSelect].name
    }

    PlanetsService.success(
        function(data) {
            //console.log(data.results);
            $scope.PlanetServiceList = data.results;
        }
    );

    StarShipsService.success(
        function(data) {
            //console.log(data.results);
            $scope.StarShipsList = data.results;
        }
    );

    SpeciesService.success(
        function(data) {
            //console.log(data.results);
            $scope.SpeciesServiceList = data.results;
        }
    );

    VehiclesService.success(
        function(data) {
            //console.log(data.results);
            $scope.VehiclesServiceList = data.results;
        }
    );

}