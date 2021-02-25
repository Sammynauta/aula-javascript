/**
 NESSA AULA VAMOS TRATAR DE TEMAS DIVERSOS, ENTÃO FIQUE ATENTO!
 
 - Gerar frações aleatórias com JavaScript PASSO 1
 - Gere números inteiros aleatórios com JavaScript PASSO 2
 - Gerar números inteiros aleatórios dentro de um intervalo PASSO 3
 - Use a função parseInt PASSO 4
 - Use a função parseInt com um Radix PASSO 5
 - Use o operador condicional (ternário) PASSO 6
 - Use vários operadores condicionais (ternários) PASSO 7
 - Use a recursão para criar uma contagem regressiva PASSO 8
 - Use a recursão para criar um intervalo de números PASSO 9
 */

 /* PASSO 1

 Os números aleatórios são úteis para criar um comportamento aleatório.
JavaScript tem uma Math.random()função que gera um número decimal aleatório entre 0(inclusivo) e não
exatamente até 1(exclusivo). Assim, Math.random()pode retornar um, 0mas nunca retornar um1

Nota
Como no armazenamento de valores com o operador igual , todas as chamadas de função serão resolvidas
antes da returnexecução, portanto, podemos determinar returno valor da Math.random()função.
 */

function randomFraction() {

    return Math.random();
  }

console.log(randomFraction());


/* PASSO 2

É ótimo podermos gerar números decimais aleatórios, mas é ainda mais útil se o usarmos para gerar
números inteiros aleatórios.

Use Math.random()para gerar um decimal aleatório.
Multiplique esse decimal aleatório por 20.
Use outra função Math.floor()para arredondar o número para baixo até o número inteiro mais próximo.
Lembre-se de que Math.random()nunca pode retornar a 1e, como estamos arredondando para baixo, é
impossível realmente obter 20. Essa técnica nos dará um número inteiro entre 0e 19.

Juntando tudo, é assim que nosso código se parece:

Math.floor(Math.random() * 20);

Estamos chamando Math.random(), multiplicando o resultado por 20 e, em seguida, passando o valor
para Math.floor()funcionar para arredondar o valor para o número inteiro mais próximo.
*/


// Use esta técnica para gerar e retornar um número inteiro aleatório entre 0 e 9.
function randomWholeNum() {
  
    return  Math.floor(Math.random() * 10) ;
  }

console.log(randomWholeNum());
/* PASSO 3
Em vez de gerar um número inteiro aleatório entre zero e um determinado número como fizemos antes,
podemos gerar um número inteiro aleatório que se enquadra em um intervalo de dois números específicos.

Para fazer isso, vamos definir um número mínimo mine um número máximo max.

Aqui está a fórmula que usaremos. Reserve um momento para lê-lo e tente entender o que este código está fazendo:

Math.floor(Math.random() * (max - min + 1)) + min;
*/

function randomRange(myMin, myMax) {
    
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }

console.log(randomRange(5,15));


/* PASSO 4

A parseInt()função analisa uma string e retorna um inteiro. Aqui está um exemplo:

var a = parseInt("007");

A função acima converte a string "007" em um inteiro 7. Se o primeiro caractere da string não puder
ser convertido em um número, ele retornará NaN.

Use parseInt()na convertToIntegerfunção para que ela converta a
string de entrada strem um inteiro e a retorne.
*/

function convertToInteger(str) {
    return parseInt(str);
  }
  
console.log(convertToInteger("56"));


/* PASSO 5
A parseInt()função analisa uma string e retorna um inteiro. Leva um segundo argumento para a raiz,
que especifica a base do número na string. A raiz pode ser um número inteiro entre 2 e 36.

A chamada de função se parece com:

parseInt(string, radix);

E aqui está um exemplo:

var a = parseInt("11", 2);

A variável raiz diz que "11" está no sistema binário, ou base 2. Este exemplo converte a
string "11" em um inteiro 3.
*/

function convertToInteger(str) {
    return parseInt(str,2);
    }
    
console.log(convertToInteger("10011"));


/* PASSO 6

O operador condicional , também chamado de operador ternário , pode ser usado como
uma expressão if-else de uma linha.

A sintaxe é:

condition ? expression-if-true : expression-if-false;
*/

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

console.log(checkEqual(1, 2));


/* PASSO 7

No desafio anterior, você usou um único operador condicional. Você também pode encadea-los
para verificar se há várias condições.
É considerada prática recomendada formatar vários operadores condicionais de forma que cada condição
esteja em uma linha separada, conforme mostrado acima. O uso de vários operadores condicionais sem
indentação adequada pode tornar seu código difícil de ler.
*/

function checkSign(num) {
    return (num === 0) ? "zero"
    : (num > 0) ? "positive"
    : "negative";
  
}
   
   console.log(checkSign(10));


/* PASSO 8

Em um desafio anterior , você aprendeu como usar a recursão para substituir um loop for.
Agora, vamos examinar uma função mais complexa que retorna uma matriz de inteiros consecutivos
começando com 1o número passado para a função.

Conforme mencionado no desafio anterior, haverá um caso base . O caso base informa à função recursiva quando
ela não precisa mais se chamar. É um caso simples em que o valor de retorno já é conhecido. Haverá também uma
chamada recursiva que executa a função original com diferentes argumentos. Se a função for escrita corretamente,
eventualmente o caso base será alcançado.

Por exemplo, digamos que você quer escrever uma função recursiva que retorna um array contendo os números 1
através n. Esta função precisará aceitar um argumento,, que nrepresenta o número final. Em seguida,
precisará se autodenominar com valores progressivamente menores de naté atingir 1.
*/

// solução 1
function countdown(n){
    return (n < 1) ? [] : [n, ...countdown(n-1)];
  }
  
  console.log(countdown(10));


// solução 2
  function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
  }

// solução 3
  function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.splice(0, 0, n);
      return arr;
    }
  }

// solução 4
  function countdown(n){
    return n < 1 ? [] : [n].concat(countdown(n - 1));
 }

 /* PASSO 9
 
Continuando com o desafio anterior, oferecemos a você outra oportunidade de criar uma função recursiva para
resolver um problema.

Definimos uma função nomeada rangeOfNumberscom dois parâmetros. A função deve retornar uma matriz de
inteiros que começa com um número representado pelo startNumparâmetro e termina com um número representado
pelo endNumparâmetro. O número inicial será sempre menor ou igual ao número final. Sua função deve usar recursão
chamando a si mesma e não usar loops de nenhum tipo. Também deve funcionar para casos em que startNume endNum
são iguais.
*/

function rangeOfNumbers(startNum, endNum) {
    return startNum === endNum ? [startNum]
    : [...rangeOfNumbers(startNum, endNum - 1), endNum];
  }
  
  console.log(rangeOfNumbers(1,5));

//FIM DO CONTEUDO BÁSICO
//FIM DO CONTEUDO BÁSICO
//FIM DO CONTEUDO BÁSICO
//FIM DO CONTEUDO BÁSICO
//FIM DO CONTEUDO BÁSICO
//FIM DO CONTEUDO BÁSICO
//FIM DO CONTEUDO BÁSICO
//FIM DO CONTEUDO BÁSICO
//FIM DO CONTEUDO BÁSICO
//FIM DO CONTEUDO BÁSICO
//FIM DO CONTEUDO BÁSICO