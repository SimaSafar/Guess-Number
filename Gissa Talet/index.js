
var msg1 = document.getElementById("msg1");
var msg2 = document.getElementById("msg2");
var msg3 = document.getElementById("msg3");

var answer = Math.floor(Math.random()*100) + 1;
var Number_of_guesses = 0;
var guessed_nums = [];

document.getElementById("btn").addEventListener("click", play)


function play() {
    var guess = document.getElementById("guess").value;
    
     if(guess < 1 || guess > 100) {
         alert("Enter a number between 1 & 100"); 
     }

     else{
        guessed_nums.push(guess);
        Number_of_guesses += 1;

        if(guess < answer){
            msg1.textContent = "Answer too low! keep guessing";
            msg2.textContent = "number of gusses: " + Number_of_guesses;
            msg3.textContent = "Guessed numbers are: " + guessed_nums;
        }

        else if(guess > answer){
            msg1.textContent = "Answer too high!";
            msg2.textContent = "number of gusses: " + Number_of_guesses;
            msg3.textContent = "Guessed numbers are: " + guessed_nums;
        }

        else if(guess == answer){
            msg1.textContent = "Right Answer, You Win!";
            msg2.textContent = "the number was: " + answer;
            msg3.textContent = "Awesome! Nailed it!"+ Number_of_guesses + " guesses";
        }
     }
}




