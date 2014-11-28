/*global angular */
'use strict';

/**
 * The main app module
 * @name app
 * @type {angular.Module}
 */
var lightApp = angular.module('lightApp', ['schemaForm', 'pascalprecht.translate'])
.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
    lightApp.controller = $controllerProvider.register;
    lightApp.directive  = $compileProvider.directive;
    lightApp.filter     = $filterProvider.register;
    lightApp.factory    = $provide.factory;
    lightApp.service    = $provide.service;
}])
.controller('SelectController', function($scope){
  $scope.schema = {
    type: 'object',
    title: 'Select',
    properties: {
      name: {
        title: 'Name',
        type: 'string'
      },
      select: {
        title: 'Single Select',
        type: 'string',
        format: 'strapselect',
        description: 'Only single item is allowd',
        items: [
          {value: 'value1', label: 'label1'},
          {value: 'value2', label: 'label2'},
          {value: 'value3', label: 'label3'}
        ]
      },
      multiselect: {
        title: 'Multi Select',
        type: 'array',
        format: 'strapselect',
        description: 'Multi single items arre allowd',
        items: [
          {value: 'value1', label: 'label1'},
          {value: 'value2', label: 'label2'},
          {value: 'value3', label: 'long very very long label3'}
        ]
      }
    },
    required: ['select', 'multiselect']
  };
  $scope.form = [
    'name',
     {
       key: 'select'
     },
     {
       key: 'multiselect'
     },
     {
        type: "submit",
        style: "btn-info",
        title: "OK"
      }
  ];
  $scope.model = {};
  $scope.model.select = 'value3';
  $scope.model.multiselect = ['value2', 'value1'];

  $scope.submitted = function(form){
    $scope.$broadcast('schemaFormValidate')
    console.log($scope.model);
  };
});
