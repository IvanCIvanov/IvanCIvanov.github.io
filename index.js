// console.log("I like pizza.");
// console.log("Hello World");
// alert("Warning")
// this is a comment


let username = "empty";
document.getElementById("myButton").onclick = function () {

    username = document.getElementById("myText").value;

    console.log(username);
}
