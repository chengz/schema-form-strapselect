angular.module('schemaForm-strapselect', ['schemaForm', 'mgcrea.ngStrap']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var select = function(name, schema, options) {
      if (schema.type === 'string' && schema.format == 'strapselect') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'strapselect';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.string.unshift(select);

    var multiselect = function(name, schema, options) {
      if (schema.type === 'array' && schema.format == 'strapselect') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'strapmultiselect';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.array.unshift(multiselect);

    //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'strapselect',
    'directives/decorators/bootstrap/strap/strapselect.html');
    schemaFormDecoratorsProvider.createDirective('strapselect',
    'directives/decorators/bootstrap/strap/strapselect.html');
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'strapmultiselect',
    'directives/decorators/bootstrap/strap/strapmultiselect.html');
    schemaFormDecoratorsProvider.createDirective('strapmultiselect',
    'directives/decorators/bootstrap/strap/strapmultiselect.html');
  }]);
