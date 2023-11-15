document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('customerName').value = '';
    document.getElementById('customerEmail').value = '';
    document.getElementById('productSelection').selectedIndex = 0;
    document.getElementById('quantity').value = '';
});

let productLikes = {};

document.addEventListener('DOMContentLoaded', function () {
            const loginForm = document.getElementById('loginForm');
            loginForm.addEventListener('submit', function (event) {
                event.preventDefault();
                
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;

                if (username === 'dario' && password === 'dario') {
                    alert('Login successful!');
                    window.location.replace('proizvodi.html');
                } else {
                    alert('Invalid username or password. Please try again.');
                }
            });
		});
		
function likeProduct(productName) {
    if (!productLikes[productName]) {
        productLikes[productName] = 0;
    }

    productLikes[productName]++;
    updateLikeCounter(productName);
}

function updateLikeCounter(productName) {
    const likeCounter = document.getElementById(`likeCounter-${productName}`);
    
    if (likeCounter) {
        likeCounter.textContent = `Likes: ${productLikes[productName]}`;
    }
}

function addComment(productName) {
    const commentInput = document.getElementById(`comment-${productName}`);
    const commentText = commentInput.value.trim();

    if (commentText !== '') {
        const commentsDiv = document.getElementById(`comments-${productName}`);
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentsDiv.appendChild(newComment);

        commentInput.value = '';
    }
}


