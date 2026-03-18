async function getAllPosts(){
  var posts = await qeue(urlPosts, get);

  console.log(posts)
  table.clear();
  table.rows.add(posts);
  table.draw();
}

// async function getFindByIdPost(){
//   var id = document.getElementById("idFilter").value;

//   let post = await qeue(urlPosts + "/" + id, get);

//   var container = document.getElementById("container");

//   container.innerHTML = "";

//   tableLoad(post);
// }

async function getAddPost(event) {
  event.preventDefault();

  var name = document.getElementById("nameId").value;
  var body = document.getElementById("bodyId").value;

  let data = {
    title: name,
    body: body
  }

  let response = await qeue(urlPosts, post, data);

  console.log(response);

  getAllPosts();
}

async function getUpdatePost(event) {
  event.preventDefault();

  const id = document.getElementById("updatePostBtn").dataset.postId;

  var name = document.getElementById("nameUpdate").value;
  var body = document.getElementById("bodyUpdate").value;

  let data = {
    title: name,
    body: body
  }

  let response = await qeue(urlPosts + "/" + id, patch, data);

  console.log(response);

  getAllPosts();
}

async function getDeletePost(event) {
  event.preventDefault();

  const id = document.getElementById("deletePostBtn").dataset.postId;

  let response = await qeue(urlPosts + "/" + id, deletes);

  console.log(response);
}