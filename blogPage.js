

const form = document.getElementById('blog-post-form');
console.log(form);
function addBlog(){
    console.log("the button has been clicked!");
    fetch('http://localhost:8080/posts');
}
