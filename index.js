// CONDITIONAL -----------------------------------------------
// Set the current grade of the student
let grade = 87;

// Check if grade is an A, B, C, D, or F
if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else if (grade >= 60) {
    console.log("D");
} else {
    console.log("F");
}

// OBJECT KEY LOOPING -----------------------------------------------
let person = { first_name: "John", last_name: "Doe", age: 25 };

for (var key in person) {
    // console.log(person[key])
}

// WHILE -----------------------------------------------
var i = 0;
var sum = 0;
while (i < 5) {
    sum = sum + 1;
    i++;
}

// DO WHILE -----------------------------------------------




// FILTER() -----------------------------------------------
const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
    "happy"
]

let longWords = words.filter(
    function (word) {
        return word.length > 6
    }
)

longWords = words.filter(
    word => word.length > 6
)

// MAP() -----------------------------------------------
let numbers = [1, 4, 9, 16, 22, 20];

let map = numbers.map(
    function (number) {
        return number * 2
    })

// FIND() -----------------------------------------------
let find = numbers.find(
    function (number) {
        return number > 6;
    })

find = numbers.filter(
    function (number) {
        return number % 0 === 1;
    })

// FOREACH() -----------------------------------------------

let foreach = numbers.forEach(function (number) {
    return number;
});

// TERNARY OPERATOR -----------------------------------------------
let num = 2

(numb === 2) ? (console.log("true")) : (console.log("false"))

let numb1 = numb === 2 ? 2 : 3;











