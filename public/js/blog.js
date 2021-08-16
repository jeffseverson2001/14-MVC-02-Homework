const editBlogHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-blog-edit').value.trim();
    const content = document.querySelector('#content-blog-edit').value.trim();

    if (title && content) {
        const response = await fetch('/api/blogs/', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

const deleteBlogHandler = async (event) => {

};

const addBlogHandler = async (event) => {
    event.preventDefault();

    console.log("I Am Not Shitting You.  It does not work.");

    const title = document.querySelector('#title-blog-new').value.trim();
    const content = document.querySelector('#content-blog-new').value.trim();

    /*
    if (title && content) {
        const response = await fetch('/api/blogs/add', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/blog');
        } else {
            alert(response.statusText);
        }
    };
    */
};


document.querySelector('#edit-blog-button').addEventListener('submit', editBlogHandler);

document.querySelector('#delete-blog-button').addEventListener('submit', deleteBlogHandler);

document.querySelector('#add-blog-button').addEventListener('submit', addBlogHandler);


document
    .getElementById("show-blog-form-button")
    .addEventListener("click", function () {
        document.getElementById("show-blog-form").classList.remove("hide");
    });

    document
    .getElementById("cancel-blog-button")
    .addEventListener("click", function () {
        document.getElementById("show-blog-form").classList.add("hide");
    })    
