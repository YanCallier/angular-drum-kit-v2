angular.
module('drumApp')
.component('rythme', {
        templateUrl: 'drumKit/drum/rythme/rythme.html',
        controller: function rythmeController($location, $scope) {
            var vm = this;
            this.queries = $location.search();
            $scope.$on('$locationChangeStart', function() { 
                vm.queries = $location.search();
              });
        }
    },
);