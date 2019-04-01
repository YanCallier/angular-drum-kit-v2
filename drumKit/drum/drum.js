angular.
  module('drumApp').
  component('drum', {
    templateUrl: 'drumKit/drum/drum.html',
    controller: function drumController() {

      var vm = this;

      this.keys = [
        {key:65, letter:'A', sound:'clap'},
        {key:90, letter:'Z', sound:'tink'},
        {key:69, letter:'E', sound:'kick'},
        {key:82, letter:'R', sound:'openhat'},
        {key:84, letter:'T', sound:'boom'},
        {key:89, letter:'Y', sound:'ride'},
        {key:85, letter:'U', sound:'snare'},
        {key:73, letter:'I', sound:'tom'},
      ]
    }     
  })
