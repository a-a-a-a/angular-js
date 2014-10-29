/**
 * Created by Rubel on 8/25/14.
 */
(function(){

    var app = angular.module('githubViewer');


    app.controller('MainController', function($scope, $location, $log, github, $interval, $anchorScroll){

        var onUserComplete = function (data) {
            $scope.user = data;
            github.getRepos($scope.user)
                .then(onRepos, onError);

        };


        var onError = function (reason) {
            $scope.error = "Could not fetch the data"+reason;


        };

        var onRepos = function(data){

            $scope.repos = data;

            $location.hash("userDetails");
            $anchorScroll();// scrolls to a ided location

        };

        $scope.search = function(username){
            github.getUser(username)
                   .then(onUserComplete, onError);
        };


        $scope.username = "angular";
        $scope.message = "GitHub Viewer";
        $scope.repoSortOrder = "-stargazers_count";





    });



})();

