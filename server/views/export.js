const handlebars = require('handlebars')

module.exports = handlebars.compile(`
<!DOCTYPE html>
<html>
  <body>
    <h1>Click the link below to export results.</h1>
    <a href="/progress/{{progressId}}/export">
      Export the results
    </a>
  </body>
</html>
`)