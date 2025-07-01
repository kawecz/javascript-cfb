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
<hr>

## 📘 Aula 30 - Aprendendo o Método getElementById
O método `getElementById` no JavaScript serve para acessar um elemento HTML específico que tenha um atributo `id` correspondente. Ele retorna o elemento do DOM que possui aquele `id` ou `null` se não encontrar.

Exemplo:

```html
<div id="mensagem">Olá!</div>
<button id="botao">Clique</button>
```

```javascript
const mensagem = document.getElementById('mensagem');
mensagem.textContent = 'Texto alterado!';

const botao = document.getElementById('botao');
botao.addEventListener('click', () => {
  alert('Botão clicado!');
});
```

É importante lembrar que o `id` deve ser único na página. Com a referência do elemento, você pode alterar o texto, o estilo, os atributos e adicionar eventos.
<hr>

## 📘Aula 31 - Aprenda o Método getElementsByTagName

### 📘 **Introdução**

O método `getElementsByTagName` é usado para acessar elementos do DOM (Document Object Model) com base no nome da *tag* HTML, como `"div"`, `"p"`, `"li"`, etc. É uma ferramenta essencial quando queremos manipular ou consultar vários elementos de um mesmo tipo em uma página.

---

### 🧱 **Conceitos Fundamentais**

* **DOM (Document Object Model):** Representação em árvore de todos os elementos HTML de uma página.
* **`getElementsByTagName`:** Retorna uma *HTMLCollection* (uma lista parecida com um array) com todos os elementos que possuem a tag especificada.

```javascript
const paragrafos = document.getElementsByTagName("p");
```

Acima, `paragrafos` conterá todos os elementos `<p>` da página.

---

### 🔍 **Funcionamento Detalhado**

* **Sintaxe básica:**

```javascript
document.getElementsByTagName("tagName");
```

* **Parâmetro:** `"tagName"` – nome da tag em letras minúsculas (exceto em XML, que é *case-sensitive*).
* **Retorno:** uma **HTMLCollection**, que é ao vivo (*live*), ou seja, se o DOM mudar, a coleção muda automaticamente.

---

### ⚙️ **Etapas passo a passo**

1. O JavaScript acessa o documento HTML.
2. O método `getElementsByTagName` procura todos os elementos com a tag indicada.
3. Ele retorna uma coleção (lista).
4. Você pode percorrer essa coleção com um `for`, `for...of`, ou converter para `Array`.

```javascript
const divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
  divs[i].style.backgroundColor = "lightblue";
}
```

---

### 🧠 **Dicas importantes**

* O resultado **não é um array real**, mas pode ser convertido:

```javascript
const divsArray = Array.from(document.getElementsByTagName("div"));
```

* Você pode usar em qualquer elemento, não apenas em `document`:

```javascript
const nav = document.querySelector("nav");
const links = nav.getElementsByTagName("a");
```

---

### ⚠️ **Erros Comuns**

* Achar que retorna um único elemento (usa-se `getElementById` para isso).
* Esquecer que é uma coleção ao vivo (isso pode causar comportamentos inesperados).
* Tentar usar métodos de array diretamente (como `.forEach()`), sem converter.

---

### 🧪 **Exemplo Prático**

```html
<ul>
  <li>Maçã</li>
  <li>Banana</li>
  <li>Laranja</li>
</ul>

<script>
  const itens = document.getElementsByTagName("li");
  for (let item of itens) {
    item.style.color = "green";
  }
</script>
```

---

### 📚 **O Que Aprender Depois**

* `getElementById`
* `getElementsByClassName`
* `querySelector` e `querySelectorAll` (mais modernos e flexíveis)
* Manipulação de classes (`classList`)
* Eventos (`addEventListener`)

---
<hr>

## 📘Aula 32 - Aprenda o Método getElementsByClassName

## ✅ **Introdução**

O método **`getElementsByClassName`** é uma função do JavaScript utilizada para selecionar elementos HTML que possuem uma ou mais classes específicas. Faz parte das técnicas de **manipulação do DOM (Document Object Model)**, permitindo interagir, alterar ou acessar elementos da página de forma dinâmica.

---

## 🔑 **Fundamentos do Método**

* ✅ **Sintaxe:**

```javascript
document.getElementsByClassName('nomeDaClasse');
```

* ✅ **O que retorna?**
  Uma **HTMLCollection**, que é uma coleção de elementos (tipo uma lista), parecida com um array, mas **não é exatamente um array** (não possui todos os métodos como `map` ou `forEach` diretamente).

* ✅ **Características:**

* Busca **todos os elementos** que possuem a classe informada.

* O resultado é **dinâmico**, ou seja, se o DOM mudar, a coleção também muda.

* É **case-sensitive**, ou seja, diferencia maiúsculas e minúsculas.

---

## 🚀 **Exemplos na Prática**

### 🔸 Exemplo básico:

HTML:

```html
<div class="card">Card 1</div>
<div class="card">Card 2</div>
<div class="card">Card 3</div>
```

JavaScript:

```javascript
const cards = document.getElementsByClassName('card');

console.log(cards);  // Mostra a coleção de elementos com a classe "card"
console.log(cards[0]);  // Acessa o primeiro card
```

### 🔸 Alterando estilos:

```javascript
for (let i = 0; i < cards.length; i++) {
  cards[i].style.backgroundColor = 'lightblue';
}
```

---

## 💡 **Diferença para Outras Seleções**

| Método                     | Descrição                                       |
| -------------------------- | ----------------------------------------------- |
| `getElementById()`         | Retorna **um único** elemento por ID            |
| `getElementsByClassName()` | Retorna **vários** elementos por classe         |
| `getElementsByTagName()`   | Retorna elementos por tag (`div`, `p`, etc)     |
| `querySelector()`          | Retorna o **primeiro** elemento por seletor CSS |
| `querySelectorAll()`       | Retorna **todos** os elementos por seletor CSS  |

---

## ⚙️ **Trabalhando com HTMLCollection**

* Não possui métodos de array como `map`, `forEach` (em navegadores antigos), mas pode ser convertido em array:

### 🔸 Convertendo para array:

```javascript
const cardsArray = Array.from(cards);
cardsArray.forEach(card => {
  card.style.border = '2px solid red';
});
```

---

## ❌ **Erros comuns**

* Tentar usar métodos de array diretamente na HTMLCollection.
* Escrever o nome da classe errado (diferencia maiúsculas e minúsculas).
* Esquecer que é uma coleção e tentar manipular diretamente como um único elemento.

---

## 🏗️ **Exemplo Completo**

HTML:

```html
<button onclick="destacar()">Destacar Cards</button>
<div class="card">Card 1</div>
<div class="card">Card 2</div>
<div class="card">Card 3</div>
```

JavaScript:

```javascript
function destacar() {
  const cards = document.getElementsByClassName('card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = 'yellow';
    cards[i].style.fontWeight = 'bold';
  }
}
```
<hr>

## 📘Aula 33 - QuerySelector e QuerySelectorAll 

## ✅ **Introdução**

Os métodos **`querySelector`** e **`querySelectorAll`** são formas modernas e extremamente versáteis de selecionar elementos HTML utilizando **seletores CSS**. Eles são mais poderosos e flexíveis do que métodos mais antigos como `getElementById`, `getElementsByClassName` ou `getElementsByTagName`.

---

## 🔑 **Fundamentos dos Métodos**

| Método               | Descrição                                                       |
| -------------------- | --------------------------------------------------------------- |
| `querySelector()`    | Retorna **o primeiro elemento** que corresponde ao seletor CSS. |
| `querySelectorAll()` | Retorna **todos os elementos** que correspondem ao seletor CSS. |

---

## ⚙️ **Sintaxe**

```javascript
document.querySelector('seletorCSS');
document.querySelectorAll('seletorCSS');
```

✅ **O seletorCSS** funciona da mesma forma que no CSS:

* `#id` → seleciona por ID
* `.classe` → seleciona por classe
* `tag` → seleciona por nome da tag (`div`, `p`, `h1`, etc.)
* Combinadores → `div p`, `header .menu`, etc.

---

## 🚀 **Exemplos na Prática**

### 🔸 **`querySelector()` – Retorna o primeiro elemento**

HTML:

```html
<p class="text">Primeiro parágrafo</p>
<p class="text">Segundo parágrafo</p>
```

JavaScript:

```javascript
const p = document.querySelector('.text');
console.log(p.textContent); // Resultado: "Primeiro parágrafo"
```

---

### 🔸 **`querySelectorAll()` – Retorna todos os elementos**

```javascript
const textos = document.querySelectorAll('.text');

textos.forEach(elemento => {
  console.log(elemento.textContent);
});
```

🟰 Resultado:

```
Primeiro parágrafo
Segundo parágrafo
```

---

## 🔥 **Exemplos de Seletores CSS no JavaScript**

| Seletor                  | Significado                                     |
| ------------------------ | ----------------------------------------------- |
| `'#menu'`                | ID menu                                         |
| `'.btn'`                 | Classe btn                                      |
| `'header nav ul li'`     | Todos os `<li>` dentro de `<nav>` no `<header>` |
| `'input[type="text"]'`   | Input do tipo texto                             |
| `'div > p'`              | `<p>` filho direto de `<div>`                   |
| `'section:nth-child(2)'` | Segundo filho da section                        |

---

## 📦 **Diferenças Importantes**

| Característica          | `querySelector`                | `querySelectorAll`            |
| ----------------------- | ------------------------------ | ----------------------------- |
| Retorno                 | Primeiro elemento              | Lista de elementos (NodeList) |
| Tipo de coleção         | Element (ou null se não achar) | NodeList (semelhante a array) |
| Suporte a `forEach()`   | ❌ (no elemento único)          | ✅                             |
| Atualiza dinamicamente? | ❌ (NodeList estático)          | ❌ (NodeList é estático)       |

---

## ❗ Atenção

* **`querySelectorAll()`** retorna uma **NodeList**, que é parecida com array, mas não tem todos os métodos de array antigo. No entanto, já suporta **`forEach()`** nos navegadores modernos.
* Diferente de `getElementsByClassName`, que atualiza automaticamente quando o DOM muda, **NodeList não se atualiza dinamicamente**.

---

## 🏗️ **Exemplo Completo**

HTML:

```html
<button class="btn">Button 1</button>
<button class="btn">Button 2</button>
<button class="btn">Button 3</button>
```

JavaScript:

```javascript
const firstButton = document.querySelector('.btn');
firstButton.style.backgroundColor = 'red';

const allButtons = document.querySelectorAll('.btn');
allButtons.forEach(button => {
    button.style.color = 'white';
});
```

---

## 💡 **Conclusão**

Os métodos **`querySelector`** e **`querySelectorAll`** são extremamente poderosos, oferecendo flexibilidade para selecionar elementos de qualquer complexidade usando seletores CSS. Eles são a escolha recomendada para a maioria dos casos em projetos modernos de JavaScript.

<hr>

## 📘Aula 34 - Adicionando eventos com addEventListener

## ✅ **Introdução**

O método **`addEventListener()`** permite adicionar ouvintes de eventos a elementos HTML. Isso significa que você pode executar uma função automaticamente quando um evento específico ocorre, como cliques, movimentos do mouse, teclas pressionadas, envio de formulários, entre outros.

---

## 🔑 **Fundamentos do `addEventListener()`**

### ✅ **Sintaxe:**

```javascript
element.addEventListener('tipoDoEvento', função);
```

### ✅ **Parâmetros:**

* `'tipoDoEvento'`: uma string que define o tipo de evento (ex.: `'click'`, `'mouseover'`, `'keydown'`, `'submit'`).
* `função`: uma função que será executada quando o evento ocorrer. Pode ser uma função nomeada, anônima ou arrow function.

---

## 🚀 **Exemplos na Prática**

### 🔸 **Exemplo 1: Clique em botão**

HTML:

```html
<button id="btn">Clique Aqui</button>
```

JavaScript:

```javascript
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    alert('Você clicou no botão!');
});
```

---

### 🔸 **Exemplo 2: Mouse passando sobre um elemento**

HTML:

```html
<div class="caixa">Passe o mouse aqui</div>
```

CSS:

```css
.caixa {
    width: 200px;
    height: 100px;
    background-color: lightblue;
}
```

JavaScript:

```javascript
const box = document.querySelector('.caixa');

box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'lightgreen';
});

box.addEventListener('mouseout', () => {
    box.style.backgroundColor = 'lightblue';
});
```

---

### 🔸 **Exemplo 3: Capturar envio de formulário**

HTML:

```html
<form id="form">
    <input type="text" id="name" placeholder="Name">
    <input type="submit" value="Send">
</form>
```

JavaScript:

```javascript
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita recarregar a página
    const name = document.getElementById('name').value;
    alert(`Olá, ${name}`);
});
```

---

## ⚙️ **Eventos Comuns**

| Evento        | Descrição                    |
| ------------- | ---------------------------- |
| `'click'`     | Clique                       |
| `'mouseover'` | Mouse sobre o elemento       |
| `'mouseout'`  | Mouse sai do elemento        |
| `'keydown'`   | Pressionar tecla             |
| `'submit'`    | Envio de formulário          |
| `'dblclick'`  | Clique duplo                 |
| `'change'`    | Mudança em inputs ou selects |
| `'input'`     | Sempre que algo é digitado   |

---

## ✅ **Vantagens do `addEventListener()`**

* Pode adicionar **vários ouvintes** para o mesmo evento no mesmo elemento.
* Mantém o código **separado do HTML**, mais organizado e limpo.
* Permite remover eventos, se necessário, usando `removeEventListener()`.

---

## ❌ **Erros comuns**

* Esquecer de selecionar corretamente o elemento (`null` error).
* Não usar `preventDefault()` em eventos como `submit` se quiser evitar recarregar a página.
* Escrever errado o nome do evento (`'Click'` errado → deveria ser `'click'` → é case sensitive).

---

## 🏗️ **Exemplo Completo**

```html
<button id="btn">Clique</button>
<div id="box">Caixa</div>
```

```javascript
const btn = document.getElementById('btn');
const box = document.getElementById('box');

btn.addEventListener('click', () => {
    box.innerText = 'O botão foi clicado!';
    box.style.backgroundColor = 'yellow';
});
```

---

## 🔥 **Conclusão**

O método **`addEventListener()`** é essencial no JavaScript moderno para criar páginas web interativas. Ele permite responder a ações do usuário de forma elegante, organizada e eficiente.

---
<hr>

## 📘Aula 37 - Parando a propagação do evento com o método stopPropagation

## O que é propagação de eventos?

Em JavaScript, quando um evento ocorre em um elemento, ele não apenas é disparado nesse elemento, mas também em todos os seus ancestrais na árvore do DOM. Esse processo é chamado de **propagação de eventos** ou **bubbling**.

## Como `stopPropagation()` funciona

O método `stopPropagation()` é usado para interromper essa propagação, evitando que o evento suba na hierarquia do DOM.

```javascript
elemento.addEventListener('click', function(event) {
  event.stopPropagation();
  // O evento não será propagado para os elementos pais
});
```

## Exemplo prático

```html
<div id="pai" style="padding: 20px; background: lightblue;">
  <div id="filho" style="padding: 20px; background: lightcoral;">
    Clique-me
  </div>
</div>

<script>
  document.getElementById('pai').addEventListener('click', function() {
    alert('Elemento pai clicado!');
  });

  document.getElementById('filho').addEventListener('click', function(event) {
    alert('Elemento filho clicado!');
    event.stopPropagation(); // Impede que o evento chegue ao pai
  });
</script>
```

## Quando usar `stopPropagation()`

- Quando você tem elementos aninhados com handlers de eventos e quer que apenas o elemento mais interno responda
- Para evitar que eventos padrão do navegador sejam acionados
- Em menus dropdown ou outros componentes interativos onde cliques internos não devem afetar o container principal

## Diferença entre `stopPropagation()` e `stopImmediatePropagation()`

- `stopPropagation()`: impede que o evento se propague para elementos pais
- `stopImmediatePropagation()`: além de parar a propagação, também impede que outros listeners do mesmo evento no mesmo elemento sejam executados

## Cuidados ao usar

- Use com moderação, pois pode interferir com outros scripts que esperam que a propagação ocorra
- Pode tornar a depuração mais difícil se usado excessivamente
- Nem sempre é a melhor solução - às vezes é melhor verificar `event.target` no handler

<hr>

## 📘Aula 38 Entendendo a relação dos elementos no DOM

## Hierarquia do DOM

O DOM (Document Object Model) é organizado como uma árvore de nós, onde:

1. **Elemento Raiz (Root)**: É o nó superior da hierarquia, representado pelo objeto `document`. Todo documento HTML começa com este nó.

2. **Elementos Filhos (Child Nodes)**: São elementos diretamente contidos por outro elemento (o pai).

## Relações entre elementos

- **parentNode**: Acessa o nó pai de um elemento
- **childNodes**: Retorna uma lista de todos os filhos diretos (incluindo nós de texto)
- **children**: Retorna apenas os elementos filhos (ignora nós de texto)
- **firstChild** / **lastChild**: Acessa o primeiro/último filho
- **nextSibling** / **previousSibling**: Acessa elementos no mesmo nível

## Exemplo prático

```html
<div id="pai"> <!-- Elemento pai -->
  <p>Primeiro parágrafo</p> <!-- Filho do div -->
  <p>Segundo parágrafo</p> <!-- Irmão do primeiro parágrafo -->
</div>
```

```javascript
const pai = document.getElementById('pai');
console.log(pai.children); // HTMLCollection com os dois elementos <p>
console.log(pai.firstChild); // Primeiro nó filho (pode ser um nó de texto)
console.log(pai.children[0].nextSibling); // Próximo irmão do primeiro parágrafo
```

## Métodos úteis para navegação

- `querySelector()` / `querySelectorAll()`: Seleciona elementos por seletor CSS
- `getElementById()`: Seleciona por ID
- `getElementsByClassName()`: Seleciona por classe
- `getElementsByTagName()`: Seleciona por tag
<hr>

## 📘Aula 39 Entendendo a relação dos elementos no DOM

### 🔹 1. O que é o DOM?

* DOM é a **representação em árvore do HTML** que o navegador cria.
* Cada elemento HTML é um **nó (node)** da árvore.
* Com o DOM, podemos **navegar entre elementos pais, filhos e irmãos**.

---

### 🔹 2. Principais Propriedades e Métodos para Navegar no DOM

#### 📌 `hasChildNodes()`

* **Verifica** se um elemento possui **nós filhos** (inclusive textos, comentários, etc.).
* **Retorna:** `true` ou `false`

```javascript
const div = document.querySelector('div');
console.log(div.hasChildNodes()); // true se tiver filhos
```

---

#### 📌 `childNodes`

* Retorna uma **NodeList** com **todos os filhos** de um elemento (incluindo espaços, textos e comentários).
* Se quiser apenas os elementos HTML, use `children`.

```javascript
const div = document.querySelector('div');
console.log(div.childNodes); // pode incluir <p>, "\n", etc.
```

---

#### 📌 `children`

* Retorna **apenas os elementos filhos** (ignora textos e espaços).

```javascript
const div = document.querySelector('div');
console.log(div.children); // HTMLCollection com apenas tags filhas
```

---

#### 📌 `parentElement`

* Retorna o **elemento pai** de um elemento.
* Se o pai não for um elemento HTML, retorna `null`.

```javascript
const span = document.querySelector('span');
console.log(span.parentElement); // mostra o elemento pai
```

---

#### 📌 `firstChild` e `lastChild`

* Retornam o **primeiro** ou o **último nó filho** (inclusive textos).

```javascript
console.log(div.firstChild);
console.log(div.lastChild);
```

---

#### 📌 `firstElementChild` e `lastElementChild`

* Retornam o **primeiro** ou **último filho que seja um elemento HTML**.

```javascript
console.log(div.firstElementChild); // ignora textos
```

---

#### 📌 `nextSibling` e `previousSibling`

* Retornam os **irmãos adjacentes** (podem ser textos ou elementos).

```javascript
const p = document.querySelector('p');
console.log(p.nextSibling); // pode ser um espaço/texto
```

---

#### 📌 `nextElementSibling` e `previousElementSibling`

* Retornam o **próximo ou anterior irmão elemento**.

```javascript
console.log(p.nextElementSibling); // próxima tag irmã
```

---

### 🧠 **Resumo Visual da Árvore DOM**

```html
<div id="pai">
  <p>Texto</p>
  <span>Outro texto</span>
</div>
```

* `div` → pai
* `p` e `span` → filhos de `div`
* `p.nextElementSibling` → `span`
* `span.parentElement` → `div`
* `div.childNodes` → `[<p>, #text, <span>]`
* `div.children` → `[<p>, <span>]`

---

### 🚫 Dicas e Armadilhas

* Use `children` se quiser apenas **tags HTML**.
* `childNodes` inclui **tudo**, inclusive **quebras de linha e espaços**.
* Sempre teste `hasChildNodes()` para evitar erros em elementos vazios.

---

### ✅ Exemplo Prático:

```html
<div id="container">
  <h1>Título</h1>
  <p>Parágrafo</p>
</div>
```

```javascript
const container = document.querySelector("#container");

console.log(container.hasChildNodes());            // true
console.log(container.childNodes);                 // NodeList (inclui textos)
console.log(container.children);                   // [h1, p]
console.log(container.firstElementChild);          // <h1>
console.log(container.children[1].previousElementSibling); // <h1>
```

---

### 📝 Conclusão

Compreender como os elementos se relacionam no DOM permite:

* Acessar qualquer parte da página dinamicamente.
* Manipular, criar ou remover elementos de forma eficiente.
* Construir **interações ricas e dinâmicas** com JavaScript.

Dominar propriedades como `parentElement`, `childNodes`, `hasChildNodes()` e suas variantes é essencial para todo desenvolvedor web.

<hr>



## 📘 Aula 40 – Criando novos elementos e adicionando no DOM

---

### ✅ **Objetivo da Aula**

Aprender como **criar elementos HTML dinamicamente**, definir seus conteúdos e atributos, e **inseri-los corretamente na página** (DOM).

---

### 🔹 1. `document.createElement(tagName)`

* **Cria um novo elemento HTML** com a tag especificada.
* O elemento ainda **não está no DOM** até você adicioná-lo.

```javascript
const novoParagrafo = document.createElement('p'); // cria <p></p>
```

---

### 🔹 2. `element.textContent` ou `element.innerText`

* Define o **conteúdo textual** do elemento criado.

```javascript
novoParagrafo.textContent = "Olá, eu fui criado via JS!";
```

---

### 🔹 3. `element.setAttribute(nome, valor)`

* Adiciona atributos ao elemento (como `id`, `class`, etc.).

```javascript
novoParagrafo.setAttribute('class', 'paragrafo-dinamico');
```

---

### 🔹 4. Inserindo no DOM

Existem três formas principais de adicionar um elemento ao DOM:

#### 📌 `appendChild()`

* Adiciona o **novo nó no final** da lista de filhos do elemento pai.

```javascript
document.body.appendChild(novoParagrafo);
```

#### 📌 `prepend()`

* Adiciona o novo elemento como o **primeiro filho**.

```javascript
document.body.prepend(novoParagrafo);
```

#### 📌 `insertBefore(novoElemento, elementoDeReferencia)`

* Adiciona antes de um filho específico.

```javascript
const ref = document.querySelector('#ref');
document.body.insertBefore(novoParagrafo, ref);
```

---

### 🔹 5. Exemplo Completo

```javascript
// 1. Criar o elemento
const div = document.createElement('div');

// 2. Adicionar conteúdo
div.textContent = 'Essa div foi criada dinamicamente!';

// 3. Adicionar atributos
div.setAttribute('id', 'novaDiv');
div.setAttribute('class', 'box');

// 4. Adicionar ao DOM
document.body.appendChild(div);
```

---

### 🧠 Dicas Importantes

| Função                      | O que faz                           |
| --------------------------- | ----------------------------------- |
| `createElement()`           | Cria o elemento (ainda fora do DOM) |
| `appendChild()`             | Adiciona o elemento ao final        |
| `prepend()`                 | Adiciona o elemento no início       |
| `setAttribute()`            | Define atributos                    |
| `textContent` / `innerText` | Define texto interno                |
| `insertBefore()`            | Adiciona antes de outro elemento    |

---

### ⚠️ Evite:

* Usar `innerHTML` em vez de `createElement()` para criar elementos:
  Isso pode gerar problemas de segurança (XSS).
* Esquecer de adicionar o elemento ao DOM (ele não aparece se não for inserido).

---

### ✅ Aplicação prática:

Você pode usar isso para:

* Criar elementos de lista automaticamente.
* Adicionar cards de produtos.
* Exibir mensagens personalizadas no site.
* Criar elementos baseados em interações do usuário (eventos).

---

### 📝 Conclusão

A criação dinâmica de elementos com `createElement()` e sua inserção no DOM é **essencial para construir interfaces interativas**, como menus, cards, notificações e componentes personalizados com JavaScript puro, sem frameworks.

<hr>
