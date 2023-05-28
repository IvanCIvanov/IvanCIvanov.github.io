// console.log("I like pizza.");
// console.log("Hello World");
// alert("Warning")
// this is a comment

//alert("Entering this site will turn you gay...");

let username = "empty";
document.getElementById("myButton").onclick = function () {

    username = document.getElementById("myText").value;

    console.log(username);
}
