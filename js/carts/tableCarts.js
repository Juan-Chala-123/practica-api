let table = createTable({
    tableId: "table-carts",

    columns: [
        { title: "ID", data: "id" },
        { title: "User", data: "userId" },
        { 
            title: "Products", 
            data: "products",
            render: (products) => {
                console.log("Productos a renderizar:", products);
                if (!Array.isArray(products)) return "No products";
                return products.map(p => `${p.title} (x${p.quantity})`).join("<br>")
            } 
        }
    ],

    onDelete: (data) => {
        document.getElementById("deleteCartBtn").dataset.cartId = data.id;
    },

    onEdit: (data) => {
        // document.getElementById("nameUpdate").value = data.name;
        // document.getElementById("bodyUpdate").value = data.body;

        document.getElementById("updateCartBtn").dataset.cartId = data.id;
    }
});

getAllCarts();