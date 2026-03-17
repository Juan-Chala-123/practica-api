let table;

document.addEventListener("DOMContentLoaded", () => {
    table = new DataTable('#table-users', {
        columns: [
            { data: 'id' },
            { data: 'firstName' },
            { data: 'lastName' },
            { data: 'age' },
            { data: null } // columna acciones
        ],
        createdRow: function (row, data, dataIndex) {

            const optionsCell = row.children[4];
            optionsCell.innerHTML = "";

            var deleteIcons = document.createElement("i");
            deleteIcons.className = "bi bi-trash3";
            deleteIcons.style.cursor = "pointer";
            deleteIcons.setAttribute("data-bs-toggle", "modal");
            deleteIcons.setAttribute("data-bs-target", "#deleteModal");

            deleteIcons.onclick = function () {
                document.getElementById("deleteUserBtn").dataset.userId = data.id;
            };

            var updateIcons = document.createElement("i");
            updateIcons.className = "bi bi-pencil-square";
            updateIcons.style.cursor = "pointer";
            updateIcons.setAttribute("data-bs-toggle", "modal");
            updateIcons.setAttribute("data-bs-target", "#updateModal");

            updateIcons.onclick = function () {
                document.getElementById("firstNameUpdate").value = data.firstName;
                document.getElementById("lastNameUpdate").value = data.lastName;
                document.getElementById("ageUpdate").value = data.age;

                document.getElementById("updateUserBtn").dataset.userId = data.id;
            };

            optionsCell.appendChild(deleteIcons);
            optionsCell.appendChild(document.createTextNode(" "));
            optionsCell.appendChild(updateIcons);
        }
    });

    getAllUsers();
});

// console.log(typeof DataTable);