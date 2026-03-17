//función para consulta todos los productos 
async function getAllProducts(){
  var products = await qeue(urlProducts, get);

  console.log(products)
  table.clear();
  table.rows.add(products);
  table.draw();
}

//función para consultar productos por id 
// async function getFindByIdProduct(){
//   // Obtenemos el valor del input donde el usuario ingresa el ID
//   var id = document.getElementById("idFilter").value;

//   // Llamada a la función qeue para hacer GET al endpoint específico del producto
//   // Se construye la URL concatenando el ID
//   let product = await qeue(urlProducts + "/" + id, get);

//   // Capturamos el contenedor de la tabla
//   var container = document.getElementById("container");

//   // Limpiamos la tabla antes de mostrar el producto buscado
//   container.innerHTML = "";

//   // Cargamos el producto en la tabla
//   tableLoad(product);
// }

async function getAddProduct(event) {
  event.preventDefault();

  // Obtenemos los valores del formulario (nombre y precio del producto)
  var name = document.getElementById("nameId").value;
  var price = Number(document.getElementById("priceId").value); // Convertimos a número

  // Creamos un objeto con los datos a enviar al servidor
  let data = {
    title: name,
    price: price
  }

  // Llamada a la API con POST usando la función qeue
  // Enviamos los datos del nuevo producto
  let response = await qeue(urlProducts, post, data);

  // Mostramos la respuesta del servidor en consola para depuración
  console.log(response);

  // Actualizamos la tabla mostrando todos los productos incluyendo el nuevo
  getAllProducts();
}

async function getUpdateProduct(event) {
  event.preventDefault();

  // Obtenemos el ID del producto desde el dataset del botón del modal
  // Esto asegura que estamos editando el producto correcto
  const id = document.getElementById("updateProductBtn").dataset.productId;

  // Obtenemos los valores actualizados desde los inputs del modal
  var name = document.getElementById("nameUpdate").value;
  var price = Number(document.getElementById("priceUpdate").value);

  // Creamos un objeto con los datos actualizados a enviar al servidor
  let data = {
    title: name,
    price: price
  }

  // Llamada a la API con PATCH al producto específico
  let response = await qeue(urlProducts + "/" + id, patch, data);

  // Mostramos la respuesta del servidor para depuración
  console.log(response);

  getAllProducts();
}

async function getDeleteProduct(event) {
  event.preventDefault();
  
// Obtenemos el ID del producto a eliminar desde el dataset del botón del modal
  const id = document.getElementById("deleteProductBtn").dataset.productId;

  // Llamada a la API con DELETE al producto específico
  let response = await qeue(urlProducts + "/" + id, deletes);

  // Mostramos la respuesta del servidor en consola
  // (normalmente json-server devuelve un objeto vacío {})
  console.log(response);
}

function tableLoad(product){
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
      const deleteBtn = document.getElementById("deleteProductBtn")
      deleteBtn.dataset.productId = product.id;
    }

    var updateIcons = document.createElement("i")
    updateIcons.className="bi bi-pencil-square"
    updateIcons.style.cursor = "pointer"
    updateIcons.setAttribute("data-bs-toggle", "modal");
    updateIcons.setAttribute("data-bs-target", "#updateModal");
    updateIcons.onclick = function () {
      document.getElementById("nameUpdate").value = product.title
      document.getElementById("priceUpdate").value = product.price

      const updateBtn = document.getElementById("updateProductBtn")
      updateBtn.dataset.productId = product.id;
    }

    //mostrar los datos en las celdas
    cellId.innerText=product.id;
    cellTitle.innerText=product.title;
    cellPrice.innerText=product.price;

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