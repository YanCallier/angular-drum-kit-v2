angular.
module('drumApp')
.component('rythme', {
        templateUrl: 'drumKit/drum/rythme/rythme.html',
        // bindings:{
        //     sounds: '<'
        //   },
        controller: function rythmeController($location, $scope) {
            var vm = this;
            this.queries = $location.search();
            $scope.$on('$locationChangeStart', function() { 
                vm.queries = $location.search();
              });
            // this.$onChanges = function (){
            //     this.sound = $location.hash().split('');
            //     this.soundsTable =  $location.hash().split('')
                this.player = function (){
                    //var count=0;
                    // for (let sound of this.soundsTable ) {
                    //     sound = sound.trim();
    
                    //     setTimeout(function (){
                    //         if (sound != ""){
                    //             var audio = new Audio('drumKit/sounds/' + sound + '.wav');
                    //             audio.play();
                    //         }
                    //     },count*200);
                    //     count +=1;
                    // }   
                }
            //}
        }
    },
);