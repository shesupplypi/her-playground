//Control Flow




//For loop

//Example 1: known length

console.log('known length for loop example:');

    for( let i= 0; i < 5; i++ ) {
        console.log('in loop:', i)
    };

    console.log('loop finished')

        /*i=0 is an initialization variable, and it is like a counter, and it keeps track of
        how many times we cycle through the loop and how many times we run the code inside the loop*/

        /*i < 5 this is a condition that evaluates to either true, if it is true then we will execute
        the code inside of the code block, if false then we will not*/

        /*i++ will execute every time at the end of the codeblock, so every time we loop through, 
        at the end, we will take the value of i and add 1 to it*/



//Example 2: unknown length

//To print out the index value:

console.log('unknown length for loop example:');


    const name = ['shaun', 'mario', 'luigi'];

        for( let i= 0; i < name.length; i++ ) {
            console.log(i)
        };

//To print out the actual values:

console.log('print actual array values:');


    const names = ['shaun', 'mario', 'luigi'];

    for( let i= 0; i < names.length; i++ ) {
        console.log(names[i])
    };

        //So the first time it goes through, i will be 0, so it will be console.log(names[0]), which will give the name

//To put each name in an HTML template: 

console.log('print html values:');


    const htmlNames = ['shaun', 'mario', 'luigi'];

    for( let i= 0; i < htmlNames.length; i++ ) {
        let html = `<div>${htmlNames[i]}</div>`
        console.log(html)
    };





//While loop

//Example

console.log('while loop example:');


    let i = 0;
    while(i < 5) {
        console.log('in loop', i);
        i++;
    };

        /*in while loops, the i is not initialized within the parentheses, it is declared outside the loop*/
        /*i++ is added to the end of the loop so that the block is run again until it gets to 5*/

        /*if you leave the loop like this, it is an infinite loop because there is no increment- 
        we set i to 0 and i is always 0, so loop will go on forever:  
            let i = 0;
            while(i < 5) {
                console.log('in loop', i)
            }; */





//Do while loop

//Example

console.log('do while loop example:');


    let a = 5;
    do {
        console.log('value of a is', a);
        a++;
    } while(a < 5);

        /*in this example, the code would never run because i=5
            let i = 5;
            while(i < 5) {
            console.log('value of i is', i);
            i++;
        }; */
        /*but maybe you want the code to run once, even if condition is false, so you use do while*/





// Logical Operators

console.log('logical operator example:');


    const password = 'Anastasiabitch';

    if(password.length > 8 && password.includes('@')) {
        console.log("Your password looks good")
        } else {
            console.log("You need to include an @ symbol, or increase the length")
        };





// Break

console.log('break example:');


const scores = [34, 25, 80, 17, 100, 49, 10];

    for(let i = 0; i < scores.length; i++) {
        console.log('your score: ', scores[i])

        if (scores[i] === 100) {
            console.log('congrats, you got the top score');
            break;
        }
    };

        /*even though i is less than length at 100, the loop will stop when if statement
        is true because of the break */




// Continue

console.log('continue example:');


    const score = [34, 25, 0, 80, 17, 100, 49, 10];

    for(let i = 0; i < score.length; i++) {
        if (score[i] === 0) {
            continue;
        }

        console.log('your score: ', score[i]);

        if (score[i] === 100) {
            console.log('congrats, you got the top score');
            break;
        }
    };

        /*continue allows you to keep iterating through code, it will just stop at continue and 
        go again so our embarassing score of 0 will not be logged */




//Switch

console.log('switch example no break:');


    const grade = 'C'

    switch(grade){
        case 'A': 
            console.log('you got an A');
        case 'B': 
            console.log('you got an B');
        case 'C': 
            console.log('you got an C');
        case 'D': 
            console.log('you got an D');
        case 'F': 
            console.log('you got an F');
        default:
            console.log('not a valid grade')
    }

        /*in this example, even though the case is 'C' and it successfully matches, everything after C 
        will be printed so C, D, F and default will be logged to the console*/

        console.log('switch example with break:');


        const grades = 'C'

        switch(grades){
            case 'A': 
                console.log('you got an A');
                break;
            case 'B': 
                console.log('you got an B');
                break;
            case 'C': 
                console.log('you got an C');
                break;
            case 'D': 
                console.log('you got an D');
                break;
            case 'F': 
                console.log('you got an F');
                break;
            default:
                console.log('not a valid grade')
        }

        /*once you add break, it will stop when there is a match*/





// Variables and Block Scope

console.log('variable scope example(global):');


    let age = 30;

    if(true) {
        console.log('inside 1st code block: ', age);
    }

    console.log('outside code block: ', age)

//this will be defined within and outside of the scope



/*console.log('variable scope redeclared: error:');


    let ages = 30;
    let ages = 50;

    if(true) {
        console.log('inside 1st code block: ', ages);
    }

    console.log('outside code block: ', ages)

//this throws an error because you tried to redeclare the variable in the same scope
*/


console.log('reassign a global variable within local scope:');


    let aage = 30;

    if(true) {
         let aage = 40;
        console.log('inside 1st code block: ', aage);
    }

    console.log('outside code block: ', aage)

//you can redefine a variable within a code block becuase the scope is local



console.log('redefine a global variable within the local scope:');


    let agee = 30;

    if(true) {
         agee = 40;
        console.log('inside 1st code block: ', agee);
    }

    console.log('outside code block: ', agee)

//you can also use global variable within the local scope, changing it here changes the global one too



/*console.log('calling a local variable from the global scope:');


    let agge = 30;

    if(true) {
         agge = 40;
         let princess = 'Annalise';
        console.log('inside 1st code block: ', agge, princess);
    }

    console.log('outside code block: ', agge, princess)*/

//princess can be used within local scope, but wont work in global

console.log('nested scopes example');


    let phone = 'iPhone'

    if(true) {
        let phone = 'androi'
        console.log('inside 1st code block: ', phone)

        if(true) {
            console.log('inside 2nd code block: ', phone)

        }
    }

    console.log('outside code block: ', phone)

