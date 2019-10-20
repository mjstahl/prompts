module.exports = [{
  method: 'get',
  path: '/',
  callback: (_, res) => res.redirect('/lists')
}]