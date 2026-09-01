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

function openModal(title, category, content) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-tag').textContent = category;
    document.getElementById('modal-body').innerHTML = content;
    document.getElementById('article-modal').classList.add('active');
}

function closeModal(event) {
    if (event.target.classList.contains('modal-overlay')) {
        document.getElementById('article-modal').classList.remove('active');
    }
}

function closeModalForce() {
    document.getElementById('article-modal').classList.remove('active');
}
