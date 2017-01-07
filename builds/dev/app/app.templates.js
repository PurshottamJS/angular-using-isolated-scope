(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/todo/todo.template.html',
    '<div class="container">\n' +
    '    <div class="page-header">\n' +
    '        <h1>Angularjs Using Isolated Scope</h1>\n' +
    '    </div>\n' +
    '    <todo-item-directive done="todo.done(item)"></todo-item-directive>\n' +
    '</div>\n' +
    '');
}]);
})();
