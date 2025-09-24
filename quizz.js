const prompt = require("prompt-sync")();
console.log("Let's do a memory test");
 let chooseOption=
 [
{
    question : "What is capital of Italy ?",
    option : [
        "a)Rome",
        "b)Naples",
        "c)Venice",
        "d)Parma"
     ],
     answer : "a"
},
{
    question : "What is capital of US?",
    option : [
        "a)Washington DC",
        "b)New york",
        "c)paris",
        "d)Austin"
     ],
     answer : "a"
},
{
    question : "What is capital of turkiyei?",
    option : [
        "a)Islamabad",
        "b)Istanbul",
        "c)Ankara",
        "d)konya"
    ],
    answer : "c"
},
{
    question : " What is capital of china ?",
    option : [
        "a)Tibetan",
        "b) Beijing",
        "c)Shanghai",
        "d)Nanjing"
    ],
    answer : "b"
},
{
    question : " What is capital of Pakistan ?",
    option : [
        "a)Lahore",
        "b)Karachi",
        "c)Peshawar",
        "d)Islamabad"
    ],
    answer : "d"
}


]
let score = 0;
for(let i = 0 ; i < chooseOption.length; i++){
    console.log("\n" + chooseOption[i].question);

for(let j =0; j < chooseOption[i].option.length; j++){
    console.log(chooseOption[i].option[j]);
}
 let userAnswer = prompt("Your answer is (a/b/c/d) :");
 if(userAnswer.toLowerCase() === chooseOption[i].answer){
    console.log("Correct answer");
    score++;
 }
 else{
    console.log("Wrong ❌ Correct answer is " + chooseOption[i].answer);
 }
}
console.log(`\n🎯 you scored ${score} out of  ${chooseOption.length}`);
  