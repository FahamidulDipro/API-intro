const loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => showPosts(data));
}

function showPosts(data) {
    const postSection = document.getElementById('post-section');
    for (const post of data) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `<h2>${post.title}</h2>
        <p>${post.body}</p>
        `;
        postSection.appendChild(div);
    }

}

loadPosts();

function addPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'My new Post',
            body: 'This is my new Post',
            userId: 100,

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }

    }).then(res => res.json()).then(data => console.log(data));
}
addPost();