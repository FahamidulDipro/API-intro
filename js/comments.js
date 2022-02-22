const comments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()).then(data => showComments(data));
}
const showComments = data => {
    const commentSection = document.getElementById('comment-section');
    for (const comment of data) {
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `<p>${comment.body}</p>
        <br><span style='color:brown;'>${comment.email}</span>`;
        commentSection.appendChild(div);
    }
}
comments();