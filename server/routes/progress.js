const Lists = require('../store/list')
const { data: Progress, updateProgress } = require('../store/progress')

module.exports = [{
  method: 'post',
  path: '/progress/:id/next',
  callback: function (req, res) {
    const progressID = parseInt(req.params.id)
    const progress = Progress[progressID]
    const onStep = progress.step

    updateProgress(progressID /* need to pass in params that are received */)

    return res.json({
      id: progressID,
      ...Lists[progress.list].steps[onStep + 1]
    })
  }
}]
