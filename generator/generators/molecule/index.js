const questions = require('./questions')
const operations = require('./operations')

module.exports = (plop) => {
  plop.setGenerator('Geração de componentes do tipo "Molecules"', {
    description: 'Gere toda uma estrutura para desenvolver um componente do tipo "Molecules".',

    prompts: [
      questions.component.name
    ],

    actions: function () {
      const actions = []

      const { add } = operations

      actions.push(add.component.index)
      actions.push(add.styles.index)

      actions.push(add.test.index)

      return actions
    }
  })
}