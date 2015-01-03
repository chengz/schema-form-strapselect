/*global angular */
'use strict';

/**
 * The main app module
 * @name app
 * @type {angular.Module}
 */
var lightApp = angular.module('lightApp', ['mgcrea.ngStrap', 'schemaForm', 'pascalprecht.translate'])
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
      select: {
        title: 'Single Select Static',
        type: 'string',
        format: 'strapselect',
        description: 'Only single item is allowed',
        items: [
          {value: 'value1', label: 'label1'},
          {value: 'value2', label: 'label2'},
          {value: 'value3', label: 'label3'}
        ]
      },
      multiselect: {
        title: 'Multi Select Static',
        type: 'array',
        format: 'strapselect',
        description: 'Multi single items are allowed',
        items: [
          {value: 'value1', label: 'label1'},
          {value: 'value2', label: 'label2'},
          {value: 'value3', label: 'long very very long label3'}
        ]
      },
        selectdynamic: {
            title: 'Single Select Dynamic',
            type: 'string',
            format: 'strapselectdynamic',
            description: 'Must be running on Light Server which is listening to port 8080'
        },
        multiselectdynamic: {
            title: 'Multi Select Dynamic',
            type: 'array',
            format: 'strapselectdynamic',
            description: 'Must be running on Light Server which is listening to port 8080'
        }
    },
    required: ['select', 'multiselect']
  };
  $scope.form = [
     {
       key: 'select'
     },
     {
       key: 'multiselect'
     },
     {
       "key": "selectdynamic",
       "options": {
         "category": "forum",
         "name": "getForumDropdown"
       }
     },
     {
       "key": "multiselectdynamic",
         "options": {
         "category": "forum",
         "name": "getForumDropdown"
       }
     },
     {
       type: "submit",
       style: "btn-info",
       title: "OK"
     },

  ];
  $scope.model = {};
  $scope.model.select = 'value3';
  $scope.model.multiselect = ['value2', 'value1'];

  $scope.submitted = function(form){
    $scope.$broadcast('schemaFormValidate')
    console.log($scope.model);
  };
});
