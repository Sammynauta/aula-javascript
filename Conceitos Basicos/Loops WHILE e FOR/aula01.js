/*
- Iterar com JavaScript WHILE Loops (PASSO 1)
- Iterar com JavaScript FOR Loops (PASSO 2)
- Iterar números ímpares com um Loops FOR (PASSO 3)
- Conte para trás com um FOR Loop (PASSO 4)
- Iterar por meio de uma matriz com um loop FOR (PASSO 5)
- Nesting For Loops (PASSO 6)
- Iterar com JavaScript Do ... While Loops (PASSO 7)
- Substituir Loops usando Recursão (PASSO 8)
- Pesquisa de Perfil (PASSO 9)
*/



//PASSO 1

  /*
  Você pode executar o mesmo código várias vezes usando um loop.
O primeiro tipo de loop que aprenderemos é chamado de whileloop porque é executado "enquanto" uma condição
especificada é verdadeira e para quando essa condição não é mais verdadeira.

myArraydeve ser igual [5,4,3,2,1,0].
  */

 var myArray = [];

 var i = 5;
 while(i >= 0) {
   myArray.push(i);
   i--;
 }

 //PASSO 2

/*
Você pode executar o mesmo código várias vezes usando um loop.
O tipo mais comum de loop JavaScript é chamado de forloop porque é executado "por" um número específico de vezes.
Os loops For são declarados com três expressões opcionais separadas por ponto e vírgula:

for ([initialization]; [condition]; [final-expression])

A conditioninstrução é avaliada no início de cada iteração de loop e continuará enquanto for avaliada como true.
Quando conditionestá falseno início da iteração, a execução do loop é interrompida. Isso significa que se
conditioncomeçar como false, seu loop nunca será executado.

O final-expressioné executado no final de cada iteração de loop, antes da próxima conditionverificação e
geralmente é usado para aumentar ou diminuir seu contador de loop.
*/

var myArray = [];

for ( var i = 1; i <= 5; i++) {
    myArray.push(i);
} 


//PASSO 3
/*
Os loops For não precisam iterar um de cada vez. 
Mudando nosso final-expression, podemos contar por números IMPARES.

myArray deve ser igual [1,3,5,7,9].
*/

var myArray = [];

for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

//PASSO 4
/*
Um loop for também pode contar para trás, desde que possamos definir as condições corretas.
A fim de diminuir por dois cada iteração, vamos precisar de mudar a nossa initialization,
 condition e final-expression.

 Empurre os números ímpares de 9 a 1 para myArray usar um forloop.

 myArray deve ser igual [9,7,5,3,1].
*/

var myArray = [];

for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}


//PASSO 5
/*
Uma tarefa comum em JavaScript é iterar pelo conteúdo de um array. Uma maneira de fazer isso é com um FOR 
loop. Este código produzirá cada elemento da matriz arrpara o console:

Lembre-se de que os arrays têm indexação baseada em zero, o que significa que o último índice do array é 
length - 1. Nossa condição para este loop é i < arr.length, que interrompe o loop quando ifor igual a length.
Neste caso, a última iteração é, i === 4isto é, quando ise torna igual a arr.lengthe produz 6para o console.
*/

var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
   console.log(myArr[i]);
}

// PASSO 6
/*
Se você tiver uma matriz multidimensional, poderá usar a mesma lógica do waypoint anterior para percorrer
tanto a matriz quanto quaisquer submatrizes.

Isso produz cada subelemento arrum de cada vez. Observe que, para o loop interno, estamos verificando o
 .length de arr[i], uma vez que arr[i]ele próprio é um array.
*/

function multiplyAll(arr) {
    var product = 1;
   
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }
    }

    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);

/* PASSO 7
O próximo tipo de loop que você aprenderá é chamado de do...whileloop.
É chamado de do...whileloop porque primeiro dopassa uma passagem do código dentro do loop,
não importa o que aconteça, e depois continua a executar o loop para whileo qual a condição
especificada avalia true.

*/

var myArray = [];
var i = 10;

 do {
  myArray.push(i);
  i++;
} while (i < 5)

/** PASSO 8
*No entanto, observe isso multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1].
Isso significa que você pode reescrever multiplyem termos de si mesmo e nunca precisa usar um loop.
A versão recursiva de multiplyquebra assim. No caso base ,onde n <= 0, ele retorna 1. Para valores maiores
de n, ele se chama, mas com n - 1. Essa chamada de função é avaliada da mesma maneira,
chamando multiplynovamente até n <= 0. Neste ponto, todas as funções podem retornar e o original
multiplyretorna a resposta. 
 */

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n -1) + arr[n-1];
  }
}

/* PASSO 9
Temos uma série de objetos que representam diferentes pessoas em nossas listas de contatos.

Uma lookUpProfile função que recebe namee uma propriedade ( prop) como argumentos foi pré-escrita para você.

A função deve verificar se nameé um contato real firstNamee se a propriedade fornecida ( prop)
é uma propriedade desse contato.

Se ambos forem verdadeiros, retorne o "valor" dessa propriedade.

Se namenão corresponder a nenhum contato, retorne "No such contact".

Se propnão corresponder a nenhuma propriedade válida de um contato encontrado para corresponder, name 
então retorne "No such property".
 */

var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop){
  
for (var i = 0; i < contacts.length; i++) {
  if(contacts[i].firstName === name){
  return contacts[i][prop] || "No such property";
  }   
}
return "No such contact";
}

lookUpProfile("Akira", "likes");