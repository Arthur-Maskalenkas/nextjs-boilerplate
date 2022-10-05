module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a Input',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do componente?'
      },
      {
        type: 'list',
        name: 'typeComponent',
        message: 'Qual o tipo do componente?',
        choices: ['atoms', 'molecules', 'organisms']
      },
      {
        type: 'confirm',
        name: 'propsInTests',
        message: 'Você pretende utilizar props nos testes?'
      }
    ],
    actions: function (data) {
      const actions = []

      console.log(data)

      actions.push({
        type: 'add',
        path: '../src/components/{{typeComponent}}/{{dashCase name}}/index.tsx',
        templateFile: 'templates/component-any.tsx.hbs'
      })

      if (data.typeComponent === 'atom') {
        actions.push({
          type: 'modify',
          path: '../src/components/{{typeComponent}}/{{dashCase name}}/index.tsx',
          pattern: /((export)(?<=export)[.|\n|\W|\w]*)/g,
          templateFile: 'templates/modify/insert-atom-props-in-component.tsx.hbs'
        })
      }

      actions.push({
        type: 'add',
        path: '../src/components/{{lowerCase type}}/{{dashCase name}}/styles.module.scss',
        templateFile: 'templates/styles.module.scss.hbs'
      })

      return actions
    }
  })
}
