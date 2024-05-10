// QUESTION 1
//Write a function which accepts an array of numbers and returns the sum of all the even
//numbers in the array. Have the function use the reduce method to calculate the sum of the
//even numbers

// First way with 2 chainned function calls
//const sumNums = nums => {
//    return nums.filter(num => num % 2 === 0)
//    .reduce((acc, curr) => acc + curr, 0)
//}

//Second way with 1 function call
const sumNums = nums => {
    return nums.reduce( (acc, curr) => {
        return curr % 2 == 0 ? acc + curr : acc;
    }, 0)
}

const result = sumNums([1,2,3,4,5]);

console.log("Question 1 Result: ");
console.log(result);
console.log("-----------------------\n");

// QUESTION 2
//Create an array which represents a person’s skills. The first and second elements are the
//person’s name. The remaining elements in the array are the person’s skills.
const skills1 = ["Eric", "Stock", "Java", "Game Design", "Teaching"];
const skills2 = ["Pranjal", "Patra", "Python"];

const displayPerson = arr => {
    const [fname,lname,...skills] = arr;
    console.log(fname, lname);

    for (const skill of skills){
        console.log(skill);
    }
    console.log();
}

console.log("Question 2 Result: ")
displayPerson(skills1);
displayPerson(skills2);
console.log("-----------------------\n");

//QUESTION 3
//Create an array with the following values [ “hello”, “there”, “how”, “are”, “you”].
//Use the destructuing and the rest operator to store the first two values in variables and to store
//the remaining 3 values in an array.
const words = ["hello", "there", "how", "are", "you"];
[firstWord, secondWord, ...remainingWords] = words;
console.log("Question 3 Results:");
console.log(firstWord, secondWord, remainingWords);
console.log("-----------------------\n");

//QUESTION 4
//Create two arrays. The first array will have the numbers 1 up to 6 and the 2nd array will have the
//numbers 7 up to 15.
//Use the spread operator to create a new array which includes the contents of the first two
//arrays. Console.log the new array.
const firstNums = [1,2,3,4,5,6];
const secondNums = [7,8,9,10,11,12,13,14,15];

const combinedNums = [...firstNums, ...secondNums];
console.log("Question 4 results: ")
console.log(combinedNums);
console.log("-----------------------\n");


//QUESTION 5
//Create an array with several numbers. Use the map method to create a new array where each
//value is the corresponding value in the original array with 10 subtracted. Console.log the new
//array.
const myNumbers = [77,5,34,90,10,1,0,2];
const subbedNumbers = myNumbers.map( num => num - 10);

console.log("Question 5 results: ");
console.log(subbedNumbers);
console.log("-----------------------\n");