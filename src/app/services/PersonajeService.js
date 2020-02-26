app.factory('PersonajeService', function() {
    return {
        personajeStatus: false,
        personajeData: {
            "name": "Luke Skywalker"
        },
        personajeStarShips: {
            "name": "X-wing"
        },
        personajeVehicles: {
            "name": "Snowspeeder"
        },
        personajeSpecies: {
            "name": "Wookie"
        },
        personajePlanets: {
            "name": "Tatooine"
        },
        togglePersonaje: function() {
            this.personajeStatus = !this.personajeStatus
                //console.log("Estado actual de this.personajeStatus = " + this.personajeStatus);
        },
        getPersonajeStatus: function() {
            return this.personajeStatus;
        }
    }
});