const utils = require('../utils')(__dirname)

const { addDir, modifyDir, rootDir } = utils

module.exports = {
  add: {
    context: {
      index: {
        type: 'add',
        path: rootDir('src/context/{{dashCase name}}/index.tsx'),
        templateFile: addDir('context/index.hbs')
      },

      utils: {
        type: 'add',
        path: rootDir('src/context/{{dashCase name}}/utils.ts'),
        templateFile: addDir('context/utils.hbs')
      },

      test: {
        type: 'add',
        path: rootDir('src/context/{{dashCase name}}/test.tsx'),
        templateFile: addDir('context/test.hbs')
      }
    }
  }
}