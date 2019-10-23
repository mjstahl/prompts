const handlebars = require('handlebars')

handlebars.registerHelper('isArray',
  function isArrayHelper (array, context) {
    return Array.isArray(array) ? context.fn(this) : context.inverse(this)
  })

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
            {{#isArray input.default}}
              <select name="{{input.variable}}">
                {{#each input.default}}
                  <option value={{this}}>{{this}}</option>
                {{/each}}
              </select>
            {{else}}
              <input type="text" name="{{input.variable}}" />
            {{/isArray}}
            <input type="submit" value="&rdsh;" />
          {{else}}
            <p class="any-key-advance">Press any key to continue.</p>
          {{/if}}
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
