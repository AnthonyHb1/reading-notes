'use strict'

//proof of life
console.log

let disneyland= prompt

let lowerCaseDisney = disneyland.toLowerCase();
let upperCaseDisney = disneyland.toUppercase();

if (lowerCaseDisney === 'yes' )

//SWITCH STATEMENT: IF I HAVE MORE THAN 3 
//PROMPTS ALWAYS RETURN STRING!!!
let funlevel = prompt('On a scale pf 1-3, with 3 being the most fun, hjow fun was disneyland when you visited')

switch (funLevel) {
  case '1':
    alert('I am sorry you didn't have fun, maybe you should have gotten a pickle);
    break;
  case '2':
    alert('Should not have eaten that Turkey Leg');
  case '3':
    alert('That is that I like to hear! We should go together');
}