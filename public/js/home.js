const viewCommentsHandler = async (event) => {

};


document
    .getElementById("view-comments-button")
    .addEventListener("click", function () {
        document.getElementById("show-comments").classList.remove("hide");
    });



let fred = document.querySelector(".all-comments");
//let fred = document.getElementsByClassName("all-comments").attr("data-id");
let fredData = fred.getAttribute("data-id");

console.log(fred);
console.log(fredData);

//document.querySelector('#view-comments-button').addEventListener('submit', viewCommentsHandler);

