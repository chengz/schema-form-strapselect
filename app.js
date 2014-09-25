/*global angular */
'use strict';

/**
 * The main app module
 * @name app
 * @type {angular.Module}
 */
var app = angular.module('app', ['schemaForm-strapselect', 'schemaForm-strapmultiselect', 'pascalprecht.translate'])
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
        enum: [
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
        enum: [
          {value: 'value1', label: 'label1'},
          {value: 'value2', label: 'label2'},
          {value: 'value3', label: 'long very very long label3'}
        ]
      }
    }
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
  $scope.submitted = function(form){
    console.log($scope.model);
  };
});
