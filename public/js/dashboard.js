const getBlogHandler = async (event) => {
    event.preventDefault();

    const blog_id = document.getElementById('get-blog-info').getAttribute("data-id");

console.log(blog_id);

    if (blog_id) {
        const response = await fetch('/api/blogs/', {
            method: 'POST',
            body: JSON.stringify({ blog_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}


//document.querySelector('#get-blog-info').addEventListener('click', getBlogHandler);
