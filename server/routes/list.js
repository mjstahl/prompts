const Lists = require('../store/list')
const Progress = require('../store/progress')

module.exports = [{
  method: 'get',
  path: '/list',
  callback: function (_, res) {
    const lists = Object.values(Lists).map(({ id, name }) => ({ id, name }))
    return res.json(lists)
  }
}, {
  method: 'post',
  path: '/list/:id/start',
  callback: function (req, res) {
    const list = Lists[req.params.id]
    const { prompt, input } = list.steps[0]
    const progressID = Progress.newProgress(req.params.id)
    return res.json({ prompt, input, progress_id: progressID })
  }
}]
