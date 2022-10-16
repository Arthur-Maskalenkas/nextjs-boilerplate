const fs = require('fs')
const path = require('path')

const getComponents = function () {
  const foldersToReturnAllFiles = ['atoms', 'molecules', 'organisms']

  const files = []

  foldersToReturnAllFiles.forEach(folder => {
    const folderPath = path.join(__dirname, `../../../src/components/${folder}`)
    const folderFiles = fs.readdirSync(folderPath)

    folderFiles.forEach(file => {
      files.push(`${folder}/${file}`)
    })
  })

  return files
}

const getContext = function () {
  const folderPath = path.join(__dirname, '../../../src/context')

  // if folder not exists, return empty array
  if (!fs.existsSync(folderPath)) {
    throw new Error('Folder not exists', { cause: 'Não existe nenhum contexto para ser utilizado. Por favor, antes de prosseguir crie um contexto dentro de src/context.' })
  }

  return fs.readdirSync(folderPath)
}

module.exports = {
  component: {
    componentName: {
      type: 'list',
      name: 'componentPath',
      message: 'Qual o nome do componente em que o teste sera implementado?',
      choices: getComponents()
    },

    contextName: {
      type: 'list',
      name: 'contextName',
      message: 'Qual o nome do contexto que sera implementado?',
      choices: getContext()
    }

  }
}