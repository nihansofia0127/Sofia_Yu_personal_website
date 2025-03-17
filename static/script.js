
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

function showList() {
    var list = document.getElementById("funList");
    var button = document.getElementById("showListButton");

    if (list && button) {
        list.style.display = "block"; // show the list
        button.style.display = "none"; // hide the button
    }
}


window.onload = function() {
    greetingFunc();  
    addYear();
};


