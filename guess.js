// let num = Math.ceil(100*(Math.random()))
const num = parseInt(Math.random() * 100 + 1)
console.log(num)

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#number');
const guess_slot = document.querySelector('.guess') ;
const lastres = document.querySelector('.lastResult');
const lowOrhi= document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas')
const p = document.createElement('p');
let prevguess = [];
let numguess = 1;
let playgame = true;

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validGuess(guess);
    })
}

function validGuess(guess){
    if(isNaN(guess) || guess < 0 || guess > 100){
        alert("Please enter a valid number");
    }
    else {
        prevguess.push(guess);
        if(numguess>=11){
            displayguess(guess);
            displaymessage('Game over Random number was ')
            endgame();
        }else{
            displayguess(guess);
            checkGuess(guess);

        }
    }
}

function checkGuess(guess){
    if(guess == num){
        displaymessage("You guessed right ");
        endgame()
    }else if(guess < num){
        displaymessage("number is too low ")
    }else if(guess > num){
        displaymessage("number is too high ")
    }
}
function displaymessage(message){
    lowOrhi.innerHTML = `<h2>${message}</h2>`
}
function displayguess(guess){
    userInput.value = ''
    guess_slot.innerHTML += `${guess},  `
    numguess++;
    
    lastres.innerHTML = `${11-numguess}`
}
function newgame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        num = parseInt(Math.random() * 100 + 1)
        prevguess =[];
        numguess = 1;
        guess_slot.innerHTML = '';
        lastres.innerHTML = `${11-numguess}`;
        userInput.removeAttribute('disabled')
        startover.removeChild(p);
        playgame = true
    })
}
function endgame(){
    userInput.value = '';
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML =`<h2 id="newGame">Start new game</h2>`
    startover.appendChild(p)
    playgame = false;
    newgame();
}
