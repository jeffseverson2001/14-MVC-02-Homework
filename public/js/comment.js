const addCommentHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#blog-comment-new').value.trim();
    const blog_id = document.getElementById('add-comment-button').getAttribute("data-id");

    
    if (comment && blog_id) {
        const response = await fetch('/api/comments/add', {
            method: 'POST',
            body: JSON.stringify({ comment, blog_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    };
};

const deleteCommentHandler = async (event) => {
    event.preventDefault();
    
    //console.log(event);

    const comment_id = event.target.attributes["data-id"].value;

    if (comment_id) {
        const response = await fetch(`/api/comments/delete/${comment_id}`, {
            method: 'DELETE',
            body: JSON.stringify({ comment_id }),
            headers: { 'Content-Type': 'application/json' },
        });


        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};


document.querySelector('#add-comment-button').addEventListener('click', addCommentHandler);


document.querySelectorAll('.delete-comment-button').forEach((element) => {
    element.addEventListener('click', deleteCommentHandler);
});



document
    .getElementById("show-comment-form-button")
    .addEventListener("click", function () {
        document.getElementById("show-comment-form").classList.remove("hide");
    });

document
    .getElementById("cancel-comment-button")
    .addEventListener("click", function () {
        document.getElementById("show-comment-form").classList.add("hide");
    }) ;  

