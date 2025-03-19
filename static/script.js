
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C); 

// window.alert("hi", z);



function SumNPrint(x1, x2) {
    var x3 = x1 + x2; 
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}


var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("found the Banana in " + i);
        }
    }
}
// findTheBanana(L1);
// findTheBanana(L2);


function forEachFindTheBanana(arr) {
    arr.forEach(function(item, index) {
        if (item === "Banana") {
            alert("found the Banana in " + index);
        }
    });
}

// forEachFindTheBanana(L1);
// forEachFindTheBanana(L2);


function greetingFunc() {
    var d = new Date(); 
    var h = d.getHours();
    var greetingText = ""; 

    if (h < 12) {
        greetingText = "Good morning";
    } else if (h < 18) {
        greetingText = "Good afternoon";
    } else if (h < 20) {
        greetingText = "Good evening";
    } else {
        greetingText = "Good night";
    }

    var E = document.getElementById("greeting");
    if (E) {
        E.innerHTML = greetingText + ", I am Sofia";
    }
}

// window.onload = greetingFunc;

// greetingFunc();s


function addYear() {
    var currentYear = new Date().getFullYear();
    var yearElement = document.getElementById("copyYear");
    if (yearElement) {
        yearElement.innerHTML = "designed and coded by Sofia Yu &copy; " + currentYear;
    }
}

// function showList() {
//     var list = document.getElementById("funList");
//     var button = document.getElementById("showListButton");

//     if (list && button) {
//         list.style.display = "block"; // show the list
//         button.style.display = "none"; // hide the button
//     }
// }


window.onload = function() {
    greetingFunc();  
    addYear();
};

$(document).ready(function () {
    $("#fullBio").hide();
    $("#readLessBtn").hide();

    $("#readMoreBtn").click(function () {
        $("#shortBio").hide();
        $("#fullBio").fadeIn();
        $("#readLessBtn").show();
    });

    $("#readLessBtn").click(function () {
        $("#fullBio").fadeOut(function () {
            $("#shortBio").show();
            $("#readLessBtn").hide();
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const formError = document.getElementById("formError");
    const submitButton = document.getElementById("submit_button");

    if (submitButton) { // Check if submit_button exists before adding event listener
        submitButton.addEventListener("click", function (event) {
            console.log("submit");
            let valid = true;

            // Name validation
            const name = document.getElementById("name");
            const nameError = document.getElementById("nameError");
            if (!name || !name.checkValidity()) {
                if (nameError) nameError.textContent = "Please enter your name.";
                valid = false;
            } else {
                if (nameError) nameError.textContent = "";
            }

            // Email validation
            const email = document.getElementById("email");
            const emailError = document.getElementById("emailError");
            if (!email || !email.checkValidity()) {
                if (emailError) emailError.textContent = "Please enter a valid email.";
                valid = false;
            } else {
                if (emailError) emailError.textContent = "";
            }

            // Comment validation
            const comment = document.getElementById("comment");
            const commentError = document.getElementById("commentError");
            if (!comment || !comment.checkValidity()) {
                if (commentError) commentError.textContent = "Please enter a message.";
                valid = false;
            } else {
                if (commentError) commentError.textContent = "";
            }

            // Show form error message if validation fails
            if (!valid) {
                console.log("Form is invalid.");
                if (formError) formError.innerHTML = "Please fill out the form correctly so I can get back to you.";
                event.preventDefault(); // Prevent form submission
            } else {
                if (formError) formError.textContent = "";
            }
        });
    }
});

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            document.getElementById("adviceText").innerText = data.slip.advice;
        })
        .catch(error => {
            console.error("Error fetching advice:", error);
            document.getElementById("adviceText").innerText = "Oops! Something went wrong. Try again!";
        });
}
