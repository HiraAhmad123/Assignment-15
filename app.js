//Chapter 10 (if statements)

//Q no 1
 
 var city = "Karachi";

  if (city === "karachi"); {
    console.log("The city of lights");
  }


  //Q no 2
  var x = "y";

  if ( x === "y"); {
  var z = prompt ("Please Enter the value of z :");
}

//Q no 3

var zipcode = "10010";

if (zipcode  === 10010){
    alert("Karachi");
}
 else{
    alert("Please write correct city");
}

//Q no 4

var numericalValue =  50;
if (numericalValue === 50){
    numericalValue = 100;
}
console.log(numericalValue);


//Chapter 11 (Comparison Operators)

// Q no 1

var x = 10;
var y = 20;

if (x !== y){
    console.log("x is not equal to y");
}

// Q no 2

var num1 = 10 ;
var num2 = 5 

if(num1 >= num2){
    console.log("num1 is greater than or equal to num2");
}

// Q no 3

// var num = 10;
// var newNum = 20 ;

// If (num !== newNum );{
//     num = 50;
// }

// console.log("num");

// Q no 4

var number1 = 40;
var number2 = 60;

if(number1 !== number2){
    alert("Congratulations !");
}

// Q no 5
var firstName = "Ahmad ";

var question = prompt("Enter your First Name");

if( question !== firstName){
    alert("No Match");
}

// Chapter 12 (if…else and else if statements)

//Q no 1 
var box1 = 100;
var box2 = 80;

if(box1 > box2){
    alert("box1 is greater than box2");
}

else {
    alert( "box1 is less than box2 ");
}

//Q no 2

var percentage = +prompt("Enter Percentage");

var grade;

if (percentage >= 80 ){
    console.log(" your grade is A+");

}

 else if (percentage >= 70 ){
    console.log(" your grade is A");

}

 else if (percentage >= 60 ){
    console.log(" your grade is B");

}

else if (percentage >= 50 ){
    console.log(" your grade is C");

}

//Q no 3

var a = 8;

if (a === 10){
    alert("a is 10");
}
else{
    alert("The correct value of a is 8")
}

//Q no 4

var city = prompt("Please Enter a City");

if (city === "karachi" ){
    alert("You Enter Karachi.. ")
}
else if ( city === "Lahore.."){
    alert("You Enter Lahore ");
}
else{
    alert("That's a different City..")
}

//Chapter 13 (Testing sets of Conditions)

//Q no 1

var a = "true";
var b = "true";
var c = "true";
var d = "true";

if (a == b){
    console.log("true");
}

if (c == d){
    console.log("true");
}

//Q no 2


var a = 5;
var b = 5;
var c = 10;
var d = 7;

if (a == b){
    console.log( "True");
}

if (c != d); {
    console.log("False");
}

//Q no 3

// var name = "Hamza" and "Arsalan"; 


// if (name == "Hamza" name == "Arsalan"){
//     console.log(" name is Hamza..");
// } 

var age = 60;
if (age < 60){
    console.log("age is less than 60");

}


//Q no 4

var valueNum1 = 10;
var valueNum2 = 20 ;

if( valueNum1 < valueNum2 ){
    console.log("valueNum1 is less than valueNum2");
}

//Q no 5

var firstName = "Muhammad";
var lastName = "Ibrahim";

var yourfirstName = prompt("Enter your First Name");
var yourlastName =  prompt("Enter your last Name");

if ( firstName === "Muhammad"){

    alert(" Your name Matches..");
}
else {
    alert("Name does not match.");
}

if ( lastName === "Ibrahim"){

    alert("Your name Matches..");
}
else {
    alert("Name does not match.");
}
//Chapter 14 (If statements nested)

//Q no 1

var password =prompt ("Please Enter your password");

if (password != ""){
    if( password.lenght <= 5)
        alert("Password must be greater than 5");
    }
    else{
        alert("OK..");
    }
    
    //Q no 2

    var a = 1;
    var c = "MAX";

    if (a === 1) {
        if (c === "MAX") {
            alert("OK..");
        }
    }

 //Q no 3

 var a = 1;
 var c = "Max" ;

 if (a === 1 && c === "Max") {
    alert("OK");
 }

 //Q no 4

 var value1 = 20 ;
 var value2 = 20 ;

  if (value1 === value2 ) {
    if (value1 <= value2){
        alert("Both conditions are true...");
    }
  }

    
