const textBox = document.querySelector("#textBox")
const output = document.querySelector("#output");

// ----ANONYMOUS FUNCTION----
// function logKey(event) {
//     output.textContent = `You pressed "${event.key}".`;
// }

//  textBox.addEventListener("keydown", logKey);

// ----ARROW FUNCTION----
textBox.addEventListener("keydown", event => {
    output.textContent = `You pressed "${event.key}".`;
});
