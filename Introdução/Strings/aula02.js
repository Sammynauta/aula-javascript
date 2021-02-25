/* 
-Compreender a imutabilidade da String (PASSO1) 
-Use a notação de colchetes para encontrar o enésimo caractere em uma string (PASSO2)
-Use a notação de colchetes para encontrar o último caractere em uma string (PASSO3)
-Use a notação de colchetes para encontrar o enésimo ao último caractere em uma string (PASSO4)
-Word Blanks (PASSO5)
*/


//(PASSO1)
var myStr = "Jello World";

// Corrija a linha para funcionar a busca do primeiro caracter da String.
myStr = "Hello World";

myStr[0] = "H";


//(PASSO2)
var lastName = "Lovelace";

var thirdLetterOfLastName = lastName[2]; 

//(PASSO3)
//Para obter a última letra de uma string, você pode subtrair uma do comprimento da string.
var lastName = "Lovelace";

var lastLetterOfLastName = lastName[lastName.length -1];

//(PASSO4)
// Setup
var lastName = "Lovelace";

// Para obter a penúltima letra de uma string, você pode subtrair uma do comprimento da string.
var secondToLastLetterOfLastName = lastName[lastName.length -2]; 

//(PASSO5)
var mySubstantivo = "cachorro";
var myAdjetivo = "grande";
var myVerbo = "correu";
var myAdverbio = "rápidamente";

var wordBlanks = "O " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";