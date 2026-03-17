async function getAllUsers(){
  var users = await qeue(urlUsers, get);
  console.log(users)
  table.clear();
  table.rows.add(users);
  table.draw();
}

async function getFindByIdUser(){
  var id = document.getElementById("idFilter").value;

  if (!id) return getAllUsers();

  let user = await qeue(urlUsers + "/" + id, get);

  table.clear();
  table.row.add(user).draw();
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