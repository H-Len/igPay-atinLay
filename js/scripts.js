$(document).ready(function(){
  console.log("Jquery works!");

    var inputWordArray = [];
    var inputWord;


  function gatherInput(){
    inputWord = $("#input-word").val();
  }

  function arrayMaker() {
    inputWordArray = Array.from(inputWord);
  }

  function firstVowelTester(){
    if (inputWordArray[0] === "a" || inputWordArray[0] === "e" || inputWordArray[0] === "i" || inputWordArray[0] === "o" || inputWordArray[0] === "u") {
      return inputWord + "-way";
    }
  }

  function firstConsonantTester() {
    // this checks if the first two letters of the word are qu or QU
    if(inputWord[0] === "q" && inputWord[1] === "u" || inputWordArray[0] === "Q" && inputWordArray[1] === "U"){
      var firstQAndU = (inputWordArray.shift())+ (inputWordArray.shift());
      console.log("Here is the qu:" + firstQAndU);
      inputWordArray.push("-" + firstQAndU + "ay");

    } else if (inputWordArray[0] != "a" || inputWordArray[0] != "e" || inputWordArray[0] != "i" || inputWordArray[0] != "o" || inputWordArray[0] != "u") {

    var firstConsonant = inputWordArray.shift();
    console.log(inputWordArray);
    console.log(firstConsonant);
    inputWordArray.push("-" + firstConsonant + "ay");
    }
  }



  function pigLatinMaker() {
    firstVowelTester();
    firstConsonantTester();
     var pigLatinPhrase = inputWordArray.join("");
     console.log(pigLatinPhrase);
  }




  // this is the UI logic
  $("#pig-latin-form").submit(function(event){
    event.preventDefault();
    gatherInput();
    arrayMaker();
    pigLatinMaker();


  });




}); // this is the jquery closer
