angular.module('Recipes', []).factory('Recipes', ['$http', function($http) {

	var postMessage = function(){
        console.log("Post");
        this.$http.post('http://localhost:3000', {test: 'test'});
    }

}]);