async function getAllPosts(){
  var posts = await qeue(urlPosts, get);

  var container = document.getElementById("container");
  container.innerHTML = "";

  posts.forEach(post => {
    tableLoad(post);
  });
}

async function getFindByIdPost(){
  var id = document.getElementById("idFilter").value;

  let post = await qeue(urlPosts + "/" + id, get);

  var container = document.getElementById("container");

  container.innerHTML = "";

  tableLoad(post);
}

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

function tableLoad(post){
//captura del contenedor
  var container=document.getElementById("container");

    //creación de la estructura de la tabla    
    var register=document.createElement("tr");
    var cellId=document.createElement("td");
    var cellTitle=document.createElement("td");
    var cellPrice=document.createElement("td");
    var options = document.createElement("td")

    var deleteIcons = document.createElement("i")
    deleteIcons.className = "bi bi-trash3"
    deleteIcons.style.cursor = "pointer"
    deleteIcons.setAttribute("data-bs-toggle", "modal");
    deleteIcons.setAttribute("data-bs-target", "#deleteModal");
    deleteIcons.onclick = function () {
      const deleteBtn = document.getElementById("deletePostBtn")
      deleteBtn.dataset.postId = post.id;
    }

    var updateIcons = document.createElement("i")
    updateIcons.className="bi bi-pencil-square"
    updateIcons.style.cursor = "pointer"
    updateIcons.setAttribute("data-bs-toggle", "modal");
    updateIcons.setAttribute("data-bs-target", "#updateModal");
    updateIcons.onclick = function () {
      document.getElementById("nameUpdate").value = post.title
      document.getElementById("bodyUpdate").value = post.body

      const updateBtn = document.getElementById("updatePostBtn")
      updateBtn.dataset.postId = post.id;
    }

    //mostrar los datos en las celdas
    cellId.innerText=post.id;
    cellTitle.innerText=post.title;
    cellPrice.innerText=post.body;

    //estructura para agregar los elementos
    register.appendChild(cellId);
    register.appendChild(cellTitle);
    register.appendChild(cellPrice);
    options.appendChild(deleteIcons)
    options.appendChild(document.createTextNode(" "))
    options.appendChild(updateIcons)
    register.appendChild(options)
    container.appendChild(register);
}