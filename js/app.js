/**
 * Created by Rubel on 8/27/14.
 */
(function(){

    var app = angular.module('githubViewer', ["ngRoute" ]);

    app.config(function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl:"main.html",
                controller:"MainController"
            })
            .otherwise({redirectTo:"/main"});


    });



}());