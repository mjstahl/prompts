const handlebars = require('handlebars')

const Lists = require('../store/list')
const { data: Progress, updateProgress } = require('../store/progress')

const ProgressView = require('../views/progress')
const ExportView = require('../views/export')

module.exports = [{
  method: 'post',
  path: '/progress/:id/next',
  callback: function (req, res) {
    const progressId = req.params.id
    const progress = Progress[progressId]

    if (!progress) res.redirect('/lists')

    const [variable, value] = Object.entries(req.body)[0]
    updateProgress(progressId, variable, value)

    const nextStep = Lists[progress.list].steps[progress.completed + 1]
    if (!nextStep) return res.send(ExportView({ progressId }))

    const { input, prompt } = nextStep
    const promptTemplate = handlebars.compile(prompt)
    const step = {
      progressId,
      input,
      prompt: promptTemplate(progress.input)
    }
    return res.send(ProgressView({ step }))
  }
}, {
  method: 'get',
  path: '/progress/:id/export',
  callback: function (req, res) {
    const progressId = req.params.id
    const progress = Progress[progressId]
    const list = Lists[progress.list]
    const keys = Object.keys(progress.input)

    if (!keys.length) res.send()

    const csv = [
      keys.join(','),
      Object.values(progress.input).join(',')
    ].join('\n') + '\n'
    res.writeHead(200, {
      'Content-Type': 'application/octet-stream',
      'Content-disposition': `attachment; filename=${list.name}.csv`
    })
    res.write(Buffer.from(csv))
    res.end()
  }
}]
