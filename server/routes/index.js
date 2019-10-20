const routes = [
  require('./list'),
  require('./progress')
]

module.exports = function (app) {
  routes.forEach(route => {
    route.forEach(r => {
      app[r.method](r.path, r.callback)
    })
  })
}
