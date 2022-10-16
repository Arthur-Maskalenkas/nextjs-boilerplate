const utils = require('../utils')(__dirname)

const { addDir, rootDir } = utils

module.exports = {
  add: {
    component: {
      index: {
        type: 'add',
        path: rootDir('src/components/organisms/{{dashCase name}}/index.tsx'),
        templateFile: addDir('component/default.hbs')
      }
    },

    export: {
      index: {
        type: 'modify',
        path: rootDir('src/components/organisms/index.ts'),
        pattern: /(export .*)/,
        template: '$1\nexport * from \'./{{dashCase name}}\''
      }
    },

    styles: {
      index: {
        type: 'add',
        path: rootDir('src/components/organisms/{{dashCase name}}/styles.module.scss'),
        templateFile: addDir('styles/default.hbs')
      }
    },

    test: {
      index: {
        type: 'add',
        path: rootDir('src/components/organisms/{{dashCase name}}/test.tsx'),
        templateFile: addDir('test/component/default.hbs')
      }
    }
  }
}