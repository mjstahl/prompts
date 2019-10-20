const ProgressData = {}

function newProgress (listID) {
  const id = Object.keys(ProgressData).length + 1
  ProgressData[id] = { list: listID, completed: 0, input: { } }
  writeProgress()

  return id
}

function updateProgress (id, variable, value) {
  const progress = ProgressData[id]
  if (!progress) return

  const stepCount = progress.completed
  ProgressData[id].completed = stepCount + 1
  if (variable) {
    ProgressData[id].input[variable] = value
  }
  writeProgress()
}

function writeProgress () {
  // NO-OP write progress to disk
}

module.exports = {
  data: ProgressData,
  newProgress,
  updateProgress
}
