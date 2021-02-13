//Conceitos Basicos parte02

/*
- Escreva JavaScript reutilizável com funções (PASSO1)
- Passando Valores para Funções com Argumentos (PASSO2)
- Escopo e funções globais (PASSO3)
- Escopo e funções locais (PASSO4)
- Escopo Global vs. Local em Funções(PASSO5)
- Retorne um valor de uma função com retorno (PASSO6)
- Compreendendo o valor indefinido retornado de uma função (PASSO7)
- Atribuição com valor devolvido (PASSO8)
- Ficar na fila (PASSO9)
- Compreendendo os valores booleanos (PASSO10)
- Use lógica condicional com instruções IF (PASSO11)
- Comparação com o operador de igualdade (PASSO12)
- Comparação com o operador de igualdade estrita (PASSO13)
*/

//(PASSO1)
function reusableFunction(/* aqui dentro vai parametro */) {
    console.log("Hi World");
}
reusableFunction();//chamando a função.


//(PASSO2)
function functionWithArgs(a,b) {
    console.log(a + b);
}
//NA CHAMADA DA FUNÇAO, NOS CHAMAMOS COM ARGUMENTOS INSERIDOS E OS PARAMETROS ASSUMEM ESSE VALOR.
// OBSERVE QUE INSERIMOS ARGUMENTOS DIFERENTES.
functionWithArgs(1,2); //ARGUMENTOS1
functionWithArgs(7,9); //ARGUMENTOS2

//Result
3
16


//(PASSO3)
//Variáveis ​​que são usadas sem a palavra-chave var são criadas automaticamente no escopo global.

// Declare a variável myGlobal abaixo desta linha
var myGlobal = 10
function fun1() {
  // Atribua 5 para oopsGlobal Aqui
  oopsGlobal = 5;//criada no escopo global.
}
fun1();
// Apenas altere o código acima desta linha

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//(PASSO4)
/*As variáveis ​​que são declaradas dentro de uma função, assim como os parâmetros da função, 
têm escopo local. Isso significa que eles só são visíveis dentro dessa função.*/

function myLocalScope() {
// Altere apenas o código abaixo desta linha
  var myVar = 5;
    console.log(myVar);
  }
  myLocalScope(myVar);


  //(PASSO5)
  /*É possível ter variáveis ​​locais e globais com o mesmo nome. Ao fazer isso, a variável local 
  tem precedência sobre a variável global.*/

  var roupaNova = "Camiseta";

  function myOutfit() {
    // Only change code below this line
  var roupaNova = "Cachecol";
  
  
    // Only change code above this line
    return roupaNova;
  }
  
  myOutfit();

  //Result
  myOutfit = "Cachecol";


  //(PASSO6)
  /*Podemos passar valores parauma função com argumentos. 
  Você pode usar uma instrução de retorno para enviar um valor de volta de uma função.*/

  function timesFive (num) {
    return num * 5;
}

var var1 = timesFive(5); //25
var var2 = timesFive(2); //10
var var3 = timesFive(0); // 0


//(PASSO7)
/** 
Uma função pode incluir a instrução de retorno, mas não é obrigatório.
No caso de a função não ter um comando return, quando você a chama,
a função processa o código interno, mas o valor retornado é indefinido.
*/

var sum = 0;

function addThree() {
  sum += 3;
}
addThree();


//(PASSO8)
/*
se você se lembra de nossa discussão sobre Armazenamento de valores com o operador de atribuição, 
tudo à direita do sinal de igual é resolvido antes que o valor seja atribuído. 
Isso significa que podemos pegar o valor de retorno de uma função e atribuí-lo a uma variável.
*/

var processado = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processado = processArg(7);

// processado = (7 + 3) / 5; 

//Result
processado = 2;


//(PASSO9)
function nextInLine(arr, item) {
    arr.push(item);

    return arr.shift();
  }

  var testArr = [1,2,3,4,5];
  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  // Result
"Antes:" [1,2,3,4,5]
1
"Depois:" [2,3,4,5,6]


//(PASSO10)
function welcomeToBooleans() {
 // modique a funçao welcomeToBooleans para que ela retorne true.
    return false;
    //modficando.
    return true;
}

//(PASSO11)
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
  
  }
  trueOrFalse(true);
  trueOrFalse(false);


  //(PASSO12)
  function testEqual(val) {
    if (val == 12) {
      return "Equal";
    }
    return "Not Equal";
  }
  
  console.log(testEqual(10));

  /**
testEqual (10) deve retornar "Not Equal"

testEqual (12) deve retornar "Equal"

testEqual ("12") deve retornar "Equal"

Você deve usar o operador ==
*/


//(PASSO13)
/*Se os valores comparados tiverem tipos diferentes, 
eles serão considerados desiguais e o operador de igualdade estrita retornará falso.*/

function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  console.log(testStrict(10));