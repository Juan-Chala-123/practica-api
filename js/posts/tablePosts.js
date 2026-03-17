let table = createTable({
    tableId: "table-posts",

    columns: [
        { title: "ID", data: "id" },
        { title: "Nombre", data: "title" },
        { title: "Body", data: "body" }
    ],

    onDelete: (data) => {
        document.getElementById("deletePostBtn").dataset.postId = data.id;
    },

    onEdit: (data) => {
        document.getElementById("nameUpdate").value = data.name;
        document.getElementById("bodyUpdate").value = data.body;

        document.getElementById("updatePostBtn").dataset.postId = data.id;
    }
});

getAllPosts();