const handlebars = require('handlebars')

module.exports = handlebars.compile(`
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="/css/styles.css">
  </head>
  <body>
    {{#with step}}
      <form action="/progress/{{progressId}}/next" method="post">
        <h1>{{prompt}}</h1>
        <div class="input">
          {{#if input}}
            <input type="text" name="{{input.variable}}" />
          {{/if}}
          <input type="submit" value="&rdsh;" />
          <div class="progress-export">
            <a href="/progress/{{progressId}}/export">
              &DownArrowBar;
            </a>
          </div>
        </div>
      </form>
    {{/with}}
    <script src="/js/scripts.js"></script>
  </body>
</html>
`)
