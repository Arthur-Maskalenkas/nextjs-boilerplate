const questions = require('./questions')
const operations = require('./operations')

module.exports = (plop) => {
  plop.setGenerator('Geração de componentes do tipo "Organisms"', {
    description: 'Gere toda uma estrutura para desenvolver um componente do tipo "Organisms".',

    prompts: [
      questions.component.name
    ],

    actions: function () {
      const actions = []

      const { add } = operations

      actions.push(add.component.index)
      actions.push(add.styles.index)

      actions.push(add.test.index)

      actions.push(add.export.index)

      return actions
    }
  })
}