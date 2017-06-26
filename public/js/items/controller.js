app.controller('ItemsCtrl',function($scope,ItemService){
    ItemService.getItems().then(
        function(response){
            $scope.items = response.data;
        }
    )

    $scope.selectItem = function(){
    	alert("asd");
    }
})