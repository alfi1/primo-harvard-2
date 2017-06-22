// 22/06/2017 Fully working

// 20/06/2017.  Get the appropriate bibliographic details and format a Harvard citation in the style that Sussex reccomends

//[Author - Surname, Initials.] [Year of publication - placed in round brackets] [Book title. - placed in itialics] [Place of publication: publisher,] [pp. X-X for page numbers.]
//Example: Walsh, A.W. (2012) The treatment of children. London: Collins Books, pp. 83-95.

//21/06/2017 - Test formatting consistent with the Primo styling
//22/06/2017 - Displays only if the item is a book


  var app = angular.module('viewCustom', ['angularLoad']);

   app.component('prmActionContainerAfter', {
	
	 
	   bindings: { parentCtrl: '<' },
	   controller: 'HarvardCitation',
	   	   
	   // This is the line that does what I need!! 22/06/2017
	   template: '<br><br><div layout="row" layout-align="center center" class="layout-align-center-center layout-row" ng-show="$ctrl.getFormat() != null"><h4 class="section-title md-title light-text">Harvard Citation</h4><md-divider flex="" class="md-primoExplore-theme flex"></md-divider></div><div ng-show="$ctrl.getFormat() != null"><br>{{$ctrl.getAuthor()}} ({{$ctrl.getYear()}}) <i>{{$ctrl.getTitle()}}</i>. {{$ctrl.getPublisher()}}.</p></div>'
	   
  
   });
   
app.controller('HarvardCitation', [function($scope){

var vm = this;

//Title
vm.getTitle = getTitle;
 
 function getTitle() {

 return vm.parentCtrl.item.pnx.display.title[0]	 ;

}

// Author
vm.getAuthor = getAuthor;
 
 function getAuthor() {

 var fullauthor = vm.parentCtrl.item.pnx.addata.au[0]	 ;
 
 // You need to cut this down to surname, initials
 var res = fullauthor.split(",");
 
 var surname = res[0];
 var firstName = res[1];
 var initial = firstName.substring(1,2);
 
 var name = surname + ', ' + initial + '.';
 
 return name;

}

// Publication year

vm.getYear = getYear;
 
 function getYear() {

return  vm.parentCtrl.item.pnx.addata.date[0]	 ;

}

// Publisher

vm.getPublisher = getPublisher;
 
 function getPublisher() {

return vm.parentCtrl.item.pnx.display.publisher[0]	 ;

}


// Is it a book?  Otherwise we aren't interested

vm.getFormat = getFormat;
 
function getFormat() {
 
var itemFormat = vm.parentCtrl.item.pnx.addata.format[0]	 ;

if (itemFormat == 'book')
		{
		return itemFormat;
		}
}

		}]);
