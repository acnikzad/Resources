import {compose, pipe} from 'lodash/fp'

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

console.log(employee);
console.log(newEmployee);
