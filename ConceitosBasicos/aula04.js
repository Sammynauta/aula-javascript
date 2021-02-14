//Conceitos Basicos parte04

/*
- Apresentando as declarações Else If (PASSO1)
- Ordem Lógica nas Declarações If Else (PASSO2)
- Chaining If Else Statements (PASSO3)
- Código de Golfe (PASSO4)
- Seleção de muitas opções com declarações de switch (PASSO5)
-
-
-
-
-
-
-
-
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