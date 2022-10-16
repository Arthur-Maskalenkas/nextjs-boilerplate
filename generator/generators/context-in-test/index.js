const questions = require('./questions')
const operations = require('./operations')

module.exports = (plop) => {
  plop.setGenerator('Implementar contexto em algum teste unitario', {
    description: 'Implemente contexto em algum teste unitario, totalmente mokado.',

    prompts: [
      questions.component.componentName,
      questions.component.typeComponent,
      questions.component.contextName
    ],

    actions: function () {
      const actions = []

      const { modify } = operations

      actions.push(modify.component.test.context.import)

      actions.push(modify.component.test.context.makesut.params)
      actions.push(modify.component.test.context.makesut.render)

      return actions
    }
  })
}