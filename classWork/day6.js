// const returnPlusFive = number => number+5

// Prompt 1: I want you to write a function that has a dog age, the function is for the dogs birthday and will increase the dogs age by 1.

// const displayDogAge = () => {
//     console.log("Dog Info.")
//   }
//   displayDogAge();
  
//   let dog = {
//     age: "5",
//     birthday: 10/11/2022
//   }
  
//   function increaseDogsBirthday() {
//     dog.Age = "5" + age++
//     console.log(dog)
//   }
//   const increaseDogsAge = () => {
//     let age = 15
//     age++
//     console.log(age)
//   }
//   increaseDogsAge()
  
  //increaseDogsBirthday
// New
// 10:58
// Prompt 2: I want you to make an array of dog names with 5 dogs. The dogs are at doggy daycare. The last dog in the array got picked up and three new dogs arrived


// let dogNames = ["Alpha", "Bravo", "Charlie", "Delta", "Echo"]
// const dogsStayingAtDoggyDaycare = () => {
//     console.log("dogNames")
// }
// dogNames.pop()
// dogNames.push("Foxtrot", "Golf", "Hotel")
// console.log(dogNames);

// Prompt 3: I want you to make a user object with 5 properties (name, age, email, friends, and hobbies). ONE function will add 1 to the age, ANOTHER FUNCTION will add a new friend.
// let MosesGrade = null;

// const changeMosesGrade = (parameter) => {
//     MosesGrade = parameter;
// }
// changeMosesGrade(94);
// console.log("Grade" , MosesGrade)

// changeMosesGrade(55);

// Prompt 1: make a variable called studentGrade. Write a function that takes a parameter called grade. Set the student's grade to 80. log it.
// change the grade to 55. Log it. Change grade to 99.

let studentGrade = 0
const changeStudentGrade = (grade) => {
    studentGrade = grade
}
changeStudentGrade(80);
console.log(studentGrade)

changeStudentGrade(55);
console.log(studentGrade)

changeStudentGrade(99);
console.log(studentGrade)

// Prompt 2: Make an array of students in a kindergarten class. create a function that has a parameter of name and adds that name to the class.
// Add 3 students to the class.

// let studentsArray = ["Moses", "Vogue", "Long", "Cody"]
// const changeStudentsArray = (name) => {
//     studentsArray.push(name)
// }
// changeStudentsArray("ariana")
// changeStudentsArray("Oriana")
// changeStudentsArray("gary")
// console.log(studentsArray)



// Prompt 3: Make a user object. Make a function that takes user as a parameter and checks if their age is above 21 - add a new property to the object called canDrink and assign it true or false.
// If the user has no email log "User is unverfied"
let user1 = {

}
//let user1 = {
    age: 22, email: ''
}

let user2 = {
    age: 17, email: "aasflkjsa@gmail.com"
}

const checkIfLegalToDrink = (user) =>{
    if(user.age >= 21) {
        user.canDrink = true;
    }else{
        user.canDrink = false
        console.log("User is too young to drink!!! :(")
    }

    if(!(user.email)){
        console.log("User is unverified")
    }else{
        console.log("User is verified")
    }
}

checkIfLegalToDrink(user1)
checkIfLegalToDrink(user2)
console.log(user1)
console.log(user2)



// Prompt 4: Doggy Daycare. Make array of present dogs. Make function that takes a parameter of newDogs (array). take the array of new dogs and add them to the array of present dogs.

let presentDogs = ["Alpha", "Bravo", "Charlie", "Delta"]
let newDogs = ["Echo", "Foxtrot", "Golf"]
const addingDogArrays = (presentDogs, newDogs) => newArray.forEach(element) {
    presentDogs.push(newDogs)
}
addingDogArrays("Echo")
addingDogArrays("Foxtrot")
addingDogArrays("Golf")
console.log(presentDogs);