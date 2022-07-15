# Debugging & Error Handling com JavaScript

### 🦴Tipos de Erros

- ECMAScript Error

  Erros que ocorrem em tempo de execução, é composto por uma mensagem, o nome do erro, a linha que aconteceu e a Call Stack.

- DOMException

  Erros relacionados ao Document Object Model (DOM).

### 🕹Tratando Erros

- Throw

  Dizer ao console que aconteceu um erro.

- Try… catch

  Dentro do bloco try são executadas instruções e caso ocorra algum erro durante o processo, ele será tratado no bloco catch. Isso permite a manipulação de um erro de maneira mais personalizada.

- Finally

  Uma instrução que vai ser chamada independente de haver erro ou não.

### 🌟Criando Error

- message; fileName; lineNumber
- .name; .stack