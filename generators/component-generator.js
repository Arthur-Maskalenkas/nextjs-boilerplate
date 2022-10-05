module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a Input',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is component name?'
      },
      {
        type: 'list',
        name: 'type',
        message: 'What is your Input type?',
        choices: ['atoms', 'molecules', 'organisms']
      },
      {
        type: 'confirm',
        name: 'propsInTests',
        message: 'Do you want to use props in tests?'
      }
    ],
    actions: function (data) {
      const actions = []

      console.log(data)

      if (data.propsInTests === true) {
        actions.push({
          type: 'add',
          path: '../src/components/{{lowerCase type}}/{{dashCase name}}/test.tsx',
          templateFile: 'templates/test-with-props.tsx.hbs'
        })
      } else {
        actions.push({
          type: 'add',
          path: '../src/components/{{lowerCase type}}/{{dashCase name}}/test.tsx',
          templateFile: 'templates/test-default.tsx.hbs'
        })
      }


      return actions
    }
  })
}
