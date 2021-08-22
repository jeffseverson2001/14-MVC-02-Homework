//let formBlogId = document.querySelector(".all-comments").getAttribute("data-id");


const editBlogHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-blog-edit').value.trim();
    const content = document.querySelector('#content-blog-edit').value.trim();
    const user_id = document.getElementById('show-blog-form').getAttribute("data-id");

    if (title && content && user_id) {
        const response = await fetch('/api/blogs/', {
            method: 'POST',
            body: JSON.stringify({ title, content, user_id }),
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

    const title = document.querySelector('#title-blog-new').value.trim();
    const content = document.querySelector('#content-blog-new').value.trim();
    const user_id = document.getElementById('show-blog-form').getAttribute("data-id");

    
    if (title && content && user_id) {
        const response = await fetch('/api/blogs/add', {
            method: 'POST',
            body: JSON.stringify({ title, content, user_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/${user_id}`);
        } else {
            alert(response.statusText);
        }
    };
    
};


//document.querySelector('#edit-blog-button').addEventListener('click', editBlogHandler);

//document.querySelector('#delete-blog-button').addEventListener('click', deleteBlogHandler);

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
    })    


//  Blog Editor
document
    .getElementById("edit-blog-button")
    .addEventListener("click", function () {
        let formBlogId = document.getElementById("edit-blog-button").getAttribute("data-id");
        console.log(formBlogId);
        //document.getElementById(`show-blog-edit-form-${formBlogId}`).classList.remove("hide");
    });

/*
document
    .getElementById("cancel-edit-blog-button")
    .addEventListener("click", function () {
        document.getElementById(`show-edit-form`).classList.add("hide");
    })  
*/
//console.log(user_id);