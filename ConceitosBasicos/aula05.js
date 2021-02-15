//Conceitos Basicos parte05

/*
- Cartas de contagem (PASSO1)
- Construir objetos JavaScript (PASSO2)
- Acessando Propriedades de Objetos com Notação de Pontos (PASSO3)
- Acessando propriedades de objetos com notação de colchetes (PASSO4)
- Acessando Propriedades de Objetos com Variáveis (PASSO5)
- Atualizando Propriedades do Objeto (PASSO6)
- Adicionar novas propriedades a um objeto JavaScript (PASSO7)
- Excluir propriedades de um objeto JavaScript (PASSO8)
- Usando objetos para pesquisas (PASSO9)
- Testando objetos para propriedades (PASSO10)
*/

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


/* (PASSO2)
Você pode ter ouvido o termo objectantes.
Os objetos são semelhantes a arrays, exceto que em vez de usar índices para acessar e modificar seus dados,
você acessa os dados nos objetos por meio do que são chamados properties.
Os objetos são úteis para armazenar dados de forma estruturada e podem representar objetos do mundo real,
como um gato.

No entanto, se o seu objeto tiver qualquer propriedade que não seja de string, o JavaScript irá
 automaticamente fazer o typecast como strings.

Faça um objeto que representa um cão chamado myDogque contém as propriedades
"name"(uma string), "legs", "tails"e "friends".

Você pode definir essas propriedades de objeto para quaisquer valores que desejar, 
desde que "name"seja uma string, "legs"e "tails"seja números, e "friends"seja uma matriz.
*/


var meuCachorro = {
    "nome": "Dylan",
      "pernas": 4,
      "caudas": 1,
      "amigos": ["Sandra", "Outros cachorros","Sammy"]
    };


/* (PASSO3)
Existem duas maneiras de acessar as propriedades de um objeto: notação de ponto ( .) e notação de colchetes
( []), semelhante a uma matriz.

A notação de pontos é o que você usa quando sabe o nome da propriedade que está tentando acessar 
com antecedência. 
 */

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  var hatValue = testObj.hat;  
  var shirtValue = testObj.shirt;

/* (PASSO4)
A segunda maneira de acessar as propriedades de um objeto é a notação de colchetes ( []).
Se a propriedade do objeto que você está tentando acessar tiver um espaço em seu nome, 
você precisará usar a notação de colchetes.
No entanto, você ainda pode usar a notação de colchetes nas propriedades do objeto sem espaços.
 */

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  var entreeValue = testObj["an entree"];
  var drinkValue = testObj["the drink"];

/* (PASSO5)
Outro uso da notação de colchetes em objetos é acessar uma propriedade que é armazenada como o valor de uma variável.
Isso pode ser muito útil para iterar por meio das propriedades de um objeto ou ao acessar uma tabela de pesquisa.

Outra forma de usar esse conceito é quando o nome da propriedade é coletado 
dinamicamente durante a execução do programa, da seguinte maneira:
*/

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16; 
var player = testObj[playerNumber];

/* (PASSO 6)
Depois de criar um objeto JavaScript, você pode atualizar suas propriedades a qualquer momento, da mesma forma
que atualizaria qualquer outra variável. Você pode usar a notação de ponto ou colchete para atualizar.

Já que ele é um cão particularmente feliz, vamos mudar seu nome para "Happy Camper". Veja como atualizamos a 
propriedade do nome de seu objeto: ourDog.name = "Happy Camper";ou ourDog["name"] = "Happy Camper";Agora quando 
avaliarmos ourDog.name, ao invés de obter "Camper", teremos seu novo nome, "Happy Camper".
*/

var myDog = {
    "nome": "Coder",
    "pernas": 4,
    "caudas": 1,
    "amigas": ["Sammy", "Danny"]
  };
  myDog["nome"] = "Happy Coder";

/* (PASSO 7)
Você pode adicionar novas propriedades a objetos JavaScript existentes da mesma forma que os modificaria.
Veja como adicionaríamos uma "manchas" propriedade a ourDog:
*/

var myDog = {
    "nome": "Dylan",
    "pernas": 4,
    "caudas": 1,
    "amigos": ["Sammy", "Pai", "Amanda"]
  };
  myDog.manchas = "pretas";

/* (PASSO 8)
Também podemos excluir propriedades de objetos como este:
delete ourDog.manchas;
*/


var myDog = {
    "nome": "Dylan",
    "pernas": 4,
    "caudas": 1,
    "amigos": ["Sammy", "Cody"],
    "manchas": "pretas"
  };
  delete myDog.manchas;

/* (PASSO 9)
 Os objetos podem ser considerados como um armazenamento de chave / valor, como um dicionário.
 Se você tiver dados tabulares, poderá usar um objeto para "pesquisar" valores em vez de uma switchinstrução ou 
 uma if/elsecadeia. Isso é mais útil quando você sabe que seus dados de entrada estão limitados a um determinado 
 intervalo.
 */

function phoneticLookup(val) {
    var result = "";

    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank",
    };
    result = lookup[val]
    
    return result;
  }
  
  phoneticLookup("charlie");

  /* (PASSO 10)
Às vezes é útil verificar se a propriedade de um determinado objeto existe ou
não. Podemos usar o .hasOwnProperty(propname)método de objetos para
determinar se aquele objeto tem o nome de propriedade fornecido. .hasOwnProperty()retorna 
true ou false se o imóvel foi encontrado ou não
*/

function checkObj(obj, checkProp) {
  
    if(obj.hasOwnProperty(checkProp)) {
       return obj[checkProp];
     } else {
       return "Not Found";
     }
   }