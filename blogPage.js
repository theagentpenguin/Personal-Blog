
//const formData = document.getElementById('blog-post-form');
//console.log(formData);
// document.getElementById('blog-post-form').addEventListener('submit', function(event) {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   const dataObj = Object.fromEntries(formData.entries());
//   console.log(dataObj.title);
// });
document.getElementById('blog-post-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const dataObj = Object.fromEntries(formData.entries());
  //console.log(dataObj);

  fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'  
    },
    body: JSON.stringify(dataObj) // sends as multipart/form-data
  })
    .then(response => response.json())
    .then(data => {
      console.log('Server response:', data);
    });
});
// ... (your existing script content) ...

document.getElementById("view-all").onclick = () => {
    fetch('http://localhost:8080/',{
        method: 'GET'

    })
    .then(response => response.json())
    .then(posts=>{
        const viewArea = document.getElementById('view-area');
        viewArea.innerHTML = '';
        
        posts.forEach(post =>{
        const div = document.createElement('div');
        div.classList.add('post-item');
        div.innerHTML=`<h3>${post.title}</h3>
        <p>${post.content}</p>
        `;
        viewArea.appendChild(div);
        });
        

    });

};
