async function getAllCarts() {
    var response = await qeue(urlCarts, get);
    
    // Acceder al array de carritos dentro de la propiedad "carts"
    var carts = response.carts;
    
    var container = document.getElementById("container");
    container.innerHTML = "";

    carts.forEach(cart => {
        tableLoad(cart);
    });
}

// async function getFindByIdCart() {
//     var id = document.getElementById("idFilter").value;
    
//     if (!id) {
//         getAllCarts(); // Si no hay ID, muestra todos
//         return;
//     }
    
//     let cart = await qeue(urlCarts + "/" + id, get);
        
//     var container = document.getElementById("container");
//     container.innerHTML = "";
        
//     tableLoad(cart);
// }

async function getAddCart(event) {
    event.preventDefault();
    
    let data = {
        userId: parseInt(document.getElementById("userId").value),
        products: [
            {
                id: parseInt(document.getElementById("productId").value),
                quantity: parseInt(document.getElementById("quantity").value)
            }
        ]
    };
    
    let response = await qeue(urlCarts + "/", post, data);
    console.log("Carrito creado:", response);
    getAllCarts();
}

async function getUpdateCart(event) {
    event.preventDefault();
    
    const id = document.getElementById("updateCartBtn").dataset.cartId;
    
    // Para actualizar un producto en el carrito
    let data = {
        products: [
            {
                id: parseInt(document.getElementById("productUpdate").value),
                quantity: parseInt(document.getElementById("quantityUpdate").value)
            }
        ]
    };
    
    let response = await qeue(urlCarts + "/" + id, patch, data);
    console.log("Carrito actualizado:", response);
    getAllCarts();
}

async function getDeleteCart(event) {
    event.preventDefault();
    
    const id = document.getElementById("deleteCartBtn").dataset.cartId;
        
    let response = await qeue(urlCarts + "/" + id, deletes);
    console.log("Carrito eliminado:", response);
    getAllCarts();
}

function tableLoad(user){
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
      const deleteBtn = document.getElementById("deleteCartBtn")
      deleteBtn.dataset.cartId = cart.id;
    }

    var updateIcons = document.createElement("i")
    updateIcons.className="bi bi-pencil-square"
    updateIcons.style.cursor = "pointer"
    updateIcons.setAttribute("data-bs-toggle", "modal");
    updateIcons.setAttribute("data-bs-target", "#updateModal");
    updateIcons.onclick = function () {
      document.getElementById("nameUpdate").value = cart.title
      document.getElementById("priceUpdate").value = cart.price

      const updateBtn = document.getElementById("updateCartBtn")
      updateBtn.dataset.cartId = cart.id;
    }

    //mostrar los datos en las celdas
    cellId.innerText=cart.id;
    cellTitle.innerText=cart.title;
    cellPrice.innerText=cart.price;

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