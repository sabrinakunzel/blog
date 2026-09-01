function filterPosts(category) {
    const posts = document.querySelectorAll('#posts-container article');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    posts.forEach(post => {
        if (category === 'todos' || post.getAttribute('data-category') === category) {
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    });
}

function toggleLike(button) {
    const countSpan = button.querySelector('.count');
    let count = parseInt(countSpan.textContent);

    if (button.classList.contains('liked')) {
        button.classList.remove('liked');
        countSpan.textContent = count - 1;
    } else {
        button.classList.add('liked');
        countSpan.textContent = count + 1;
    }
}
