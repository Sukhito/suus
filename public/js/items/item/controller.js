app.controller('ItemCtrl',function($scope,ItemService,$stateParams,$http,$state){
    ItemService.getItem($stateParams.itemId).then(function(response){
        $scope.item = response.data;
    })

});