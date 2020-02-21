app.factory('ComputerService', function() {
    return {
        computerStatus: false,
        computerProcesador: {
            "overclock": false,
            "releaseDate": "Fri Aug 07 1981 21:21:18 GMT+0000 (UTC)",
            "cores": 4,
            "price": "4337.79",
            "architecture": "32bit",
            "provider": "intel Patito",
            "ramMaxMemory": "126GB",
            "serial": 8888,
            "name": "patito core"
        },

        computerRam: {
            "speed": "1600Mhz",
            "releaseDate": "Mon Feb 06 1978 13:48:04 GMT+0000 (UTC)",
            "price": "2441.74",
            "architecture": "gigabite",
            "ramMemory": "4GB",
            "serial": 8888,
            "name": "ram-Patito-Simple"
        },
        //computerTarjetaGrafica: "Jesus",
        computerHDD: {
            "releaseDate": "Sun Sep 29 2013 16:58:13 GMT+0000 (UTC)",
            "size": "256GB",
            "price": "3615.35",
            "speed": "ssd",
            "provider": "Patito",
            "serial": 8888
        },

        toggleComputer: function() {
            console.log("ejecucion de toogleComputer");
            this.computerStatus = !this.computerStatus
            console.log("Valor" + this.computerStatus);
        },
        getComputerStatus: function() {
            return this.computerStatus;
        }
    }
});