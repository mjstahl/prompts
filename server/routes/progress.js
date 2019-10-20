const handlebars = require('handlebars')

const Lists = require('../store/list')
const { data: Progress, updateProgress } = require('../store/progress')

module.exports = [{
  method: 'post',
  path: '/progress/:id/next',
  callback: function (req, res) {
    const progressID = req.params.id
    const progress = Progress[progressID]
    const onStep = progress.completed

    const [variable, value] = Object.entries(req.body)[0]
    updateProgress(progressID, variable, value)

    const { input, prompt } = Lists[progress.list].steps[onStep + 1]
    const promptTemplate = handlebars.compile(prompt)
    return res.json({
      id: progressID,
      input,
      prompt: promptTemplate(progress.input)
    })
  }
}]
