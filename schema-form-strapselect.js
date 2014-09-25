angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/strap/strapmultiselect.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\">\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <div class=\"form-group\">\n    <button type=\"button\" class=\"btn btn-default\" ng-model=\"$$value$$\" data-placeholder=\"{{form.placeholder || (\'placeholders.select\' | translate)}}\" data-multiple=\"1\" data-html=\"1\" ng-options=\"item.value as item.label for item in form.schema.enum\" bs-select></button>\n    <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n  </div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/strap/strapselect.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\">\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <div class=\"form-group\">\n    <button type=\"button\" class=\"btn btn-default\" ng-model=\"$$value$$\" data-placeholder=\"{{form.placeholder || (\'placeholders.select\' | translate)}}\" data-html=\"1\" ng-options=\"item.value as item.label for item in form.schema.enum\" bs-select></button>\n    <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n  </div>\n</div>\n");}]);
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
