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
