// Constants -------------------------------------------------
const scores = [45, 55]

scores[1] = 44;

// console.log(scores);

//Function Declaration ---------------------------------------
function add(val1, val2)  {
    return val1+ val2;
}

const addValues = function(val1,val2) {
    return val1+val2;
}

const addArrow = (val1, val2) => {
    return val1 + val2;
}
// Shorthand version
// const addArrow = (val1, val2) => val1 + val2;

const addFive = val1 => val1 + 5;

// console.log(add(5,12));
// console.log(addValues(5,12));
// console.log(addArrow(5,12));
// console.log(addFive(12));

// Literals ---------------------------------------------
const teacher = {
    name: "Eric",
    skill: "Javascript",
    grades: [66,22,38]
}

//console.log(teacher.name, teacher.grades);

const greeting = "'Hello World'";
//const greeting = "\'Hello World\'"; // With backticks to escape quotes

//console.log(greeting);

const html = `
<div>
    ${Math.random()}
</div>
`

//console.log(html);

// Destructuring -------------------------------------
const values = [50, 1000, 200, 20];

//[v1, v2, v3, v4] = values;
[v1,,v3,] = values;

//console.log(v3,v1);

const teacher1 = {
    name: "Eric",
    skill: "Javascript",
    grades: [66,22,38]
}

const {name, skill, grades} = teacher1;

//console.log(name, skill);

//const GetTeacherInfo = (name, skill, grades) => {
const GetTeacherInfo = ({name, skill, grades}) => {
    console.log(name, skill, grades);
}

//GetTeacherInfo(teacher1.name, teacher1.skill, teacher1.grades)
//GetTeacherInfo(teacher1);

// Rest operator ----------------------------------
const nums = [45, 34, 33 ,100];
//const [first, ...remaining] = nums;
//const [first, second, thrid, ...remaining] = nums;
//console.log(remaining);

//const [...nums2] = nums; //deep copy
const nums2 = nums //shallow copy
//console.log(nums);
//console.log(nums2);

nums[1] = 100000;

//console.log(nums);
//console.log(nums2);

//Spread Operator
const myNums = [45, 34, 33, 100];
const myNums2 = [33, 23, 214, 90];
//const myNums3 = myNums + myNums2;
const myNums3 = [...myNums, ...myNums2];

//console.log(myNums3);

const teach = {
    name: "Eric",
    skill: "Javascript"
}

const employee = {
    id: 12345,
    salary: 500000000,
    ...teach
}

//console.log(employee);

//Map ----------------------------------------------
words = ["hello", "my", "name", "is", "Eric"];
upperWords = words.map(word => word.toUpperCase())

//console.log(upperWords);


// Filter ------------------------------------------
longWords = words.filter(word => word.length > 3)
//console.log(longWords);

// Reduce -------------------------------------------
const myValues = [45, 54, 34, 66];

const total = myValues.reduce((acc, curr) => acc + curr, 0);
//console.log(total);
