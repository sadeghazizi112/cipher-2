var shortsentence = function(sentence) {

   var sentence = sentence[0].toUpperCase() + sentence[sentence.length -1].toUpperCase();

   console.log("shortsentence function");

   return sentence;

}
// ---------------------------------------------------------------------------------
 sentencerev = function(newsentence) {

   var reversesentence = newsentence[1]+newsentence[0];

   console.log("sentencerev function")

   return reversesentence;
}
// ---------------------------------------------------------------------------------
var thirdfunction = function(sentence) {

   var shortsentenceresult = shortsentence(sentence);

   console.log(shortsentenceresult)

   var reversesentence = sentencerev(shortsentenceresult);

   console.log(reversesentence)


   var combinedsentence = sentence + reversesentence;

   console.log(combinedsentence);


   return combinedsentence;

}
// ---------------------------------------------------------------------------------
$(document).ready(function() {

   var whatSay = prompt("Got anything to say? And we do mean anything.");

   var combinedsentence = thirdfunction(whatSay);

   var count = combinedsentence.length;
    alert(count);

var index = count/2;

console.log(index)

var middleletter = combinedsentence[index]

console.log(middleletter)

 var frontconcat = middleletter[0]+combinedsentence;

console.log(frontconcat)

});
