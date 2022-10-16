const utils = require('../utils')(__dirname)

const { addDir, modifyDir, rootDir } = utils

module.exports = {
  add: {
    component: {
      index: {
        type: 'add',
        path: rootDir('src/components/atoms/{{dashCase name}}/index.tsx'),
        templateFile: addDir('component/atom.hbs')
      }
    },

    export: {
      index: {
        type: 'modify',
        path: rootDir('src/components/atoms/index.ts'),
        pattern: /(export .*)/,
        template: '$1\nexport * from \'./{{dashCase name}}\''
      }
    },

    styles: {
      index: {
        type: 'add',
        path: rootDir('src/components/atoms/{{dashCase name}}/styles.module.scss'),
        templateFile: addDir('styles/atom.hbs')
      }
    },

    test: {
      index: {
        type: 'add',
        path: rootDir('src/components/atoms/{{dashCase name}}/test.tsx'),
        templateFile: addDir('test/component/atom.hbs')
      }
    }
  }
}