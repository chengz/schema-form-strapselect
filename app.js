/*global angular */
'use strict';

/**
 * The main app module
 * @name testApp
 * @type {angular.Module}
 */

var testApp = angular.module('testApp', ['mgcrea.ngStrap', 'mgcrea.ngStrap.modal', 'schemaForm']);

testApp.controller('SelectController',[ '$scope','$http', function($scope, $http){

    $scope.callBackSD = function (options) {
      return [
          {value: 'value1', name: 'label1'},
          {value: 'value2', name: 'label2'},
          {value: 'value3', name: 'Select dynamic!'}
        ]
    };

    $scope.callBackMSD = function (options) {
      return [
          {value: 'value1', name: 'label1'},
          {value: 'value2', name: 'label2'},
          {value: 'value3', name: 'Multiple select dynamic!'}
        ]
    };


    $scope.callBackMSDAsync = function (options) {
      // Node that we got the url from the options. Not necessary, but then the same callback function can be used
      // by different selects with different parameters.
      return $http.get(options.async.url);
    };

    $scope.schema = {
    type: 'object',
    title: 'Select',
    properties: {
      select: {
        title: 'Single Select Static',
        type: 'string',
        description: 'Only single item is allowed'

      },
      multiselect: {
        title: 'Multi Select Static',
        type: 'array',
        description: 'Multi single items are allowed(select third for error)'

      },
        selectdynamic: {
            title: 'Single Select Dynamic',
            type: 'string',
            description: 'This data is loaded from the $scope.callBackSD function.'
        },
        multiselectdynamic: {
            title: 'Multi Select Dynamic',
            type: 'array',
            description: 'This data is loaded from the $scope.callBackMSD function.'
        },
        multiselectdynamic_http_post: {
            title: 'Multi Select Dynamic HTTP Post',
            type: 'array',
            description: 'This data is asynchrously loaded using a HTTP post(specify options.url and options.parameter)'
        },
        multiselectdynamic_http_get: {
            title: 'Multi Select Dynamic HTTP Get',
            type: 'array',
            description: 'This data is asynchrously loaded using a HTTP get(specify options.url)'
        },
        multiselectdynamic_async: {
            title: 'Multi Select Dynamic Async',
            type: 'array',
            description: 'This data is asynchrously loaded using a async call(specify options.async.call)'
        }
    },
    required: ['select', 'multiselect']
    };
    $scope.form = [
     {
       "key": 'select',
       "type": 'strapselect',
       "items": [
          {"value": 'value1', "name": 'label1'},
          {"value": 'value2', "name": 'label2'},
          {"value": 'value3', "name": 'label3'}
        ]
     },
     {
       "key": 'multiselect',
       "type": 'strapmultiselect',
        "items": [
          {"value": 'value1', "name": 'label1'},
          {"value": 'value2', "name": 'label2'},
          {"value": 'value3', "name": 'long very very long label3'}
        ]
     },
     {
       "key": "selectdynamic",
       "type": 'strapselectdynamic',
       "options": {
         "callback": $scope.callBackSD
       }
     },
     {
       "key": "multiselectdynamic",
       "type": 'strapmultiselectdynamic',
       "options": {
           "callback": $scope.callBackMSD
       }
     },
     {
       "key": "multiselectdynamic_http_post",
       "type": 'strapmultiselectdynamic',
       "options": {
           "http_post": {
               "url" : "/angular-schema-form-strapselect/test/testdata.json",
               "parameter": { "myparam" : "Hello"}
           }
       }
     },
     {
       "key": "multiselectdynamic_http_get",
       "type": 'strapmultiselectdynamic',
       "options": {
           "http_get": {
               "url" : "/angular-schema-form-strapselect/test/testdata.json"
           }
       }
     },
     {
       "key": "multiselectdynamic_async",
       "type": 'strapmultiselectdynamic',
       "options": {
           "async": {
               "call": $scope.callBackMSDAsync,
               "url" : "/angular-schema-form-strapselect/test/testdata.json"
           }
       }
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
}]);


