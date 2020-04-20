var flashQuestions = ["Hola", "Buenos Dias", "Buenas Noches"];
var flashAnswers = ["hello", "GoodMorning", "GoodNight"];
var answerButton = document.createElement("button");
var nextButton = document.getElementById("nextArrow");
var previousButton = document.getElementById("previousArrow");
var ques = document.getElementById("flashQuestion");
answerButton.innerHTML = "Answer";
answerButton.style.position = "absolute";
answerButton.style.left = "-10px";

var i =0;

document.onload = mainFunction();
answerButton.addEventListener("click", function () { 
    ques.innerHTML = flashAnswers[i]; 
    
})
nextButton.addEventListener("click", function () {
    i++;
   if(i===flashQuestions.length)
    {
        i=0;
    }
    mainFunction();
}) 

previousButton.addEventListener("click", function () {
    i--;
    
    if(i===-1)
    {
        i=flashQuestions.length-1;
    }
    mainFunction();
}) 
function mainFunction()
{
    console.log("in main function"+i);
    ques.innerHTML = flashQuestions[i] + "<br>" + "<br>";
    ques.appendChild(answerButton);
    
}

