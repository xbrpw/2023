angular.module('app', ['ui.bootstrap', 'ngAnimate'])
.factory('sortable', ['$filter', '$rootScope', function($filter, $rootScope){

  return function (scope, data, itemsPerPage, initSortingOrder) {

    
    scope.sortingOrder = initSortingOrder;
    scope.reverse = false;
    scope.filteredItems = [];
    scope.groupedItems = [];
    scope.itemsPerPage = itemsPerPage;
    scope.pagedItems = [];
    scope.currentPage = 1;
    scope.items = data;
    scope.maxSize = 5;

    var searchMatch = function (haystack, needle) {
          if (!needle) {
              return true;
          }
          return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
      };


      // init the filtered items
      scope.search = function () {

          scope.filteredItems = $filter('filter')(scope.items, $rootScope.query);

          // take care of the sorting order
        if (scope.sortingOrder !== '') {
            scope.filteredItems = $filter('orderBy')(scope.filteredItems, scope.sortingOrder, scope.reverse);
        }

          scope.currentPage = 1;

          // now group by pages
          scope.groupToPages();

          // reset the total items for the pagination buttons
          scope.totalItems = scope.filteredItems.length;
      };
      

      // calculate page in place
      scope.groupToPages = function () {
          scope.pagedItems = [];
          
          for (var i = 0; i < scope.filteredItems.length; i++) {
              if (i % scope.itemsPerPage === 0) {
                  scope.pagedItems[Math.floor(i / scope.itemsPerPage)] = [ scope.filteredItems[i] ];
              } else {
                  scope.pagedItems[Math.floor(i / scope.itemsPerPage)].push(scope.filteredItems[i]);
              }
          }
      };
      

      scope.range = function (start, end) {
          var ret = [];
          if (!end) {
              end = start;
              start = 0;
          }
          for (var i = start; i < end; i++) {
              ret.push(i);
          }
          return ret;
      };


      // functions have been described process the data for display
      scope.search();


      // change sorting order
      scope.sort_by = function(newSortingOrder) {
          if (scope.sortingOrder == newSortingOrder)
              scope.reverse = !scope.reverse;

          scope.sortingOrder = newSortingOrder;

          // call search again to make sort affect whole query
          scope.search();
      };

      scope.sort_by(initSortingOrder);
      scope.totalItems = scope.filteredItems.length;
  }

}])
  .controller('main', [ '$scope', '$rootScope', 'sortable', function($scope, $rootScope, sortable) {
    
    $rootScope.query = '';
    
    $scope.gridToggle = true;

    $scope.onQueryChange = function(val){
       $rootScope.query = val;
       $scope.search();
    };
    
    var items = [
      { 'icon' : 'm-munkey',  'name' : 'A Munkey Page',          'date' : 'Yesterday at Noon', 'user' : { 'name' : 'Munkey',  'color' : '#07D5E5'} },
      { 'icon' : 'm-bug',     'name' : 'Mobile Splash Page',     'date' : 'Yesterday at 4:30pm', 'user' : { 'name' : 'Munkey',  'color' : '#07D5E5'} },
      { 'icon' : 'm-photo',   'name' : 'Some Other Site',        'date' : 'Today at 3:35am', 'user' : { 'name' : 'Someone', 'color' : '#456183'} },
      { 'icon' : 'm-desktop', 'name' : 'Jerry\'s Blog',          'date' : 'Thursday at 7:15pm', 'user' : { 'name' : 'Jerry',   'color' : '#4677A7'} },
      { 'icon' : 'm-form',    'name' : 'Ape\'s Capture Form',    'date' : 'Today at Noon', 'user' : { 'name' : 'Ape',     'color' : '#09ABC5'} },
      { 'icon' : 'm-phone',   'name' : 'Some Mobile Site',       'date' : 'Thursday at 1:27pm', 'user' : { 'name' : 'Someone', 'color' : '#456183'} },
      { 'icon' : 'm-bell',    'name' : 'Fish\'s Wordpress Site', 'date' : 'Yesterday at Noon', 'user' : { 'name' : 'Fish',    'color' : '#1CB7BB'} },
      { 'icon' : 'm-group',   'name' : 'Kitty Kat Kapture Form', 'date' : 'Wednesday at 7:15pm', 'user' : { 'name' : 'Kitty',   'color' : '#1D9D9D'} }
    ];
    
    sortable($scope, items, 6, 'updated_at');
    
  }]);