import {compose, pipe} from 'lodash/fp'
import {produce} from 'immer'

let username = "  Harley  ";
let message = "Hello " +username.trim()+ " Good morning";

const trim = (name) => name.trim();
const generateMessage = message => name => `Hello ${name}, ${message}!`;
const convertToUpper = (name) => name.toUpperCase();

const newFunc = pipe(trim, convertToUpper, generateMessage("Good Morning"));
const result = newFunc(username);

console.log(result);

// ***********************************

const employee = { name: "Martin", age: "32", company: {country: "Canada", city: "Toronto"} };
const newEmployee = {
    ... employee,
    name: "Jimmy",
    company: {...employee.company, city: "Calgary"}
}

produce(employee, (draftState) =>{
    draftState.name = "Jimmy";
    draftState.company.city = "Calgary";
})

console.log(employee);
console.log(newEmployee);

// ***********************************
// adding items
const numbers = [10, 20, 30, 40];

const index = numbers.indexOf(30);
const addedNumbers = [...numbers.slice(0, index), 50, ...numbers.slice(index)];
console.log(addedNumbers);

// updating items
const updated = numbers.map((a) => (a === 40 ? 80 : a))
console.log(updated)

//removing items
const removed = numbers.filter(a => a !== 30);
console.log(removed)

// ***********************************
// exercise