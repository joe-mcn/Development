//Part 1
function printHello(event){
    console.log("Hello")
}
let formButton1 = $("#button1");
formButton1.on("click", printHello);

//Part 2
function addNumbers(event) {
    let number1 = parseInt(document.getElementById("field1").value);
    let number2 = parseInt(document.getElementById("field2").value);
    let number3 = document.getElementById("field3");
    number3.value = number1 + number2;
}
let formButton2 = $("#button2");
formButton2.on("click", addNumbers);


//Part 3
function hideFunction(event){
    $("#paragraphToHide").hide(500);
}
let formButton3 = $("#button3");
formButton3.on("click", hideFunction);

//Part 4
function validatePhoneNumber(event){
    let formField = $("#phoneField").val();
    let regularExpression = /^[0-9]{3}[-]{1}[0-9]{3}[-]{1}[0-9]{4}$/;
    if(regularExpression.test(formField)) {
        console.log("good")
    }  else {
        console.log("bad")
    }
}
let formButton4 = $("#button4");
formButton4.on("click", validatePhoneNumber);

//Part 5
function jsonFunction(event){
    let firstNameObject = {};
    let firstName= $("#firstName").val();
    firstNameObject.firstName = firstName;
    let firstNameJson = JSON.stringify(firstNameObject);
    console.log(firstNameJson);

    let lastNameObject = {};
    let lastName= $("#lastName").val();
    lastNameObject.lastName = lastName;
    let lastNameJson = JSON.stringify(lastNameObject);
    console.log(lastNameObject);

    let emailObject = {};
    let email= $("#email").val();
    emailObject.email = email;
    let emailJson = JSON.stringify(emailObject);
    console.log(emailObject);
    $("#jsonResult").text(firstNameObject, lastNameObject, emailObject);
}

let formButton5 = $("#button5");
formButton5.on("click", jsonFunction);