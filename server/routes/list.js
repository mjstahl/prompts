const Lists = require('../store/list')
const Progress = require('../store/progress')

const ListsView = require('../views/lists.js')
const ProgressView = require('../views/progress.js')

module.exports = [{
  method: 'get',
  path: '/lists',
  callback: function (_, res) {
    const lists = Object.values(Lists).map(({ id, name }) => ({ id, name }))
    return res.send(ListsView({ lists }))
  }
}, {
  method: 'get',
  path: '/list/:id/start',
  callback: function (req, res) {
    const list = Lists[req.params.id]
    const { prompt, input } = list.steps[0]
    const progressID = Progress.newProgress(req.params.id)
    const step = { prompt, input, progressId: progressID }
    return res.send(ProgressView({ step }))
  }
}]
