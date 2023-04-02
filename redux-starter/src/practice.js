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

produce(employee, (draftState) => {
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

const book = {
    author: "Robert Kiyosaki",
    book: {
        name: "Rich Dad Poor Dad",
        price: "$8",
        rating: 4.7,
          }
        };

const newBook = {
    ...book,
    book: {...book.book, price: "$10"}
};

console.log(newBook)

const arrayOfBooks = ["Book1", "Book2", "Book3"];
const updatedBook = arrayOfBooks.map((a) => (a === "Book2" ? "Book4" : a));

console.log(updatedBook);

// ***********************************
// reducers

function reducer(state =[], action) {
    if(action.type == "ADD_TASK") {
        return [
            ...state,
            {
                id: ++id,
                task: action.payload.task,
                completed: false 
            }
        ]
    }
    else if(action.type === "REMOVE_TASK") {
        return state.filter(task => task.id !== action.payload.id)
    }

}
