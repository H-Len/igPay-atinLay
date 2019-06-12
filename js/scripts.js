$(document).ready(function(){
  console.log("Jquery works!");


  // var favoritePets = ["cats", "dogs", "owls"];
  // var favoriteFish = ["goldfish", "bluefish"];
  // var newArray = [];
  // newArray.push(favoritePets);
  // newArray.push(favoriteFish);
  // console.log(newArray);
  //
  //







    var fullSentenceArray =[];
    var workingWordArray = [];
    var inputSentence;
    var splitArray = [];
    var loopArray = [];
    var finalSentence = "";

  function gatherInput(){
    inputSentence = $("#input-word").val();
  }


  function arrayMaker(input) {
    return Array.from(input);
  }

  // function firstVowelTester(){
  //   if (splitArray[i] === "a" || splitArray[i] === "e" || splitArray[i] === "i" || splitArray[i] === "o" || splitArray[i] === "u") {
  //     return splitArray[i] + "-way";
  //   }
  // }

  // this is the original firstVowel Tester
  function firstVowelTester(){
    if (workingWordArray[0] === "a" || workingWordArray[0] === "e" || workingWordArray[0] === "i" || workingWordArray[0] === "o" || workingWordArray[0] === "u") {
      workingWordArray.push("-way");
    }
  }

  function firstConsonantTester() {
    // this checks if the first two letters of the word are qu or QU
    if(inputSentence[0] === "q" && inputSentence[1] === "u" || workingWordArray[0] === "Q" && workingWordArray[1] === "U"){
      var firstQAndU = (workingWordArray.shift())+ (workingWordArray.shift());
      console.log("Here is the qu:" + firstQAndU);
      workingWordArray.push("-" + firstQAndU + "ay");
    }
    if (workingWordArray[0] != "a" && workingWordArray[0] != "e" && workingWordArray[0] != "i" && workingWordArray[0] != "o" && workingWordArray[0] != "u") {

    var firstConsonant = workingWordArray.shift();
    console.log(workingWordArray);
    console.log(firstConsonant);
    workingWordArray.push("-" + firstConsonant + "ay");
    }
  }

  function sentenceSplitter (input) {
    //splitting input into separate words
    return input.split(" ");
  }


  function pigLatinMaker() {
    gatherInput();
    console.log(inputSentence);
    fullSentenceArray = sentenceSplitter(inputSentence);
    console.log(fullSentenceArray);

    for (i = 0; i < fullSentenceArray.length; i++){
      workingWordArray = arrayMaker(fullSentenceArray[i]);
      console.log(workingWordArray);
      firstVowelTester();
      firstConsonantTester();
      var pigLatinWord = workingWordArray.join("");
      finalSentence = finalSentence + " " + pigLatinWord;
    }

     console.log(finalSentence);
  }


  // this is the UI logic
  $("#pig-latin-form").submit(function(event){
    event.preventDefault();

    pigLatinMaker();


  });




}); // this is the jquery closer
