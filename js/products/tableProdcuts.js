let table = createTable({
    tableId: "table-products",

    columns: [
        { title: "ID", data: "id" },
        { title: "Nombre", data: "title" },
        { title: "Price", data: "price" }
    ],

    onDelete: (data) => {
        document.getElementById("deleteProductBtn").dataset.productId = data.id;
    },

    onEdit: (data) => {
        document.getElementById("nameUpdate").value = data.name;
        document.getElementById("priceUpdate").value = data.price;

        document.getElementById("updateProductBtn").dataset.productId = data.id;
    }
});

getAllProducts();