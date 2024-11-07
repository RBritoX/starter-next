module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ["tv"],
  printWidth: 100, // Define o número máximo de caracteres por linha (default é 80)
  tabWidth: 2, // Define a largura da indentação (default é 2)
  useTabs: false, // Usa espaços em vez de tabs (default é false)
  semi: true, // Adiciona ponto e vírgula ao final das declarações (default é true)
  singleQuote: true, // Usa aspas simples em vez de aspas duplas (default é false)
  trailingComma: 'es5', // Adiciona vírgula ao final de listas e objetos conforme o padrão ES5 (default é 'es5')
  bracketSpacing: true, // Adiciona espaço entre chaves em objetos (default é true)
  jsxSingleQuote: false, // Usa aspas simples em JSX (default é false)
  arrowParens: 'always', // Sempre inclui parênteses ao redor de parâmetros de arrow functions (default é 'always')
  endOfLine: 'lf', // Define a quebra de linha como LF (Unix) (default é 'auto')
};
