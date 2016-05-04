(function() {

    angular
        .module('bootstrapApp', [
            'ngCordova'
        ]);

    angular
        .module('bootstrapApp')
        .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$cordovaGeolocation', '$cordovaDialogs'];

    function ApplicationController($cordovaGeolocation, $cordovaDialogs) {
        var vm = this;

        // Public
        vm.latitude = undefined;
        vm.longitude = undefined;

        vm.updateGeolocation = updateGeolocation;

        // Init
        activate();

        ////////

        function activate() {
            updateGeolocation();
        }

        function updateGeolocation() {
            $cordovaGeolocation.getCurrentPosition()
                .then(function(positionData) {
                    vm.latitude = positionData.coords.latitude;
                    vm.longitude = positionData.coords.longitude;
                })
                .catch(function(err) {
                    $cordovaDialogs.alert(err.message, 'Error!');
                });
        }
    }
})();
