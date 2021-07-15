//grab the post-title and post-body values from the form and send them with a POST request to /api/posts
async function newFormHandler(event) {
    event.preventDefault();
          
    const title = document.querySelector('input[name="post-title"]').value;
    const post_body = document.querySelector('input[name="post-body"]').value;
          
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
          
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
          
document.querySelector('.new-post-btn').addEventListener('click', newFormHandler);