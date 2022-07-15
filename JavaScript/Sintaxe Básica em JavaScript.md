# Sintaxe Básica em JavaScript

JavaScript é uma linguagem de programação de alto nível, serve para criar scripts dinâmicos que realizam a interação de apps ou páginas web. Pode ser usado de várias formas.

### Entendendo variáveis e seus valores

- Strings:

  - Comumente utilizada para textos, os valores são declarados entre aspas ou crases.
  - Métodos importantes:
    - Concatenação
    - Propriedade length
    - Iterabilidade
    - Formatação
    - Index de letras

- Numbers:

  - Inteiros ou decimais
  - Aritmética
  - Math. (objeto, biblioteca)

- Booleans:

  - True or false | 0 or 1
  - Comparação

- Arrays:

  - Lista iterável de elementos

- Objetos:

  - Estrutura tipo “chave e valor”

- Funções:

  - São blocos  de comandos e instruções que são chamadas para a execução de terminadas tarefas, podendo retornar algum valor ou não.

    - Estrutura

      function name (parameters) {

      // instrução

      }

    - Função anônima

    - Função auto invocável

    - Callbacks

- Empty; null; undefined.

### O que são variáveis?

São dados que podem guardar valores;

- Declaração de variáveis:

**var**: escopo global e local, pode ter seu valor alterado.

**let**: escopo local de bloco, pode ter seu valor alterado.

**const**: escopo local de bloco, somente leitura, precisa de um valor.

- Lembrando que…

**Escopo global**: declarado fora de qualquer bloco, sua visibilidade fica disponível em todo o código.

**Escopo local**: quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não.



### Manipulando Arrays

**forEach()**: itera o array e executa uma função para cada índice do array

**push():** adiciona item no final de um array

**pop():** remove item do final do array

**shift():** remove item do ínicio do array

**unshift():** adiciona item no começo do array

**indexOf():** retorna o índice de um valor dado

**splice():** remove ou substitui um item pelo índice

**slice():** retorna uma parte de um array existente



### Estruturas Condicionais

São instruções para realizar determinadas tarefas a partir de uma condição, seja de decisão ou repetição.

- if

- else

- else if

- ninho de if

- if ternário

- switch/case

  

### Estruturas de Repetição

São estruturas condicionais que repetem uma instrução até atingir determinada condição.

- for
- for / in
- for / of
- while
- do / while