const button = document.getElementById("button");
const result = document.getElementById("result");

button.onclick = async function() {

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const data = await response.json();

    result.textContent = data.title;
};