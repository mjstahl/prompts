const handlebars = require('handlebars')

module.exports = handlebars.compile(`
<!DOCTYPE html>
<html>
  <body>
    {{#with step}}
      <form action="/progress/{{progressId}}/next" method="post">
        <h1>{{prompt}}</h1>
        {{#if input}}
          <input type="text" name="{{input.variable}}" />
        {{/if}}
        <input type="submit" />
      </form>
    {{/with}}
  </body>
</html>
`)
