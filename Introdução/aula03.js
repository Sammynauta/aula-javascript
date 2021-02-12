// Introdução ao Javascript parte3

/* 
-Declarar variáveis ​​de string (PASSO1)
-Fugindo de citações literais em cordas (PASSO2)
-Citando Strings com aspas simples (PASSO3)
-Sequências de escape em strings (PASSO4)
-Concatenando Strings com Operador Plus(PASSO5)
-Concatenando Strings com o Operador Plus Equals(PASSO6)
-Construindo Strings com Variáveis (PASSO7)
-Anexando Variáveis ​​a Strings (PASSO8)
-Encontre o comprimento de uma String (PASSO9)
-Use a notação de colchetes para encontrar o primeiro caractere em uma string (PASSO10)
*/


//(PASSO1)
var myFirstName = "Samuel";
var myLastName = "Olivera Diogo";

//(PASSO2)
var myStr = "Eu sou uma string \"aspas dublas\" dentro de \"aspas dublas\".";
// visivelmente ficará assim : Eu sou uma string  "aspas dublas" dentro de "aspas dublas".
// A bara invertida (\) serve como segurança de um caractere.


//(PASSO3)
//exemplo:
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
/*No entanto, isso se torna um problema se você precisar usar as aspas externas dentro dele. Lembre-se de que uma string tem o mesmo tipo de aspas no início e no final. 
Mas se você tiver a mesma citação em algum lugar no meio, a string irá parar mais cedo e gerar um erro.*/

//(PASSO4)
var myStr= "FirstLine\n\t\\SecondLinen\nThirdLine";
/* visivelmente ficará assim:

FirstLine
	\SecondLinen
ThirdLine
*/

//(PASSO5)
var myStr= 'Esse é o começo' + ' Esse é o fim.';


//(PASSO6)
var myStr = "This is the first sentence. "
myStr += "This is the second sentence.";


//(PASSO7)
var myName = "Samuel";
var myStr = "My name is " + myName + " and I am well!";


//(PASSO8)

var someAdjective = "COOL";
var myStr = "Learning to code is ";
myStr += someAdjective;

//(PASSO9)

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
// vai retornar a quantidade de letras na string.

//(PASSO10)

var primeiraLetraDoNome = "";
var Nome = "Lovelace";

primeiraLetraDoNome = Nome[0];