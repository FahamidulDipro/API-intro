const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(data => console.log(data));
}
document.getElementById('load-data').addEventListener('click', loadData);

document.getElementById('load-user').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => displayUser(data));
})
const displayUser = (data) => {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name}, Email: ${user.email}`;
        ul.appendChild(li);
    }
}