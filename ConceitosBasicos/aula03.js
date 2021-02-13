//Conceitos Basicos parte03

/*
- Pratique comparar valores diferentes (PASSO1)
- Comparação com o operador de desigualdade (PASSO2)
- Comparação com o operador de desigualdade estrita (PASSO3)
- Comparação com o operador maior do que (PASSO4)
- Comparação com o maior ou igual ao operador (PASSO5)
- Comparação com o menos que o operador (PASSO6)
- Comparação com o operador menor ou igual ao (PASSO7)
- Comparações com a lógica && o operador (PASSO8)
- Comparações com o operador lógico ||(PASOO9)
- Apresentando outras declarações ELSE (PASSO10)
*/

//(PASSO1)
/*
 Se os valores comparados não forem do mesmo tipo, o operador de igualdade executará uma conversão de tipo e,
 em seguida, avaliará os valores. No entanto, o operador de igualdade estrita
comparará o tipo de dados e o valor no estado em que se encontram, sem converter um tipo no outro.
 */

function compareEquality(a, b) {
    if (a === b) {
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");

//(PASSO2)
/*
O operador de desigualdade ( !=) é o oposto do operador de igualdade. Significa "Diferente" e retorna false onde
a igualdade retornaria true e vice-versa . Como o operador de igualdade, o operador de desigualdade
converterá tipos de dados de valores durante a comparação.
------------------------------------------------------------------------
Adicione o operador de desigualdade !=na ifinstrução para que a 
função retorne "Diferente" quando valnão for equivalente a99
   */

  function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

  //(PASSO3)
/**
O operador de desigualdade estrita ( !==) é o oposto lógico do operador de igualdade estrita.
Significa "Estritamente diferente" e retorna falseonde a igualdade
estrita retornaria truee vice-versa . A desigualdade estrita não converterá os tipos de dados.
-----------------------------------------------------

Adicione o operador de desigualdade estrita à ifinstrução para que a função retorne
" valDiferente " quando não for estritamente igual a17
 */

function testStrictNotEqual(val) {
    if (val !== 17) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);


//(PASSO4)
/*
O operador maior que ( >) compara os valores de dois números.
Se o número à esquerda for maior que o número à direita, ele retorna true.
Caso contrário, ele retorna false.
-----------------------------------------------------

testGreaterThan(0) deve retornar "10 ou menos"

testGreaterThan(10) deve retornar "10 ou menos"

testGreaterThan(11) deve retornar "Acima de 10"

testGreaterThan(99) deve retornar "Acima de 10"

testGreaterThan(100) deve retornar "Acima de 10"

testGreaterThan(101) deve retornar "Acima de 100"

testGreaterThan(150) deve retornar "Acima de 100"
*/

function testGreaterThan(val) {
    if (val > 100) { 
      return "Acima de 100";
    }
  
    if (val > 10) {  
      return "Acima de 10";
    }
  
    return "10 ou menoss";
  }
  
  testGreaterThan(10);

//(PASSO5)
 /*
 O maior ou igual a operator ( >=) compara os valores de dois números.
Se o número à esquerda for maior ou igual ao número à direita,
ele retorna true. Caso contrário, ele retorna false.
--------------------------------------------------------------------

testGreaterOrEqual(0) deve retornar "Menos de 10"

testGreaterOrEqual(9) deve retornar "Menos de 10"

testGreaterOrEqual(10) deve retornar "10 ou mais"

testGreaterOrEqual(11) deve retornar "10 ou mais"

testGreaterOrEqual(19) deve retornar "10 ou mais"

testGreaterOrEqual(100) deve retornar "20 ou mais"

testGreaterOrEqual(21) deve retornar "20 ou mais"
 */

function testGreaterOrEqual(val) {
    if (val >= 20) { 
      return "20 ou mais";
    }
  
    if (val >= 10) {
      return "10  ou mais";
    }
  
    return "menos que 10";
  }
  
  testGreaterOrEqual(10);

//(PASSO6)
  /*
  O operador menor que ( <) compara os valores de dois números.
Se o número à esquerda for menor que o número à direita, ele retorna true.
Caso contrário, ele retorna false.
---------------------------------------

testLessThan(0) deve retornar "Abaixo de 25"

testLessThan(24) deve retornar "Abaixo de 25"

testLessThan(25) deve retornar "Abaixo de 55"

testLessThan(54) deve retornar "Abaixo de 55"

testLessThan(55) deve retornar "55 ou mais"

testLessThan(99) deve retornar "55 ou mais"
  */

 function testLessThan(val) {
    if (val < 25) {  
      return "abaixo de 25";
    }
  
    if (val < 55) {
      return "abaixo 55";
    }
  
    return "55 ou mais";
  }
  
  testLessThan(10);

  //(PASSO7)
  /*
 O menor ou igual a operator ( <=) compara os valores de dois números.
Se o número à esquerda for menor ou igual ao número à direita, ele retorna true. 
Se o número à esquerda for maior que o número à direita, ele retornará false.
--------------------------------------------------------------------
testLessOrEqual(0) deve retornar "Menor que ou igual a 12"

testLessOrEqual(11) deve retornar "Menor que ou igual a 12"

testLessOrEqual(12) deve retornar "Menor que ou igual a 12"

testLessOrEqual(23) deve retornar "Menor que ou igual a 24"

testLessOrEqual(24) deve retornar "Menor que ou igual a 24"

testLessOrEqual(25) deve retornar "Mais de 24"

testLessOrEqual(55) deve retornar "Mais de 24"
  */


 function testLessOrEqual(val) {
    if (val <= 12) {  
      return "Menor ou igual a 12";
    }
  
    if (val <= 24) { 
      return "Menor ou igual a 24";
    }
  
    return "Mais que 24";
  }
  
  testLessOrEqual(10);


//(PASSO8)
/*
Às vezes, você precisará testar mais de uma coisa por vez. O operador lógico e ( &&)
retorna true se e somente se os operandos à esquerda e à direita dele forem verdadeiros.
------------------------------

Você deve usar o &&operador uma vez

Você só deve ter uma ifdeclaração

testLogicalAnd(0) deve retornar "Não"

testLogicalAnd(24) deve retornar "Não"

testLogicalAnd(25) deve retornar "Sim"

testLogicalAnd(30) deve retornar "Sim"

testLogicalAnd(50) deve retornar "Sim"

testLogicalAnd(51) deve retornar "Não"

testLogicalAnd(75) deve retornar "Não"

testLogicalAnd(80) deve retornar "Não"
*/

function testLogicalAnd(val) {
    if (val >= 25 && val <= 50) {
     
        return "Yes";
      }
    return "No";
  }
  
  testLogicalAnd(10);


//(PASSO9)
/*
O operador lógico ou ( ||) retorna truese algum dos operandos for true. Caso contrário, ele retorna false.

O operador lógico ou é composto por dois símbolos de barra vertical: ( ||).
 Isso normalmente pode ser encontrado entre as teclas Backspace e Enter.
 ----------------------------------------------------------------------------

testLogicalOr(0) deve retornar "Fora"

testLogicalOr(9) deve retornar "Fora"

testLogicalOr(10) deve retornar "Dentro"

testLogicalOr(15) deve retornar "Dentro"

testLogicalOr(19) deve retornar "Dentro"

testLogicalOr(20) deve retornar "Dentro"

testLogicalOr(21) deve retornar "Fora"

testLogicalOr(25) deve retornar "Fora"
*/

function testLogicalOr(val) {

    if (val < 10 || val > 20) {
      return "Fora";
    }
    return "Dentro";
  }
  
  testLogicalOr(15);

 //(PASSO10)
 /*
 Quando uma condição para uma ifdeclaração é verdadeira, o bloco de código seguinte é executado.
E quando essa condição for falsa? Normalmente nada aconteceria.
Com uma elseinstrução, um bloco alternativo de código pode ser executado.
 */

function testElse(val) {
    var result = "";
   
    if (val > 5) {
      result = "maior que 5";
    } else {
      result = "igual a 5 ou menor";
     }
  
    return result;
  }
  
  testElse(4);