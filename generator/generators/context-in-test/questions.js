module.exports = {
  component: {
    componentName: {
      type: 'input',
      name: 'componentName',
      message: 'Qual o nome do componente em que o teste sera implementado?'
    },

    typeComponent: {
      type: 'list',
      name: 'typeComponent',
      message: 'Qual o tipo do componente?',
      choices: [
        'Atom',
        'Molecule',
        'Organism'
      ]
    },

    contextName: {
      type: 'input',
      name: 'contextName',
      message: 'Qual o nome do contexto que sera implementado?'
    }

  }
}