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
