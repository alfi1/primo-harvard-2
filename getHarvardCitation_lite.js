// Add a link to the appropiate Harvard styling for Sussex
// TG 27/06/2017

  var app = angular.module('viewCustom', ['angularLoad']);

   app.component('prmActionContainerAfter', {
	
	   bindings: { parentCtrl: '<' },
	   template: '<br><div>For guidance on referencing this item visit the <a href="http://www.sussex.ac.uk/skillshub/?id=379">Skills Hub</a></div>'
   
  
   });
