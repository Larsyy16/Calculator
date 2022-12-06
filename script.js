/* 1. functions that can do basic arithmetic*/




function add (num,num2) {
return num + num2;
}

function subtract (num,num2) {
    return num - num2;
}
function multiply (num,num2) {
    return num * num2;
}
function divide (num,num2) {
return num / num2;
}
/* 2. function "operate" that takes an operator and 2 numbers and
then calls one of the above functions on the numbers*/

function operate (num, operator, num2) {
    if (operator === '+') {
        return add(num,num2)
    }
}

/* 3. Basic html calculator with buttons for each digit, each of the above functions and
equals key
-don't connect to js yet
-add clear button*/

/*const container = document.querySelector('#container');*/

function createGrid(numPerBox) {
    for (let i=numPerBox; i >1; i--){
        const row = buttons.appendChild(document.createElement('div'));

        for (let j=2; j<numPerBox; j++) {
            const square = document.createElement('button');
            square.className = 'button';
            row.appendChild(square);    
            
        }
    }
}

createGrid(5);

/*document.getElementsByClassName('button')= function () {
    for (let i=0; i< 10; i++) {
        this.value = i;
    }
}*/


let elements = document.querySelectorAll('button.button');

    for (let i=elements.length-1; i >= 0; --i) {
        let g =11;
        let x= g-i;
        let h = i-2;
        if (i==0) {
            elements[x].innerHTML += `=`;
        } else if(i==2) {
            elements[x].innerHTML += '.  ';
        } else if (i==1) {
            elements[x].innerHTML += 0;
        } else {elements[x].innerHTML += `${h}`}
    }
    
    /*container.appendChild(elements);*/



/* 4. create function that populate display when you click number buttons.
        I should be storing the display value somewhere*/
let display = document.querySelector('#display');
const display1 = document.createElement('p');
const display2 = document.createElement('p');

let buttonNumbers = document.getElementsByClassName("button");
for (let i=0; i<buttonNumbers.length; i++) {
    buttonNumbers[i].addEventListener("click",function() {
        display1.textContent +=`${buttonNumbers[i].innerHTML}`
    });
}
display.appendChild(display1);


/* 5. Make the calculator work (hardest part)*/

/* 6. watch out and fix these bugs.
    should not evaulate more than a single pair of numbers at a time
    */

/* 7. extra credit: add a . button that lets users input decimals but only
 1 decimal symbol
    add a backspace button
    add keyboard support*/
