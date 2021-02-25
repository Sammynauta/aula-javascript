/*
- Manipulando objetos complexos (PASSO1)
- Construir objetos JavaScript (PASSO2)
- Acessando Propriedades de Objetos com Notação de Pontos (PASSO3)
- Acessando propriedades de Objetos com notação de colchetes (PASSO4)
- Acessando Propriedades de Objetos com Variáveis (PASSO5)
- Atualizando Propriedades do Objeto (PASSO6)
- Adicionar novas propriedades a um objeto JavaScript (PASSO7)
- Excluir propriedades de um objeto JavaScript (PASSO8)
- Usando objetos para pesquisas (PASSO9)
- Testando objetos para propriedades (PASSO10)
- Acessando objetos aninhados (PASSO 11)
- Coleção de discos (PASSO12)
*/

// PASSO1

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  // Add outro album abaixo
  {
     "artist": "Bon Jovi",
    "title": "Love me Again",
    "release_year": 1998,
    "formats": [
      "CD",
      "8T",
      "LP",
      "Digital Midia"
    ],
    "gold": true
  }
];

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

   // PASSO 11
//As subpropriedades dos objetos podem ser acessadas encadeando a notação de ponto ou colchete.

var myStorage = {
  "carro": {
    "dentro": {
      "porta-luvas": "mapas",
      "assento do carona": "farelos"
     },
    "fora": {
      "mala": "sammy"
    }
  }
};

var gloveBoxContents = myStorage.carro.dentro["porta-luvas"];

//deve me retornar o mapa.

// PASSO 12
/*
Você começa com uma updateRecordsfunção que pega um objeto como collection, an id, a prop(como artistou tracks)
e a value. Conclua a função usando as regras abaixo para modificar o objeto passado para a função.

Sua função deve sempre retornar o objeto inteiro.
Se prop não for track se nem value for uma string vazia, atualize ou defina o do álbum propcomo value.
Se prop for, tracksmas o álbum não tiver uma tracks propriedade, crie um array vazio e adicione value a ele.
Se prop for tracks e value não for uma string vazia, adicione valueao final da tracks matriz existente do álbum .
Se value for uma string vazia, exclua a prop propriedade fornecida do álbum.

Nota: Uma cópia do collectionobjeto é usada para os testes.
*/


var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(object, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    object[id][prop] = value;
  } else if (prop === "tracks" && !object[id].hasOwnProperty("tracks")) {
    object[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    object[id][prop].push(value);
  } else if (value === "") {
    delete object[id][prop];
  }
  return object;
}
updateRecords(collection, 5439, 'artist', 'ABBA');