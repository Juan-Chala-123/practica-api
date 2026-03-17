let table = createTable({
    tableId: "table-users",

    columns: [
        { title: "ID", data: "id" },
        { title: "Nombre", data: "firstName" },
        { title: "Apellido", data: "lastName" },
        { title: "Edad", data: "age" }
    ],

    onDelete: (data) => {
        document.getElementById("deleteUserBtn").dataset.userId = data.id;
    },

    onEdit: (data) => {
        document.getElementById("firstNameUpdate").value = data.firstName;
        document.getElementById("lastNameUpdate").value = data.lastName;
        document.getElementById("ageUpdate").value = data.age;

        document.getElementById("updateUserBtn").dataset.userId = data.id;
    }
});

getAllUsers();