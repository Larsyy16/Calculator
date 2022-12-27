/* 1. functions that can do basic arithmetic*/




function add () {
    let initial = [];
    initial.push(storage.reduce((acc,cur) => acc + cur));
    storage = initial;
    

    
    return initial;
    
}

function subtract () {
    let initial = [];
    initial.push(storage.reduce((acc,cur) => acc - cur));
    /*storage.push(initial);*/
    storage = initial;

    return initial;
}
function multiply () {
    let initial = [];
    initial.push (storage.reduce((acc,cur) => acc * cur))
    storage = initial;
    return initial;
}
function divide () {
    let initial = [];
    initial.push(storage.reduce((acc,cur) => acc / cur))
    storage = initial;
    return storage;
}
/* 2. function "operate" that takes an operator and 2 numbers and
then calls one of the above functions on the numbers*/




/*function operate (num, operator, num2) {
    if (operator === '+') {
        return add(num,num2)
    initial.push(storage.reduce((acc,cur) => acc + cur));
    }
}*/

/* 3. Basic html calculator with buttons for each digit, each of the above functions and
equals key
-don't connect to js yet
-add clear button*/

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



/*Set value for numberButtons */
let elements = document.querySelectorAll('button.button');

    for (let i=elements.length-1; i >= 0; --i) {
        let g =11;
        let x= g-i;
        let h = i-2;
        if (i==0) {
            elements[x].innerHTML += `=`;
        } else if(i==2) {
            elements[x].innerHTML += '.';
        } else if (i==1) {
            elements[x].innerHTML += 0;
        } else {elements[x].innerHTML += `${h}`}
    }
    


/* 4. create function that populate display when you click number buttons.
        I should be storing the display value somewhere*/
        
/*Creates display divs */
let display = document.querySelector('#display');
const display1 = document.createElement('p');
const display2 = document.createElement('p');
display2.classList.add("pClass");

/*creates ids for number buttons*/
let buttonNumbers = document.getElementsByClassName("button");
for (let i=0; i<buttonNumbers.length; i++) {
    buttonNumbers[i].id= 'button-'+i;
}
let button9 = document.getElementById("button-9");
/* Shows number when clicked on display1 and stores number in storage*/

for (let i=0; i<buttonNumbers.length; i++) {
    buttonNumbers[i].addEventListener("click",function event() {

        if (`${buttonNumbers[i].innerHTML}`=='.') {
            
            button9.disabled = true;
        }

        


        if(`${buttonNumbers[i].innerHTML}`=='=') {

            


            storage.push(+display1.textContent);

            

            operate();

            
            storage = storage.map(function(each_number) {
                return Number(Math.round(each_number * 100000000)/100000000);
            });

            if (storage[0]> 9999999999) {
                storage = storage.map(function(each_number) {
                    return each_number.toExponential(4);
                });
            }

            if (storage== Infinity) {
                display1.textContent = 'NO';
            } else {display1.textContent=storage}
            /*display1.textContent = operate(storage.at(-3), storage.at(-2), storage.at(-1))*/
            /*storage = [];*/
            
            console.log(+display1.textContent)
            console.log(storage)
        } else{display1.textContent +=`${buttonNumbers[i].innerHTML}`
    }
        
    });
}
display.appendChild(display1);

/* EventListener that clears display1 after second button press */

/*buttonNumbers[i].addEventListener("click",function() {

})*/

/*storage that receives number when operator is clicked and stores into array */

let storage = [];
let storage2 = [];


/* 5. Make the calculator work (hardest part)*/

/*
-Number shows up when clicked on display
-operator shows up on display2 when clicked
-when equal is clicked, display2 and display1 are combined, put into function,
and result is shown on screen
*/

let operatorButtons = document.getElementsByClassName("op");
for (let i=0; i<operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click",function op(){
        /*display2.textContent += display1.textContent + `${operatorButtons[i].value}`;*/

       
        storage.push(+display1.textContent);
        operate();
        button9.disabled = false;



        /*display2.textContent = '';*/
        display2.textContent = operate(storage);
        console.log(operate());
        storage2.push(operatorButtons[i].value);
        
        
        /*clear display1 */
        display1.textContent='';

        
        console.log(storage);
        console.log(storage2);
    });
}
display.appendChild(display2);
/*function that stores numbers and operators */

function operate() {
    let result=0;
    
    

    if (storage2[storage2.length-1] == '+') {
        result = add();
        
        
    } else if (storage2[storage2.length-1] =='-') {
        result = subtract();
    } else if (storage2[storage2.length-1] == '*') {
        result = multiply();
    } else {result = divide()};
    return result;
    } /*const x = storage2.pop();*/



/* Make clear button work*/

function clearCalc() {
    button9.disabled = false;
    display1.textContent ='';
    display2.textContent = '';
    storage = [];
    storage2 = [];
    console.log(storage);
    console.log(storage2);
}

function delDisplay() {
    button9.disabled = false;
    display1.textContent = '';
}


/*function splicer() {
    if (storage2.length > 1) {
    return  storage.splice(0,2);
    } else {storage.shift();}
}
*/



/* 6. watch out and fix these bugs.
    should not evaulate more than a single pair of numbers at a time
    should not add -20 when it is preceded and succeeed by addition
    */

/* 7. extra credit: add a . button that lets users input decimals but only
 1 decimal symbol
    add a backspace button
    add keyboard support*/
