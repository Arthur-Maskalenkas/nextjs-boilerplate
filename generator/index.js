const atomGenerator = require('./generators/atom')
const moleculeGenerator = require('./generators/molecule')
const organismGenerator = require('./generators/organism')
const contextGenerator = require('./generators/context')
const contextInTestGenerator = require('./generators/context-in-test')

module.exports = (plop) => {
  plop.setWelcomeMessage('' +
    'Seja Bem Vindo(a)!\n' +
    'Selecione uma das opções para dar inicio ao processo!\n' +
    '')

  // atomGenerator(plop)
  // moleculeGenerator(plop)
  // organismGenerator(plop)
  //
  // contextGenerator(plop)
  contextInTestGenerator(plop)
}