const handlebars = require('handlebars')

const Lists = require('../store/list')
const { data: Progress, updateProgress } = require('../store/progress')

const ProgressView = require('../views/progress')
const ExportView = require('../views/export')

module.exports = [{
  method: 'post',
  path: '/progress/:id/next',
  callback: function progressNext (req, res) {
    const progressId = req.params.id
    const progress = Progress[progressId]

    if (!progress) return res.redirect('/')

    if (Object.keys(req.body).length > 0) {
      const [variable, value] = Object.entries(req.body)[0]
      updateProgress(progressId, variable, value)
    } else {
      updateProgress(progressId)
    }

    const nextStep = Lists[progress.list].steps[progress.completed]
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
  callback: function progressExport (req, res) {
    const progressId = req.params.id
    const progress = Progress[progressId]
    const list = Lists[progress.list]
    const keys = Object.keys(progress.input)

    if (!keys.length) res.send()

    const values = Object.values(progress.input).map(v => {
      return Array.isArray(v) ? v.join('/') : v
    })
    const csv = [keys.join(','), values.join(',')].join('\n') + '\n'
    res.writeHead(200, {
      'Content-Type': 'application/octet-stream',
      'Content-disposition': `attachment; filename=${list.name}.csv`
    })
    res.write(Buffer.from(csv))
    return res.end()
  }
}]
