(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', Controller);

Controller.$inject = ['$scope'];
function Controller($scope) {
  $scope.dishesList = "list comma separated dishes you usually have for lunch";
  $scope.dishesListModel = "";
  $scope.message = "";
  $scope.msgColor = "red";

  $scope.btnClicked=function(){
    // var splitedArr=$scope.dishesListModel.split(",");
    var len=countItems($scope.dishesListModel);
    setMessage(len);
    setColor(len);
  };
function setMessage(length){
  if(length==0){
    $scope.message="Please enter data first";
  }else if(length<=3){
    $scope.message="Enjoy!";
  }else{
    $scope.message="Too much!";
  }
}

function setColor(length){
  if(length==0){
    $scope.msgColor="red";
  }else{
    $scope.msgColor="green";
  }
}
  function countItems(items){
   var splitedArr=items.split(",");
   var cnt=0;
   for(var j=0;j<splitedArr.length;j++){
     var item=splitedArr[j];
     if(item.trim().length>0){
       cnt++;
     }
   }
   var length=splitedArr.length;
   return cnt;
 }
}
})();
