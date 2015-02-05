angular.module('schemaForm').config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var select = function(name, schema, options) {
      if (schema.type === 'string') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'strapselect';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.string.unshift(select);

    var multiselect = function(name, schema, options) {
      if (schema.type === 'array') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'strapmultiselect';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.array.unshift(multiselect);

    var selectdynamic = function(name, schema, options) {
      if (schema.type === 'string') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'strapselectdynamic';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.string.unshift(selectdynamic);

    var multiselectdynamic = function(name, schema, options) {
      if (schema.type === 'array') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'strapmultiselectdynamic';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.array.unshift(multiselectdynamic);

    //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'strapselect',
    'directives/decorators/bootstrap/strap/strapselect.html');
    schemaFormDecoratorsProvider.createDirective('strapselect',
    'directives/decorators/bootstrap/strap/strapselect.html');

    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'strapmultiselect',
    'directives/decorators/bootstrap/strap/strapmultiselect.html');
    schemaFormDecoratorsProvider.createDirective('strapmultiselect',
    'directives/decorators/bootstrap/strap/strapmultiselect.html');

    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'strapselectdynamic',
        'directives/decorators/bootstrap/strap/strapselectdynamic.html');
    schemaFormDecoratorsProvider.createDirective('strapselectdynamic',
        'directives/decorators/bootstrap/strap/strapselectdynamic.html');

    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'strapmultiselectdynamic',
        'directives/decorators/bootstrap/strap/strapmultiselectdynamic.html');
    schemaFormDecoratorsProvider.createDirective('strapmultiselectdynamic',
        'directives/decorators/bootstrap/strap/strapmultiselectdynamic.html');

  }]);

angular.module('schemaForm').controller('StrapSelectController', ['$scope', '$http', function ($scope, $http) {


    $scope.items = [];

    $scope.fetchResult = function (options) {
        if (options.callback) {
            $scope.items = options.callback(options);
            console.log('items', $scope.items);
        }
        else if (options.http_post) {
            return $http.post(options.http_post.url, options.http_post.parameter).then(
                function (_data) {
                    $scope.items = _data.data;
                    console.log('items', $scope.items);
                },
                function (data, status) {
                    alert("Loading select items failed (URL: '" + String(options.http_post.url) +
                        "' Parameter: " + String(options.http_post.parameter) + "\nError: "  + status);
                });
        }
        else if (options.http_get) {
            return $http.get(options.http_get.url, options.http_get.parameter).then(
                function (_data) {
                    $scope.items = _data.data;
                    console.log('items', $scope.items);
                },
                function (data, status) {
                    alert("Loading select items failed (URL: '" + String(options.http_get.url) +
                        "\nError: "  + status);
                });
        }
        else if (options.async) {
            return options.async.call(options).then(
                function (_data) {
                    $scope.items = _data.data;
                    console.log('items', $scope.items);
                },
                function (data, status) {
                    alert("Loading select items failed(Options: '" + String(options) +
                        "\nError: "  + status);
                });
        }
    };

}]);


