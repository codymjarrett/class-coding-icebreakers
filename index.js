/*
1. create a function called getSquare in function.js that returns an object 
2. the object should return a method in it called square that accepts 1 parameter (a number). 
3. this method should take that number and return it multiplied by itself aka squared
4. export that function out of the function.js file and import it into the index.js file
5. invoke that function, and then invoke the square function with a number 
6. console log the result


BONUS: add logic in the square function to ensure that the argument is a number, if it isn't then console log something to the user 
*/


const getSquare = require('./function')


const {square} = getSquare()
console.log(square('a'))