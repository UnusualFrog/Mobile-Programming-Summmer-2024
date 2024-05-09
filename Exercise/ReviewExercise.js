// QUESTION 1
const sumNums = nums => {
    return nums.filter(num => num%2 === 0)
    .reduce((acc, curr) => acc + curr, 0)
}

const result = sumNums([1,2,3,4,5]);

console.log("Question 1 Result: ");
console.log(result);

// QUESTION 2
const skills1 = ["Eric", "Stock", "Java", "Game Design", "Teaching"];
const skills2 = ["Pranjal", "Patra", "Python"];

const seperateAttributes = arr => {
    const [fname,lname,,] = arr;
    const [,,...skills] = arr
    console.log(fname, lname);

    for (let skill of skills){
        console.log(skill);
    }
}

console.log("Question 2 Result: ")
seperateAttributes(skills1);