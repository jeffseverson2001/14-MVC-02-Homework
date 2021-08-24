const addBlogHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-blog-new').value.trim();
    const content = document.querySelector('#content-blog-new').value.trim();
    const user_id = document.getElementById('add-blog-button').getAttribute("data-id");

    
    if (title && content && user_id) {
        const response = await fetch('/api/blogs/add', {
            method: 'POST',
            body: JSON.stringify({ title, content, user_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/dashboard/${user_id}`);
        } else {
            alert(response.statusText);
        }
    };
    
};


document.querySelector('#add-blog-button').addEventListener('click', addBlogHandler);


document
    .getElementById("show-blog-form-button")
    .addEventListener("click", function () {
        document.getElementById("show-blog-form").classList.remove("hide");
    });

document
    .getElementById("cancel-blog-button")
    .addEventListener("click", function () {
        document.getElementById("show-blog-form").classList.add("hide");
    }) ; 