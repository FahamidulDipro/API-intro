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