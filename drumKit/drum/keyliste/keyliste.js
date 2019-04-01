angular.
module('drumApp')
.component('keyListe', {
    templateUrl: 'drumKit/drum/keyliste/keyliste.html',
    bindings:{
      keysTab: '<',
      keysIn : '@',
      name : '@',
      alertKeyDown: '<'
      },
    controller: function ($location, $window) {

      this.$onInit = function (){
        var vm = this;
        if ($location.search()[vm.name]) vm.state = $location.search()[vm.name];
        else vm.state = "";

        this.alertKeyDown = function (key) {
          vm.state +=  key.letter;
          $location.search(vm.name, vm.state);
          $window.location.href = $location.absUrl();
        }

        this.keysIn = this.keysIn.split('');
        this.keysOut = [];

        for (i=0; this.keysIn[i];i++){

          for (j=0; this.keysTab[j];j++){

            if (this.keysIn[i] === this.keysTab[j].letter){
              this.keysOut[i] = this.keysTab[j];
            }
          }
        } 
      };
    }
  }
);