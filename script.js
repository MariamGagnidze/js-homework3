// 1) დაწერეთ კოდი სადაც შეამოწმებთ დადებითია თუ უარყოფითი 
// ეს რიცხვი!!

//answer: 

let number = 9.1

let input = prompt("Enter a number:")
if (number % 1 === 0){
    console.log("integer")
}else if(number % 1 !== 0){
    console.log("float")
}


//2)დაწერეთ მარტივი კალკულატორი სადაც გამოიყენებთ ოპერატორებს(+, -, *, /)
// switch case დახმარებით უბრალოდ დარწმუნდით რომ თითოეულ ქეისი ასრულებს ამ მეთოდებს 

//answer: 



let a = 10;
let b = 5;

let operation = "/"; 


switch (operation) {
  case "+":
    console.log(a + b)
    break;

  case "-":
    console.log(a - b)
    break;

  case "/":
    console.log(a / b)
    break;

  case "*":
    console.log(a * b)
    break;

  default:
    console.log("Error");
    break;
}



//3) დაწერეთ იგივე კალკულატორი if else დახმარებით!!

//answer: 


if (operation === "+") {
    console.log(a + b);
} else if (operation === "-") {
    console.log(a - b);
} else if (operation === "/") {
    console.log(a / b);
} else if (operation === "*") {
    console.log(a * b);
} else {
    console.log("Error");
}

//4) დაწერეთ ავტორიზაციის ლოგიკა სადაც უნდა დავარეგისტრიროთ User
// user უნდა შემოყავდეს firstName,lastName,email,password,phoneNumber
// firstName,lastName,email,password არის სავალდებულო ველები
// ამიტომ ერთიანად შეამოწმეთ ეს ოთხი ველი და დარწმუნდით თუ ცარიელი input 
// არარის მაშინ დალოგეთ რომ შენ დარეგისტრირდი წარმატებით თუ ცარიელია მაშინ
// დალოგეთ "input is required" გამოიყენეთ if else

//answer:

let User = [ 
    { 
    firstName: 'name',
    lastName: 'lastname',
    email: 'email',
    password: 'pass',
    phoneNumber:'267839'
    }	]


    if (User.firstName === '' ||
    User.lastName === '' ||
    User.email === '' ||
    User.password === '' ||
    User.phoneNumber === '') {
        console.log("Error");
    } else {
        console.log("შენ დარეგისტრირდი წარმატებით");
    }



