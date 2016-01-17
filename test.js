require('assert')(
  require('commonform-validate').form(require('./')),
  'invalid form')
