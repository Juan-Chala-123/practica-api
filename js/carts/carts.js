async function getAllCarts() {
    var response = await qeue(urlCarts, get);

    console.log("Response completa:", response);

    const data = response.carts || response || [];

    console.log("Data usada en tabla:", data);

    table.clear();
    table.rows.add(data);
    table.draw();
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