const handlebars = require('handlebars')

module.exports = handlebars.compile(`
<!DOCTYPE html>
<html>
  <body>
    {{#each lists}}
      <a href="/list/{{id}}/start">{{name}}</a>
    {{/each}}
  </body>
</html>
`)