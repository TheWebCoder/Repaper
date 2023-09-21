//Get the string from the page
//controller function
function getValues() {

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value.toLowerCase().replace(/\W/g, '');

    let revString = reverseString(userString);

    displayString(userString, revString);
}


//Reverse the string
//logic function
function reverseString(userString) {

    let revString = [];

    //reverse a string using a foor loop
    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }
    
    return revString;

}

//Display the reversed string to the user
//View function
function displayString(userString, revString) {

    if (userString === revString) {
        //write to the page
        document.getElementById("msg").innerHTML = `Your string ${userString} is a Palindrome`;
        document.getElementById("heading-alert").textContent = "Well Done!";
        document.getElementById("alert").classList.remove("alert-danger");
        document.getElementById("alert").classList.add("alert-success");
    } else {
        document.getElementById("msg").innerHTML = `Your string ${userString} is NOT a Palindrome`;
        document.getElementById("heading-alert").textContent = "Error!";
        document.getElementById("alert").classList.add("alert-danger");
    }

    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
}