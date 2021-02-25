/*
- Armazene vários valores em uma variável usando matrizes JavaScript (PASSO1)
- Aninhar uma matriz dentro de outra matriz (PASSO2)
- Acessar dados de matriz com índices (PASSO3)
- Modificar dados de matriz com índices (PASSO4)
- Acesse matrizes multidimensionais com índices (PASSO5)
- Manipular matrizes com push () (PASSO6)
- Manipular matrizes com pop () (PASSO7)
- Manipular matrizes com shift () (PASSO8)
- Manipular matrizes com unshift () (PASSO9)
- Lista de compras (PASSO10)
- Acessando matrizes aninhadas (PASSO11)
*/



//(PASSO1)
//DEVE CONTER UMA STRING E UM NUMERO.
var myArray = ["Javascript", 1];


//(PASSO2)
//Crie uma matriz aninhada chamada myArray.
var myArray = [["Flamengo", 3], ["Internacional", 1]];


//(PASSO3)
//Como strings, os arrays usam indexação baseada em zero, então o primeiro elemento em um array tem um índice 0.
//A variável myData deve ser igual ao primeiro valor de myArray.
var myArray = [50,60,70];
var myData = myArray[0];

//Result
myData = 50

//(PASSO4)
//Modifique os dados armazenados no índice 0 de myArray para um valor de 45.
var myArray = [18,64,99];
myArray[0] = 45;

//Result
myArray = [45,64,99];

//(PASSO5)
// Acesse o numero 8 usando myData bunscando na matriz.
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1];

//Result
myData = 8;

//(PASSO6)
//Adicione na myArray ["dog", 3].
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

//Result
myArray = [["John", 23], ["cat", 2], ["dog", 3]];


//(PASSO7)
//Remove sempre o ultimo na myArray.
var myArray = [["James", 19], ["cat", 4], ["horse", 2]];
var removedFromMyArray = myArray.pop();

//Result
myArray = [["James", 19], ["cat", 4]];


//(PASSO8)
//Remove sempre o primeiro na myArray.
var myArray = [["Samuel", 23], ["cat", 1], ["James", 19]];
var removedFromMyArray = myArray.shift();

//Result
myArray = [["cat", 1], ["James", 19]];


//(PASSO9)
//Adicione como prmeiro elemento na myArray.
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

//Result
myArray = [["Paul", 35], ["dog", 3]];


//(PASSO10)
/*Crie uma lista de compras na variável myList. 
A lista deve ser uma matriz multidimensional contendo várias submatrizes.*/
var myList = [["ovos", 12], ["carne", 7], ["Biscoito", 3], 
["Refrigerante", 8], ["Leite", 10], ["Arroz", 7]];


// PASSO 11
var minhasPlantas = [
    {
      type: "flores",
      list: [
        "rosa",
        "tulipa",
        "girassol"
      ]
    },
    {
      type: "arvores",
      list: [
        "figueira",
        "pinheiro",
        "palmeira"
      ]
    }
  ];
  
  var segundaArvore = minhasPlantas[1].list[1]; 

  // deve me retornar pinheiro.