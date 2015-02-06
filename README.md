angular strap select add-on
=================

This strap select add-on uses as the name implies the strap select plugin to provide a select dropdown interface. [angular-strap](https://github.com/mgcrea/angular-strap) is used.

Installation
------------
The editor is an add-on to the Bootstrap decorator. To use it, just include
`schema-form-strapselect.min.js`.

Easiest way is to install is with bower, this will also include dependencies:
```bash
$ bower install chengz/schema-form-strapselect
```

You'll need to load a few additional files to use the editor:

**Be sure to load this projects files after you load angular schema form**

Example

```HTML
<script type="text/javascript" src="/bower_components/angular/angular.min.js"></script>
<script src="bower_components/angular-sanitize/angular-sanitize.min.js"></script>
<script src="bower_components/angular-translate/angular-translate.min.js"></script>
<script src='bower_components/angular-strap/dist/angular-strap.min.js'></script>
<script src='bower_components/angular-strap/dist/angular-strap.tpl.min.js'></script>
<script src="bower_components/tv4/tv4.js"></script>
<script src="bower_components/objectpath/lib/ObjectPath.js"></script>
<script src="bower_components/angular-schema-form/dist/schema-form.min.js"></script>
<script src="bower_components/angular-schema-form/dist/bootstrap-decorator.min.js"></script>
<script src="schema-form-strapselect.js"></script>
```

When you create your module, be sure to depend on this project's module as well.

```javascript
angular.module('yourModule', ['schemaForm', 'schemaForm-strapselect']);
```

Usage
-----
The add-on adds a new form type, `strapselect`, and a new default
mapping.

| Schema             |   Default Form type  |
|:-------------------|:------------:|
| "type": "string" and "format": "strapselect"   |   strapselect   |
| "type": "array" and "format": "strapselect"   |   strapmultiselect   |

### Schema Definintion
```javascript
person_list: {
  title: 'Person List',
  type: 'string',
  format: 'strapselect',
  items: [
    { value: '1', label: 'Person 1' },
    { value: '2', label: 'Person 2' }
  ]
},
persons_list: {
  title: 'Persons List',
  type: 'array',
  format: 'strapselect',
  items: [
    { value: '1', label: 'Person 1' },
    { value: '2', label: 'Person 2' },
    { value: '3', label: 'Person 3' }
  ]
}
```
