const utils = require('../utils')(__dirname)

const { addDir, rootDir } = utils

module.exports = {
  add: {
    component: {
      index: {
        type: 'add',
        path: rootDir('src/components/molecules/{{dashCase name}}/index.tsx'),
        templateFile: addDir('component/default.hbs')
      }
    },

    styles: {
      index: {
        type: 'add',
        path: rootDir('src/components/molecules/{{dashCase name}}/styles.module.scss'),
        templateFile: addDir('styles/default.hbs')
      }
    },

    test: {
      index: {
        type: 'add',
        path: rootDir('src/components/molecules/{{dashCase name}}/test.tsx'),
        templateFile: addDir('test/component/default.hbs')
      }
    }
  }
}