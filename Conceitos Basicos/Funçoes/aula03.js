/*
- Apresentando as declarações Else If (PASSO1)
- Ordem Lógica nas Declarações If Else (PASSO2)
- Chaining If Else Statements (PASSO3)
- Código de Golfe (PASSO4)
- Seleção de muitas opções com declarações de switch (PASSO5)
- Adicionando uma opção padrão nas instruções de switch (PASSO6)
- Múltiplas opções idênticas em declarações de switch (PASSO7)
- Substituição de cadeias if Else com switch (PASSO8)
- Retornando valores booleanos de funções (PASSO9)
- Retornar o padrão inicial para funções (PASSO10)
- Cartas de contagem (PASSO11)
*/


/*(PASSO1)
Se houver várias condições que precisam ser tratadas,
 você pode encadear ifinstruções com else ifinstruções.
 -------------------------------------------
 Você deve ter pelo menos duas elsedeclarações

Você deve ter pelo menos duas ifdeclarações

Você deve ter chaves de fechamento e abertura para cada if elsebloco de código.

testElseIf(0) deve retornar "Menor que 5"

testElseIf(5) deve retornar "entre 5 e 10"

testElseIf(7) deve retornar "entre 5 e 10"

testElseIf(10) deve retornar "entre 5 e 10"

testElseIf(12) deve retornar "Maior que 10"
*/

function testElseIf(val) {
    if (val > 10) {
      return "MAIOR QUE 10";
    }
     else if (val < 5) {
      return "MENOR QUE 5";
    } else {
    return "ENTRE 5 e 10";
    }
  }
  
  testElseIf(7);

/*(PASSO2)
A ordem é importante em if, else ifdeclarações.
A função é executada de cima para baixo, portanto, você deve ter cuidado com a instrução que vem primeiro.
---------------------------------------------------------

*/
function orderMyLogic(val) {
    if (val < 5) {
      return "menor que 5";
    } else if (val < 10) {
      return "menor que 10";
    } else {
      return "maior ou igual a 10";
    }
  }
  
  orderMyLogic(7);

/*(PASSO3)
if/elsedeclarações podem ser encadeadas para lógica complexa.
Aqui está o pseudocódigo de várias instruções if/ encadeadas else if
*/

function testSize(num) {

  if (num < 5){
    return "MUITO PEQUENO";
  } else if (num < 10){
  return "PEQUENO";
  } else if (num < 15) {
  return "MÉDIO";
  } else if (num < 20) {
  return "GRANDE";
  } else (num >= 20) 
  return "ENORME";
  }
  
  testSize(7);

/*(PASSO4)
No jogo de golfe, cada buraco tem um parsignificado strokesque se espera que o número médio de um jogador de golfe
faça para enfiar a bola em um buraco para completar a jogada.
 Dependendo de quão acima ou abaixo do parseu strokes, existe um apelido diferente.

Sua função pare strokesargumentos serão passados.
Retorne a string correta de acordo com esta tabela que lista os golpes em ordem
de prioridade; de cima (mais alto) para baixo (mais baixo):
----------------------------------------------------------------
Strokes	Retornar
1	"Hole-in-one!"
<= par - 2	"Águia"
par - 1	"Passarinho"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
> = par + 3	"Ir para casa!"
*/

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes == 1){
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  } 
}

golfScore(5, 4);

/*(PASSO5)
Se você tiver muitas opções para escolher, use uma instrução switch .
Uma switchdeclaração testa um valor e pode ter muitas declarações de caso que definem vários valores possíveis. 
As instruções são executadas a partir do primeiro casevalor correspondido até que um breakseja encontrado.
*/

function caseInSwitch(val) {
    var answer = "";
    
    switch(val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break; 
    }
    return answer;
  }
  
  caseInSwitch(1);


  /*(PASSO6)
  Em uma switchdeclaração, você pode não ser capaz de especificar todos os valores possíveis como casedeclarações.
  Em vez disso, você pode adicionar a defaultinstrução que será executada 
  se nenhuma caseinstrução correspondente for encontrada.
  Pense nisso como a elsedeclaração final de uma if/elsecadeia.
  */

 function switchOfStuff(val) {
  var answer = "";
 
  switch(val) {
    case "a":
    answer = "maçã";
    break;
    case "b":
     answer = "pássaro";
    break;
    case "c":
     answer = "gato";
    break;
    case "d":
    answer = "coisas";
    break;
    default:
    answer = "coisas"
  }
  
  return answer;
}

switchOfStuff("a");


/*(PASSO7)
Se a breakinstrução for omitida de uma switchinstrução case, a case(s) instrução (ões) a seguir serão executadas
até que um breakseja encontrado.
Se você tiver várias entradas com a mesma saída, poderá representá-las em uma switchinstrução como esta: 
*/

function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "BAIXO";
      break;
    case 4:
    case 5:
    case 6:
     answer = "MÉDIO";
      break;
    case 7:
    case 8:
    case 9:
     answer = "ALTO";
      break;
      
  }
  return answer;
}

sequentialSizes(1);

/*(PASSO8)
Se você tiver muitas opções para escolher, uma switch declaração pode ser mais fácil de escrever
do que muitas declarações if/ encadeadas else if. Os seguintes:

*/
function chainToSwitch(val) {
var answer = "";

  switch (val){
    case "bob":
    answer = "Marley";
    break;
    case 42:
    answer = "The Answer";
    break;
    case 1:
    answer = "There is no #1";
    break;
    case 99:
    answer = "Missed me by this much!";
    break;
    case 7:
     answer = "Ate Nine";
    break;
    default:
     answer = "";
     break;
  }
  
  return answer;
}

chainToSwitch(7);

/*(PASSO9)
Você deve se lembrar de Comparison with the Equality Operator que todos os operadores de comparação
retornam um valor booleano true ou false.

Mas existe uma maneira melhor de fazer isso. Já que ===retorna trueou false,
podemos retornar o resultado da comparação:

function isEqual(a,b) {
  return a === b;
}
*/

function menorQue(a, b) {
  
  return a < b;
  
}

menorQue(10, 15);

/*(PASS010)
Quando uma return instrução é alcançada, a execução da função atual para e o controle retorna ao local de chamada.
 */

function abTest(a, b) {
 
   if( a < 0 || b < 0) {
     return undefined;
   } 

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

//PASSO 11
/*
No jogo de cassino Blackjack, um jogador pode ganhar uma vantagem sobre a casa mantendo o controle
 do número relativo de cartas altas e baixas restantes no baralho. Isso é chamado de contagem de cartas .
Ter mais cartas altas restantes no baralho favorece o jogador. Cada cartão recebe um valor de acordo com a tabela
 abaixo. Quando a contagem é positiva, o jogador deve apostar alto. Quando a contagem é zero ou negativa,
o jogador deve apostar baixo.


Mudança de contagem /Cartas
+1 ---	/2, 3, 4, 5, 6
 0 ---  /7, 8, 9
-1 ---  /10, 'J', 'Q', 'K', 'A'
*/

var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
  count++;
  break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
  count--;
  break;
  }
 var holdbet = 'Hold'
  if (count > 0) {
    holdbet = 'Bet'
  }

  return count + " " + holdbet;
}

cc(2); cc(3); cc(5); cc('K'); cc('A');