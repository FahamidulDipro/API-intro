const loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => showPosts(data));
}

function showPosts(data) {
    const postSection = document.getElementById('post-section');
    for (const post of data) {
        const div = document.createElement('div');
        const p = document.createElement('p');
        div.innerText = post.title;
        p.innerText = post.body;
        postSection.appendChild(div);
        div.appendChild(p);
    }

}

loadPosts();