const Lists = require('../store/list')
const Progress = require('../store/progress')

const ProgressView = require('../views/progress.js')

module.exports = [{
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
