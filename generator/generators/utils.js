const path = require('path')
module.exports = (dirname) => {
  return {
    addDir: (file) => path.resolve(dirname, `../../templates/add/${file}`),
    modifyDir: (file) => path.resolve(dirname, `../../templates/modify/${file}`),
    rootDir: (file) => path.resolve(dirname, `../../../${file}`)
  }
}