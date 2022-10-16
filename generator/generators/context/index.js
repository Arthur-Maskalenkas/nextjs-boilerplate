const questions = require('./questions')
const operations = require('./operations')

module.exports = (plop) => {
  plop.setGenerator('Geração de Contexto', {
    description: 'Gere toda uma estrutura para desenvolver um Contexto',

    prompts: [
      questions.component.name
    ],

    actions: function () {
      const actions = []

      const { add } = operations

      actions.push(add.context.index)
      actions.push(add.context.utils)
      actions.push(add.context.test)

      return actions
    }
  })
}