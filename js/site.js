//get our user input
function getValues() {
    //make sure the alert is invisible
    if (document.getElementById("alert").classList.contains("visible")) {
        document.getElementById("alert").classList.add("invisible");
    }

    //get user string for the page
    let userString = document.getElementById("userString").value;

    //check for palindrome
    let returnObj = checkForPalindrome(userString);

    //display our message to the screen
    displayMessage(returnObj);
}

//check if the string is a palindrome
function checkForPalindrome(userString) {
    //Taco Cat
    //taC ocaT

    userString = userString.toLowerCase();

    //remove spaces and special characters

    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    let revString = [];
    let returnObj = {};

    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }

    if (revString == userString) {
        returnObj.msg = "Well done! You entered a Palindrome!"
    } else {
        returnObj.msg = "Sorry! You did not enter a Palindrome!"
    }

    returnObj.reversed = revString;

    return returnObj;
}

function displayMessage(returnObj) {
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}