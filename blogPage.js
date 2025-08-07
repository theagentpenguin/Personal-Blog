
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
