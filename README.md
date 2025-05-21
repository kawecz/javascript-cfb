# javascript-cfb
 Curso de JavaScript do canal <a href ="https://www.youtube.com/@cfbcursos">CFB cursos</a>
 <hr>

## 📘 Aula 1 - Hello, World
O primeiro passo ao aprender JavaScript é exibir uma mensagem simples: **"Hello, World!"**. Esse teste serve para confirmar que o JavaScript está funcionando corretamente no navegador ou no ambiente em que você está programando.

Em JavaScript, o código mais básico para isso é:

```javascript
console.log("Hello, World!");
```

### O que esse código faz?

* `console.log(...)`: é uma função que exibe mensagens no **console do navegador** ou do ambiente onde o código está rodando (como o Node.js).
* `"Hello, World!"`: é a string (texto) que será exibida.

Se você abrir o console do navegador (com F12) e colar esse código, verá:

```
Hello, World!
```

Esse é o primeiro passo para dominar a linguagem. Com apenas uma linha, você já está interagindo com o ambiente de execução!
<hr>

## 📘 Aula 02 - Javascript em Modo Estrito
O **modo estrito** do JavaScript (`"use strict"`) ativa uma forma mais segura de interpretar o código. Ele evita erros comuns, impede comportamentos problemáticos e ajuda a escrever um código mais limpo e confiável.

Para ativar, basta colocar a diretiva no início do arquivo ou da função:

```javascript
"use strict";
```

### O que muda com o modo estrito?

* ❌ Erro ao usar variáveis não declaradas:

  ```javascript
  "use strict";
  nome = "Kawe"; // Erro: 'nome' não foi declarado
  ```

* 🔐 Protege palavras reservadas:

  ```javascript
  "use strict";
  let interface = "algo"; // Erro: palavra reservada
  ```

* 📛 Impede duplicação de nomes em parâmetros e uso de recursos obsoletos.

### Exemplo prático:

```javascript
"use strict";

function saudacao() {
  let nome = "Kawe";
  console.log("Olá, " + nome);
}

saudacao();
```

Com `"use strict"`, o JavaScript passa a funcionar de forma mais previsível e moderna, o que é essencial para escrever aplicações mais robustas.
<hr>

## 📘 Aula 03 - Diferença entre `let`, `var` e `const` em JavaScript


Em JavaScript, usamos `let`, `var` e `const` para declarar variáveis. Apesar de parecerem semelhantes, cada um possui comportamentos diferentes quanto ao **escopo**, **redeclaração** e **atualização de valor**.

### 🧠 `var`

* Tem **escopo de função** (não de bloco).
* Pode ser **redeclaraada** e **atualizada**.
* Era a forma antiga, antes do ES6.

```javascript
var nome = "Ana";
var nome = "João"; // permitido
```

### 🔒 `let`

* Tem **escopo de bloco** (mais seguro).
* Pode ser **atualizada**, mas **não pode ser redeclarada** no mesmo escopo.

```javascript
let idade = 20;
idade = 21; // permitido
// let idade = 30; // erro se for no mesmo bloco
```

### 🛑 `const`

* Tem **escopo de bloco**.
* **Não pode ser atualizada nem redeclarada**.
* Deve ser inicializada já com valor.

```javascript
const PI = 3.14;
// PI = 3.1415; // erro
```

### Resumo

| Palavra-chave | Escopo | Pode redeclarar? | Pode atualizar? |
| ------------- | ------ | ---------------- | --------------- |
| `var`         | Função | Sim              | Sim             |
| `let`         | Bloco  | Não              | Sim             |
| `const`       | Bloco  | Não              | Não             |

Usar `let` e `const` é a prática mais moderna e recomendada, pois oferece mais previsibilidade e segurança no código.
<hr>

## 📘 Aula 04 - Aprenda sobre os Operadores Matemáticos em JavaScript
Os **operadores matemáticos** (ou aritméticos) são usados para realizar cálculos e manipular valores numéricos em JavaScript. Eles funcionam de forma simples e direta, como em uma calculadora.

### ➕ Operadores básicos:

| Operador | Nome           | Exemplo  | Resultado |
| -------- | -------------- | -------- | --------- |
| `+`      | Adição         | `5 + 3`  | `8`       |
| `-`      | Subtração      | `10 - 4` | `6`       |
| `*`      | Multiplicação  | `2 * 3`  | `6`       |
| `/`      | Divisão        | `8 / 2`  | `4`       |
| `%`      | Módulo (resto) | `10 % 3` | `1`       |
| `**`     | Exponenciação  | `2 ** 3` | `8` (2³)  |

### ➕ Incremento e Decremento:

```javascript
let a = 5;
a++; // agora é 6 (incremento)
a--; // agora volta a 5 (decremento)
```

### 🧪 Exemplo prático:

```javascript
let preco = 50;
let desconto = 10;
let precoFinal = preco - desconto;

console.log("Preço final:", precoFinal); // Saída: Preço final: 40
```

Com esses operadores, você consegue construir desde contas simples até cálculos mais avançados em seus programas. Eles são a base de qualquer aplicação que envolva números!
<hr>

## 📘 Aula 05 - Operadores Relacionais em JavaScript
Os **operadores relacionais** (ou comparativos) são usados para comparar valores. O resultado de uma comparação sempre será um **valor booleano**: `true` (verdadeiro) ou `false` (falso). Eles são fundamentais em tomadas de decisão (condicionais) no código.

### 🔍 Principais operadores:

| Operador | Significado               | Exemplo     | Resultado |
| -------- | ------------------------- | ----------- | --------- |
| `==`     | Igualdade de valor        | `5 == "5"`  | `true`    |
| `===`    | Igualdade de valor e tipo | `5 === "5"` | `false`   |
| `!=`     | Diferença de valor        | `5 != "5"`  | `false`   |
| `!==`    | Diferença de valor e tipo | `5 !== "5"` | `true`    |
| `>`      | Maior que                 | `7 > 3`     | `true`    |
| `<`      | Menor que                 | `7 < 3`     | `false`   |
| `>=`     | Maior ou igual            | `7 >= 7`    | `true`    |
| `<=`     | Menor ou igual            | `3 <= 2`    | `false`   |

### 📌 Exemplo prático:

```javascript
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

Neste exemplo, usamos `>=` para verificar se a pessoa tem 18 anos ou mais. Esse tipo de comparação é essencial para controle de fluxos, validações e lógica de negócio em qualquer aplicação.
<hr>

## 📘 Aula 07 - Operadores Lógicos em JavaScript
Os **operadores lógicos** são usados para combinar condições e criar expressões mais complexas. Eles retornam sempre um valor booleano (`true` ou `false`) e são essenciais em estruturas como `if`, `while` e funções de validação.

### ⚙️ Operadores principais:

| Operador | Nome       | Exemplo         | Resultado |        |   |         |        |
| -------- | ---------- | --------------- | --------- | ------ | - | ------- | ------ |
| `&&`     | E lógico   | `true && false` | `false`   |        |   |         |        |
| \`       |            | \`              | OU lógico | \`true |   | false\` | `true` |
| `!`      | NÃO lógico | `!true`         | `false`   |        |   |         |        |

### 🧠 Como funcionam:

* `&&` (E): só retorna `true` se **ambas** as condições forem verdadeiras.
* `||` (OU): retorna `true` se **pelo menos uma** das condições for verdadeira.
* `!` (NÃO): inverte o valor lógico (de `true` para `false`, e vice-versa).

### 📌 Exemplo prático:

```javascript
let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}
```

Neste exemplo, a pessoa só pode dirigir se tiver **18 anos ou mais** **e** **possuir carteira de motorista**. Com os operadores lógicos, é possível tomar decisões mais precisas com base em múltiplas condições.
<hr>

## 📘 Aula 08 - Operadores Bitwise em JavaScript
Os **operadores bitwise** (bit a bit) permitem manipular diretamente os bits de números inteiros. Embora menos usados no dia a dia, são poderosos para otimizações, configurações de baixo nível e manipulação de dados binários.

### 🧮 Operadores principais:

| Operador | Nome             | Exemplo  | Resultado binário                       |     |        |               |
| -------- | ---------------- | -------- | --------------------------------------- | --- | ------ | ------------- |
| `&`      | AND              | `5 & 3`  | `0101 & 0011 = 0001`                    |     |        |               |
| \`       | \`               | OR       | \`5                                     | 3\` | \`0101 | 0011 = 0111\` |
| `^`      | XOR (exclusivo)  | `5 ^ 3`  | `0101 ^ 0011 = 0110`                    |     |        |               |
| `~`      | NOT (inversão)   | `~5`     | `~0101 = 1010` (em complemento de dois) |     |        |               |
| `<<`     | Shift à esquerda | `5 << 1` | `0101 << 1 = 1010`                      |     |        |               |
| `>>`     | Shift à direita  | `5 >> 1` | `0101 >> 1 = 0010`                      |     |        |               |

### 📌 Exemplo prático:

```javascript
let a = 5;   // 0101 em binário
let b = 3;   // 0011 em binário

console.log(a & b); // 1
console.log(a | b); // 7
console.log(a ^ b); // 6
console.log(~a);    // -6 (inversão dos bits)
console.log(a << 1); // 10 (desloca 1 bit à esquerda)
console.log(a >> 1); // 2 (desloca 1 bit à direita)
```

Esses operadores são úteis em contextos como controle de permissões (flags), compressão de dados, criptografia e sistemas embarcados. Apesar de parecerem complexos no início, dominá-los pode abrir portas para soluções mais performáticas e eficientes.
<hr>

## 📘 Aula 09 - Diferença entre Pré-Incremento e Pós-Incremento em JavaScript
Em JavaScript, os operadores de incremento `++` aumentam o valor de uma variável em 1, mas podem ser usados de duas formas: **pré-incremento** e **pós-incremento**. A diferença está em quando o valor é alterado e retornado na expressão.

### 🔄 Pré-incremento (`++variavel`)

* O valor é **incrementado primeiro** e depois usado na expressão.
* Ou seja, a variável já está com o valor aumentado quando é lida.

```javascript
let a = 5;
console.log(++a); // Saída: 6 (incrementa e mostra)
console.log(a);   // Saída: 6 (valor atualizado)
```

### 🔄 Pós-incremento (`variavel++`)

* O valor é usado **antes de ser incrementado**.
* A variável só aumenta o valor depois de ser usada na expressão.

```javascript
let b = 5;
console.log(b++); // Saída: 5 (mostra e depois incrementa)
console.log(b);   // Saída: 6 (valor atualizado)
```

### Resumo

| Operador     | Ação                                | Valor retornado na expressão  |
| ------------ | ----------------------------------- | ----------------------------- |
| `++variavel` | Incrementa primeiro, depois retorna | Valor **incrementado**        |
| `variavel++` | Retorna primeiro, depois incrementa | Valor **antes do incremento** |

Essa diferença é importante quando o operador está dentro de expressões ou loops, impactando o fluxo do código e o resultado final.
<hr>

## 📘 Aula 10 - Aprendendo sobre Operador Ternário em JavaScript
O **operador ternário** é uma forma curta e prática de fazer uma decisão simples, substituindo estruturas `if...else` em uma única linha. Ele recebe três partes: uma condição, o valor se for verdadeira e o valor se for falsa.

### Sintaxe:

```javascript
condição ? valorSeVerdadeiro : valorSeFalso;
```

### Exemplo prático:

```javascript
let idade = 18;
let podeEntrar = idade >= 18 ? "Pode entrar" : "Não pode entrar";

console.log(podeEntrar); // Saída: Pode entrar
```

Nesse exemplo, a variável `podeEntrar` recebe `"Pode entrar"` se a condição `idade >= 18` for verdadeira, ou `"Não pode entrar"` caso contrário.

### Vantagens do operador ternário:

* Código mais compacto e legível para decisões simples.
* Evita repetição de código em expressões curtas.

Use o operador ternário quando precisar escolher entre dois valores de forma rápida, mantendo o código limpo e objetivo.
<hr>

## 📘 Aula 11 - Operador typeof em JavaScript
O operador **`typeof`** é usado para verificar o tipo de uma variável ou valor em JavaScript. Ele retorna uma string indicando o tipo do dado, ajudando a entender e controlar o fluxo do programa conforme os tipos das variáveis.

### Tipos comuns retornados pelo `typeof`:

| Tipo retornado | Exemplo                                              |
| -------------- | ---------------------------------------------------- |
| `"string"`     | `"Olá"`                                              |
| `"number"`     | `42`                                                 |
| `"boolean"`    | `true` ou `false`                                    |
| `"undefined"`  | variável não definida                                |
| `"object"`     | objetos, arrays, `null` (atenção: `null` é `object`) |
| `"function"`   | funções                                              |
| `"bigint"`     | números grandes                                      |
| `"symbol"`     | símbolos                                             |

### Exemplo prático:

```javascript
let nome = "João";
let idade = 25;
let ativo = true;

console.log(typeof nome);  // "string"
console.log(typeof idade); // "number"
console.log(typeof ativo); // "boolean"
console.log(typeof null);  // "object"
```

### Observação importante:

O `typeof null` retorna `"object"` por uma particularidade histórica do JavaScript, então cuidado ao usar para validar objetos.

O operador `typeof` é muito útil para depuração, validação de dados e controle de fluxos dependendo do tipo das variáveis.
<hr>

## 📘 Aula 12 - Operador Spread em JavaScript
O operador **spread (`...`)** permite "espalhar" elementos de um array ou propriedades de um objeto em outro contexto, facilitando a cópia, a junção e a manipulação de dados de forma simples e clara.

### Para arrays:

* Expande os elementos de um array dentro de outro array ou função.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
```

### Para objetos:

* Expande as propriedades de um objeto dentro de outro objeto.

```javascript
const obj1 = { nome: "Ana", idade: 25 };
const obj2 = { ...obj1, cidade: "São Paulo" };
console.log(obj2); // { nome: "Ana", idade: 25, cidade: "São Paulo" }
```

### Vantagens do operador spread:

* Criação rápida de cópias superficiais (shallow copy) de arrays e objetos.
* Combinação fácil de múltiplos arrays ou objetos.
* Facilita o envio de múltiplos argumentos para funções.

O operador spread é uma ferramenta poderosa para manipulação moderna de dados em JavaScript, deixando o código mais limpo, legível e eficiente.
<hr>

## 📘 Aula 13 - Comando condicional IF e IF ELSE em JavaScript
Os comandos condicionais **`if`** e **`if...else`** são usados para executar blocos de código diferentes dependendo de uma condição lógica, permitindo controlar o fluxo do programa.

### Comando `if`

Executa um bloco de código **somente se** a condição for verdadeira.

```javascript
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade");
}
```

### Comando `if...else`

Executa um bloco de código se a condição for verdadeira, e outro bloco se for falsa.

```javascript
let idade = 16;

if (idade >= 18) {
  console.log("Você é maior de idade");
} else {
  console.log("Você é menor de idade");
}
```

### Importância

Esses comandos são fundamentais para tomadas de decisão no código, permitindo que o programa reaja a diferentes situações com comportamentos distintos.
<hr>

## 📘 Aula 14 - Comando Switch Case em JavaScript
O comando **`switch`** é usado para executar diferentes blocos de código com base no valor de uma expressão, sendo uma alternativa mais organizada para múltiplos `if...else if`.

### Estrutura básica:

```javascript
switch (expressao) {
  case valor1:
    // código para valor1
    break;
  case valor2:
    // código para valor2
    break;
  default:
    // código padrão se nenhum case for atendido
}
```

### Exemplo prático:

```javascript
let fruta = "maçã";

switch (fruta) {
  case "banana":
    console.log("Banana escolhida");
    break;
  case "maçã":
    console.log("Maçã escolhida");
    break;
  default:
    console.log("Fruta desconhecida");
}
```

### Vantagens do `switch`:

* Mais legível para múltiplas condições baseadas em valores fixos.
* Evita muitos `if...else if`, deixando o código mais limpo.
* Ideal para escolhas claras entre várias opções.

Use o `switch` quando precisar comparar uma variável com vários valores possíveis de forma clara e direta.
<hr>

## 📘 Aula 15 - Loop FOR em JavaScript
O **loop `for`** é uma estrutura de repetição usada para executar um bloco de código várias vezes, controlando o número de repetições com uma variável de controle.

### Estrutura básica:

```javascript
for (inicialização; condição; incremento) {
  // código a ser repetido
}
```

* **inicialização:** define a variável inicial do loop.
* **condição:** enquanto for verdadeira, o loop continua.
* **incremento:** atualização da variável após cada iteração.

### Exemplo prático:

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Número: " + i);
}
```

Esse código imprime os números de 0 a 4 no console.

### Vantagens do `for`:

* Controle preciso do número de repetições.
* Ideal para percorrer arrays e listas.
* Estrutura compacta e fácil de entender.

O loop `for` é essencial para automatizar tarefas repetitivas e trabalhar com coleções de dados em JavaScript.
<hr>

## 📘 Aula 16 - Loops FOR IN e FOR OF em JavaScript
JavaScript oferece duas formas especiais de loop para iterar sobre coleções: **`for...in`** e **`for...of`**, cada uma com usos diferentes.

### `for...in`

* Itera sobre **as chaves (índices ou propriedades)** de um objeto ou array.
* Ideal para acessar nomes de propriedades em objetos.

```javascript
const obj = { nome: "Ana", idade: 25 };

for (let chave in obj) {
  console.log(chave + ": " + obj[chave]);
}
// Saída:
// nome: Ana
// idade: 25
```

### `for...of`

* Itera **sobre os valores** de objetos iteráveis, como arrays, strings, etc.
* Perfeito para acessar diretamente os valores, sem precisar das chaves.

```javascript
const arr = [10, 20, 30];

for (let valor of arr) {
  console.log(valor);
}
// Saída:
// 10
// 20
// 30
```

### Diferenças principais:

| Loop       | Itera sobre            | Usado para                  |
| ---------- | ---------------------- | --------------------------- |
| `for...in` | Chaves ou propriedades | Objetos e arrays (índices)  |
| `for...of` | Valores                | Arrays, strings e iteráveis |

### Resumo

Use **`for...in`** para acessar propriedades de objetos, e **`for...of`** para percorrer valores em arrays e outras coleções iteráveis, garantindo código claro e eficiente.
<hr>

## 📘 Aula 17 - Loop While em JavaScript
O **loop `while`** executa repetidamente um bloco de código enquanto uma condição lógica for verdadeira. É usado quando não sabemos exatamente quantas vezes o código deve rodar, mas dependemos de uma condição para continuar.

### Estrutura básica:

```javascript
while (condição) {
  // código a ser repetido
}
```

O código dentro do `while` será executado enquanto a condição for verdadeira.

### Exemplo prático:

```javascript
let contador = 0;

while (contador < 5) {
  console.log("Contador: " + contador);
  contador++;
}
```

Esse código imprime números de 0 a 4 no console.

### Cuidados:

* É importante garantir que a condição se torne falsa em algum momento, para evitar loops infinitos que travam o programa.

O loop `while` é útil para repetições que dependem de uma condição variável e dinâmica durante a execução do programa.
<hr>

## 📘 Aula 18 - WHILE e DO WHILE em JavaScript: Entenda a Diferença
Os loops **`while`** e **`do...while`** executam um bloco de código repetidamente com base em uma condição, mas diferem no momento em que essa condição é verificada.

### `while`

* Verifica a condição **antes** de executar o bloco.
* Se a condição for falsa no início, o bloco pode não ser executado nenhuma vez.

```javascript
let contador = 0;

while (contador < 3) {
  console.log("while: " + contador);
  contador++;
}
```

### `do...while`

* Executa o bloco **pelo menos uma vez**, e só depois verifica a condição.
* Garante que o código rode uma vez mesmo que a condição já seja falsa.

```javascript
let contador = 0;

do {
  console.log("do...while: " + contador);
  contador++;
} while (contador < 3);
```

### Diferença principal

| Loop         | Quando verifica a condição | Execução garantida pelo menos uma vez? |
| ------------ | -------------------------- | -------------------------------------- |
| `while`      | Antes de executar          | Não                                    |
| `do...while` | Depois de executar         | Sim                                    |

### Resumo

Use `while` quando quiser verificar antes e só executar se a condição for verdadeira. Use `do...while` quando precisar garantir que o bloco execute pelo menos uma vez.
<hr>

## 📘 Aula 19 - Entenda as declarações BREAK e CONTINUE em JavaScript
As declarações **`break`** e **`continue`** controlam o fluxo de loops, permitindo que você modifique como e quando um loop é interrompido ou pula para a próxima iteração.

### `break`

* Interrompe totalmente o loop atual, saindo dele imediatamente.
* Útil para parar um loop quando uma condição específica for atingida.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // sai do loop quando i for 3
  }
  console.log(i);
}
// Saída: 0 1 2
```

### `continue`

* Pula para a próxima iteração do loop, ignorando o código que vem após dentro do bloco atual.
* Útil para pular certas iterações que não devem ser processadas.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // pula a iteração quando i for 2
  }
  console.log(i);
}
// Saída: 0 1 3 4
```

### Resumo

* Use **`break`** para sair do loop antecipadamente.
* Use **`continue`** para pular uma iteração e seguir para a próxima.

Essas declarações ajudam a controlar melhor o comportamento dos loops, tornando seu código mais eficiente e flexível.
<hr>

## 📘 Aula 20 - Aprendendo sobre FUNÇÕES em JavaScript #P1
Funções são blocos de código reutilizáveis que executam uma tarefa específica quando chamadas. Elas ajudam a organizar e modularizar o código.

### Definição básica de função:

```javascript
function saudacao() {
  console.log("Olá, mundo!");
}
```

### Chamando a função:

```javascript
saudacao(); // Executa o código dentro da função
```

### Funções podem receber parâmetros para trabalhar com dados:

```javascript
function soma(a, b) {
  return a + b;
}

console.log(soma(3, 4)); // Saída: 7
```

### Vantagens das funções:

* Reutilização de código.
* Organização e clareza.
* Facilita manutenção e testes.

Funções são fundamentais para construir programas estruturados e eficientes em JavaScript.
<hr>

## 📘 Aula 21 - FUNÇÕES com retorno em JavaScript #P2
Funções com **retorno** são aquelas que, ao serem chamadas, devolvem um valor que pode ser usado em outras partes do programa.

### Exemplo básico:

```javascript
function multiplica(a, b) {
  return a * b; // Retorna o resultado da multiplicação
}

let resultado = multiplica(5, 3);
console.log(resultado); // Saída: 15
```

### Como funciona:

* A palavra-chave `return` encerra a execução da função e envia o valor especificado para quem chamou a função.
* O valor retornado pode ser armazenado em variáveis ou usado diretamente.

### Importância do retorno:

* Permite que funções sejam usadas para calcular valores.
* Facilita a criação de códigos modulares e reutilizáveis.

Funções com retorno são essenciais para construir programas que manipulam e processam dados de forma eficiente.
<hr>

## 📘 Aula 22 - FUNÇÕES parametrizadas em JavaScript #P3
Funções parametrizadas recebem **valores de entrada** chamados parâmetros, que tornam as funções mais flexíveis e reutilizáveis para diferentes situações.

### Exemplo simples:

```javascript
function saudacao(nome) {
  console.log("Olá, " + nome + "!");
}

saudacao("Maria");  // Saída: Olá, Maria!
saudacao("João");   // Saída: Olá, João!
```

### Vantagens dos parâmetros:

* Permitem passar dados variados para a função.
* Evitam repetir código, pois a mesma função serve para diferentes entradas.

### Parâmetros padrão

Você pode definir valores padrão para parâmetros, usados quando nenhum valor é passado:

```javascript
function saudacao(nome = "amigo") {
  console.log("Olá, " + nome + "!");
}

saudacao();         // Saída: Olá, amigo!
saudacao("Lucas");  // Saída: Olá, Lucas!
```

Funções parametrizadas tornam seu código mais dinâmico e fácil de adaptar a diferentes necessidades.
<hr>

## 📘 Aula 23 - Parâmetros REST em funções JavaScript #P4
Parâmetros **REST** permitem que uma função receba um número indefinido de argumentos como um array, facilitando trabalhar com múltiplos valores.

### Sintaxe:

```javascript
function soma(...numeros) {
  let total = 0;
  for (let num of numeros) {
    total += num;
  }
  return total;
}

console.log(soma(1, 2, 3));       // Saída: 6
console.log(soma(4, 5, 6, 7, 8)); // Saída: 30
```

### Como funciona:

* O `...` antes do nome do parâmetro indica que todos os argumentos passados serão agrupados em um array chamado `numeros`.
* Assim, você pode passar quantos argumentos quiser.

### Vantagens:

* Flexibilidade para funções que precisam lidar com vários argumentos.
* Código mais limpo e fácil de manter.

Parâmetros REST são muito úteis para criar funções versáteis que processam listas de dados dinâmicas.
<hr>

## 📘 Aula 24 - Funções Anônimas em JavaScript #P1
Funções anônimas são funções **sem nome**, geralmente atribuídas a variáveis ou usadas como argumentos em outras funções. São úteis para criar blocos de código rápidos e temporários.

### Exemplo atribuído a uma variável:

```javascript
const saudacao = function() {
  console.log("Olá, mundo!");
};

saudacao(); // Saída: Olá, mundo!
```

### Exemplo como argumento (callback):

```javascript
setTimeout(function() {
  console.log("Executado após 2 segundos");
}, 2000);
```

### Características:

* Não têm nome próprio.
* Muito usadas em programação funcional e eventos.
* Permitem criar código mais compacto e flexível.

Funções anônimas são uma parte importante do JavaScript moderno para escrever código dinâmico e eficiente.
<hr>

## 📘 Aula 25 - Arrow Function em JavaScript
Arrow Functions são uma forma mais curta e moderna de escrever funções em JavaScript, com sintaxe mais simples e comportamentos específicos no uso do `this`.

### Exemplo básico:

```javascript
const soma = (a, b) => {
  return a + b;
};

console.log(soma(3, 4)); // Saída: 7
```

### Sintaxe ainda mais enxuta (retorno implícito):

```javascript
const multiplica = (a, b) => a * b;

console.log(multiplica(5, 6)); // Saída: 30
```

### Vantagens das Arrow Functions:

* Sintaxe compacta e clara.
* Não cria seu próprio `this`, herdando o contexto da função onde foi criada.
* Muito usadas em funções callback e programação funcional.

Arrow Functions facilitam escrever códigos mais limpos e modernos em JavaScript.
<hr>

## 📘 Aula 26 - Funções dentro de funções em JavaScript (Funções aninhadas)
Funções aninhadas são funções definidas dentro de outras funções. Elas ajudam a organizar o código e criar escopos locais.

### Exemplo:

```javascript
function saudacao(nome) {
  function mensagem() {
    return "Olá, " + nome + "!";
  }
  return mensagem();
}

console.log(saudacao("Ana")); // Saída: Olá, Ana!
```

### Como funciona:

* A função interna (`mensagem`) só pode ser acessada dentro da função externa (`saudacao`).
* Isso ajuda a proteger variáveis e criar lógica modular.

### Vantagens:

* Organização e encapsulamento do código.
* Evita poluir o escopo global.
* Facilita a reutilização e manutenção.

Funções aninhadas são poderosas para estruturar seu código de forma clara e segura.
<hr>

## 📘 Aula 27 - Funções Geradoras em JavaScript
Funções geradoras são funções especiais que podem pausar sua execução e retomá-la depois, permitindo gerar uma sequência de valores sob demanda.

### Como definir uma função geradora:

```javascript
function* contador() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
```

### Como usar:

```javascript
const gen = contador();

console.log(gen.next().value); // Saída: 0
console.log(gen.next().value); // Saída: 1
console.log(gen.next().value); // Saída: 2
```

### Explicação:

* A palavra-chave `function*` define uma função geradora.
* O comando `yield` pausa a função e retorna um valor.
* O método `next()` retoma a execução até o próximo `yield`.

### Vantagens:

* Permite controlar a execução e consumo de dados sob demanda.
* Útil para trabalhar com grandes coleções ou fluxos de dados infinitos.

Funções geradoras são poderosas para criar iteradores personalizados e controlar processos complexos.
<hr>

## 📘 Aula 28 - Aprendendo sobre o método MAP em JavaScript
O método **`map()`** é usado para transformar cada elemento de um array, criando um novo array com os resultados da função aplicada.

### Exemplo:

```javascript
const numeros = [1, 2, 3, 4];
const dobro = numeros.map(num => num * 2);

console.log(dobro); // Saída: [2, 4, 6, 8]
```

### Como funciona:

* `map()` recebe uma função callback que é aplicada a cada elemento do array.
* Retorna um novo array com os valores transformados, sem modificar o original.

### Vantagens:

* Facilita transformar dados em arrays.
* Código mais claro e funcional.

O método `map()` é essencial para trabalhar com coleções de dados de forma eficiente e elegante.
<hr>

## 📘 Aula 29 - Usando o operador THIS dentro de funções em JavaScript
O operador **`this`** referencia o contexto no qual a função está sendo executada. Seu valor varia dependendo de como a função é chamada.

### Exemplos básicos:

```javascript
const obj = {
  nome: "Carlos",
  saudacao: function() {
    console.log("Olá, " + this.nome);
  }
};

obj.saudacao(); // Saída: Olá, Carlos
```

### Com funções normais fora de objetos:

```javascript
function teste() {
  console.log(this);
}

teste(); // No navegador, retorna o objeto global (window)
```

### Particularidades:

* Em funções dentro de objetos, `this` aponta para o objeto.
* Em funções normais, `this` pode apontar para o objeto global (window) ou ser `undefined` no modo estrito.
* Em **arrow functions**, `this` é herdado do contexto externo.

### Importância:

Entender `this` é fundamental para manipular corretamente objetos, eventos e classes em JavaScript.
