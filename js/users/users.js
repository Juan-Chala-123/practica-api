async function getAllUsers(){
  var users = await qeue(urlUsers, get);

  var container = document.getElementById("container");
  container.innerHTML = "";

  users.forEach(user => {
    tableLoad(user);
  });
}

async function getFindByIdUser(){
  var id = document.getElementById("idFilter").value;

  let user = await qeue(urlUsers + "/" + id, get);

  var container = document.getElementById("container");

  container.innerHTML = "";

  tableLoad(user);
}

async function getAddUser(event) {
  event.preventDefault();

  var firstName = document.getElementById("firstNameId").value;
  var lastName = document.getElementById("lastNameId").value;
  var age = Number(document.getElementById("ageId").value);

  let data = {
    firstName: firstName,
    lastName: lastName,
    age: age
  }

  let response = await qeue(urlUsers, post, data);

  console.log(response);

  getAllUsers();
}

async function getUpdateUser(event) {
  event.preventDefault();

  const id = document.getElementById("updateUserBtn").dataset.userId;

  var firstName = document.getElementById("firstNameUpdate").value;
  var lastName = document.getElementById("lastNameUpdate").value;
  var age = Number(document.getElementById("ageUpdate").value);

  let data = {
    firstName: firstName,
    lastName: lastName,
    age: age
  }

  let response = await qeue(urlUsers + "/" + id, patch, data);

  console.log(response);

  getAllUsers();
}

async function getDeleteUser(event) {
  event.preventDefault();

  const id = document.getElementById("deleteUserBtn").dataset.userId;

  let response = await qeue(urlUsers + "/" + id, deletes);

  console.log(response);
}