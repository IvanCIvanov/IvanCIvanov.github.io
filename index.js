window.addEventListener('DOMContentLoaded', runScript);

async function runScript() {
    // Create HyperLink Jump to Top (Appended at bottom)
    const topJump = document.createElement('a');
    topJump.id = "centeredHyperLink";
    topJump.href = "index.html";
    topJump.target = "_self";
    topJump.innerText = "To the Top";

    // Find height of loaded DOM
    const mainDiv = document.querySelector('main');
    const height = mainDiv.getBoundingClientRect().height;

    // var creation for body and p elements
    const getBody = document.querySelector('body');


    // loop appending P until the scroll height is acheived. 
    let count = 1;
    while (document.body.scrollHeight <= window.innerHeight) {
        getBody.append(document.createElement('br'));

    }

    // finally, append Hyperlink TopJump
    getBody.append(topJump);
}




