const ProgressData = []

function newProgress (listID) {
  const id = ProgressData.length
  ProgressData[id] = { list: listID, step: 0, input: { } }
  writeProgress()

  return id
}

function updateProgress (id, variable, value) {
  const stepCount = ProgressData[id].step
  ProgressData[id].step = stepCount + 1
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
