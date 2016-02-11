var app = angular.module('BlankApp', ['ngMaterial']);


//
// Main directive which takes data and set proper values in svg filter
//
app.directive('photoMatrix', function ($compile) {
    return {
        restrict: 'E',
        templateUrl: 'filter.svg',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {

          var temp = element[0].querySelector('#matrixer');
          var matrix = angular.element(temp)


          scope.init = function() {
            scope.ylen = ngModel.$viewValue.length
            scope.xlen = ngModel.$viewValue[0].length
            scope.value = ""

            for (var i=0; i<scope.ylen; i++){
              for (var j=0; j<scope.xlen; j++){
                scope.value += ngModel.$viewValue[i][j]
                scope.value += " "
              }
            }
            scope.dimer = scope.xlen.toString() + ',' + scope.ylen.toString()
            matrix.attr("order", scope.dimer);
            matrix.attr("kernelMatrix", scope.value);


          }

          ngModel.$render(function(){
            scope.init()
          })


          scope.$watch(attrs.ngModel, function() {
            scope.init()
          }, true);


        }
    }
});




app.controller('AppCtrl', function($scope, $timeout){
  // Matrix size options
  $scope.select = [1,2,3,4,5,6,7,8,9]

  $scope.axis = {
    x: 3,
    y: 3
  }

  $scope.init_values = function(){
    $scope.values = []
    for(var y = 0; y < $scope.axis.y; y++){
      $scope.values[y] = [];
      for(var x = 0; x < $scope.axis.x; x++){
        $scope.values[y][x] = -1;
        if ((x==1) && (y==1)){
          $scope.values[y][x] = 9
        }
      }
    }

    $scope.array_x = []
    $scope.array_y = []

    for (var i=0; i<$scope.axis.x; i++){
      $scope.array_x[i] = i
    }
    for (var i=0; i<$scope.axis.y; i++){
      $scope.array_y[i] = i
    }

  }

  $scope.init_values()

})
