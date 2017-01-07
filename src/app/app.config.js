;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app')
        .config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/todo');
        $stateProvider.state("todo", {
            url: "/todo",
            controller: "TodoController as todo",
            // this is the place where to resolve dynamic template
            templateProvider: function($templateCache) {
                // simplified, expecting that the cache is filled
                // there should be some checking... and async $http loading if not found
                return $templateCache.get('components/todo/todo.template.html');
            }
        })
    }
}(window, angular, undefined));
