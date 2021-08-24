//let formBlogId = document.querySelector(".all-comments").getAttribute("data-id");

const editBlogHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-blog-edit').value.trim();
    const content = document.querySelector('#content-blog-edit').value.trim();
    const blog_id = document.getElementById('show-edit-blog-form').getAttribute("data-id");
    const user_id = document.getElementById('edit-blog-button').getAttribute("data-id");

    if (title && content) {
        const response = await fetch(`/api/blogs/edit/${blog_id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });


        if (response.ok) {
            document.location.replace(`/dashboard/${user_id}`);
        } else {
            alert(response.statusText);
        }
    }
};


const deleteBlogHandler = async (event) => {
    event.preventDefault();
    
    const blog_id = document.getElementById('show-edit-blog-form').getAttribute("data-id");
    const user_id = document.getElementById('delete-blog-button').getAttribute("data-id");


    if (blog_id) {
        const response = await fetch(`/api/blogs/delete/${blog_id}`, {
            method: 'DELETE',
            body: JSON.stringify({ blog_id }),
            headers: { 'Content-Type': 'application/json' },
        });


        if (response.ok) {
            document.location.replace(`/dashboard/${user_id}`);
        } else {
            alert(response.statusText);
        }
    }
};


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

document.querySelector('#edit-blog-button').addEventListener('click', editBlogHandler);

document.querySelector('#delete-blog-button').addEventListener('click', deleteBlogHandler);

document.querySelector('#add-blog-button').addEventListener('click', addBlogHandler);


document
    .getElementById("show-edit-blog-form-button")
    .addEventListener("click", function () {
        document.getElementById("show-blog-form").classList.add("hide");
        document.getElementById("show-edit-blog-form").classList.remove("hide");
    });

document
    .getElementById("cancel-edit-blog-button")
    .addEventListener("click", function () {
        document.getElementById("show-edit-blog-form").classList.add("hide");
    }) ;  


document
    .getElementById("show-blog-form-button")
    .addEventListener("click", function () {
        document.getElementById("show-edit-blog-form").classList.add("hide");
        document.getElementById("show-blog-form").classList.remove("hide");
    });

document
    .getElementById("cancel-blog-button")
    .addEventListener("click", function () {
        document.getElementById("show-blog-form").classList.add("hide");
    }) ;  



