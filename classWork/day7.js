//We want to make a function that can add any student to the class.
// let myClass = ["Ricard", "Tamiru"]
// const addStudentAndReturnClass = (newStudent) => {
//   myClass.push(newStudent)

// return myClass;
// }
// const theValueIGet = addStudentAndReturnClass("Cody")
// addStudentAndReturnClass("Puran")
// console.log(theValueIGet)


// I have 100 users in a database
//user bruce logs into the website - he gives me his email and password
//write a function that gets his info from the database
//const getInfo = () => {
    //ONLY HAVE EMAIL = WE NEED THE USER'S NAME
    //some code that gets the info from the database
   
//   let user = {
//     name: "Bruce",
//     email: "asdfff",
//     friendlist: ["Solomon", "dsa"]
    
//   }
//   return user  // return user.name
  //<<<<<<<<<<<<<<<<
//  }
  //return means to send back / take the place of / equals
//   let userInformation = getInfo()// let username = getInfo()
//   //<<<<<<<<<<<<<<<<
//   console.log(userInformation);// or // console.log(getInfo()) to get object line 20-23

  //

// Object Oriented Programming (OOP)  
//   class Car {
//     //stuff here
//   }             this is blueprint for object

//const newCar = new Car();
//   const car = {
//     speed: 45
//     color: "green", 
//     drive: function () {
//         console.log("car go fast")
//     }
//   }

// class Vehicle { // class is just the template or blueprints to make objects 
//     constructor(speed, color, make) { // properties that objects will have.
//         this.speed = speed; // this. refers to object newCar not class Vehicle
//         this.color = color;
// //         this.make = make; // so this.speed will yield properties/ values speed 45 and this.color will yield orange for object newCar. Must create new object for new values.  anotherCar is second object
//     }
// }

// let newCar = new Vehicle(45, "orange", "ford"); // factories with specific propery values. This is what makes object unique
// let anotherCar = new Vehicle(100, "blue", "chevy"); // factories with specific property values. This is what makes objects unique.

// console.log(newCar, anotherCar)



//Adding a property
// Modify the Vehicle class by adding an additional property named model.
// const car = new Vehicle('A1234', 'Toyota', 'Camry');

// class Vehicle {
//     // myNewCar = {vehicleSpeed: 240, vehicleColor: yellow}
//     constructor(speed, color, owner, year) {
//       this.vehicleSpeed = speed;
//       this.vehicleColor = color;
//       this.vehicleOwner = owner;
//       this.vehicleYear = year;
//       this.logVehicleInformation = () => {
//         console.log("Speed: " + this.vehicleSpeed + " Color: " + this.vehicleColor + " Owner: " + this.vehicleOwner + " Year: " + this.vehicleYear)
//       }
//     }
//   }
//   const plane = new Vehicle("250 mph", "White", "Cody", "1985" )
//prompt 1: Use class Vehicle to make 3 new vehicles called plane, car, and train.
//   let plane = new Vehicle ("250 mph", "White", "Cody", "1985" )
//   let car = new Vehicle ("87 mph", "Red", "Parvathi", "1930" )
//   let train = new Vehicle ("300 mph", "Silver", "Sharon", "1999" )
//   console.log(plane, car, train) //console.log("Plane: " + new Vehicle , + "Car: " + new Vehicle, + "Train: " + newVehicle)  could this work to display "Plane" in the code followed by properties values.

  //prompt 2: Add a new property to class Vehicle called "vehicleYear" (and the parameter "year).
  //prompt 3: Add a new property to class Vehicle called "logVehicleInformation" that will log the speed, color, owner, and year of the vehicle.

  //   Prompt 4: Create a new class called "Doctor" that will make new objects. The class should have at least 4 properties (for example "age"). One property should be a function that will log "time to go to work!". One property should be a list of coworkers.
//   Prompt 5: create a new class called "User" that will make new objects. The class should have user information and the ability to login the user and logout the user - console.log("you are logged in!");

// class Doctor {
//     constructor(height, weight, sex, age) {  
//         this.doctorHeight = height;
//         this.doctorWeight = weight;
//         this.doctorSex = sex;
//         this.doctorAge = age;
//         this.doctorTime = () => "Time to go to work!"
//         }
//     }  
// let drCody = new Doctor("74 inches", 230, "Male", 31, ["Vogue", "Parvathi", "Sharon"]);
// console.log(drCody);
// console.log(drCody.doctorTime());  

//   Prompt 5: create a new class called "User" that will make new objects. The class should have user information and the ability to login the user and logout the user - console.log("you are logged in!");

class User{
    constructor(name, email, age, password) {
        this.userName = name;
        this.userEmail = email;
        this.userAge = age;
        this.userPassword = password;
        this.userLogin = () => "you are logged in!";
        this.userLogout = () => "you are logged out!";
    }
}
let userCody = new User("Cody", "cojack91@gmail.com", 31, "xxxxxxxx")
console.log(userCody)