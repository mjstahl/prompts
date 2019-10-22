const handlebars = require('handlebars')

module.exports = handlebars.compile(`
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="/css/styles.css">
  </head>
  <body>
    <div class="export">
      <h1>To export the results, click below.</h1>
      <a href="/progress/{{progressId}}/export">
        &DownArrowBar;
      </a>
    </div>
  </body>
</html>
`)
