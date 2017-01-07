;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app', ['app.templates', 'ui.router', 'app.todo'])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.todo', [])
}(window, angular, undefined));

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

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.todo')
        .controller('TodoController', todoController);
    todoController.$inject = [];

    function todoController() {
        var vm = this;
        vm.done = done;

        function done(item) {
            alert(item + " is done!")
        }
    }
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.todo')
        .directive('todoItemDirective', todoItemDirective);
    todoItemDirective.$inject = [];

    function todoItemDirective() {
        return {
            restrict: "E",
            scope: {
                done: "&"
            },
            controller: function todoItemDirectiveController() {
                var vm = this;
                vm.item = "";
            },
            controllerAs: 'todoItemDirectiveController',
            template: '<form>' +
                '<div class="form-group">' +
                '<input type="text" class="form-control" placeholder="Completed Item Name" ng-model="todoItemDirectiveController.item" />' +
                '</div>' +
                '<div class="form-group">' +
                '<button class="btn btn-primary" ng-click="done({item:todoItemDirectiveController.item})">Submit</button>' +
                '</div>' +
                '</form>'
        }
    }
}(window, angular, undefined));
