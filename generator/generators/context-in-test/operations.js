const utils = require('../utils')(__dirname)

const { rootDir, modifyDir } = utils

module.exports = {
  modify: {
    component: {
      test: {
        context: {
          makesut: {
            params: {
              type: 'modify',
              path: rootDir('src/components/atoms/Button/test.tsx'),
              pattern: /(const.*\((.*))\)/,
              templateFile: modifyDir('test/component/context/makesut/params.hbs')
            },

            render: {
              type: 'modify',
              path: rootDir('src/components/atoms/Button/test.tsx'),
              pattern: /const sut = render\((.*)\)/,
              templateFile: modifyDir('test/component/context/makesut/render.hbs')
            }
          },

          import: {
            type: 'modify',
            path: rootDir('src/components/atoms/Button/test.tsx'),
            pattern: /(import React from 'react')/,
            templateFile: modifyDir('test/component/context/import.hbs')
          }
        }
      }
    }
  }
}