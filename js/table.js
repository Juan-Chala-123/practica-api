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

            var container=document.getElementById("container");

            //creación de la estructura de la tabla    
            var register=document.createElement("tr");
            var cellId=document.createElement("td");
            var cellFirstName = document.createElement("td");
            var cellLastName = document.createElement("td");
            var cellPrice=document.createElement("td");
            var options = document.createElement("td")

            var deleteIcons = document.createElement("i")
            deleteIcons.className = "bi bi-trash3"
            deleteIcons.style.cursor = "pointer"
            deleteIcons.setAttribute("data-bs-toggle", "modal");
            deleteIcons.setAttribute("data-bs-target", "#deleteModal");
            deleteIcons.onclick = function () {
            const deleteBtn = document.getElementById("deleteUserBtn")
            deleteBtn.dataset.userId = user.id;
            }

            var updateIcons = document.createElement("i")
            updateIcons.className="bi bi-pencil-square"
            updateIcons.style.cursor = "pointer"
            updateIcons.setAttribute("data-bs-toggle", "modal");
            updateIcons.setAttribute("data-bs-target", "#updateModal");
            updateIcons.onclick = function () {
            document.getElementById("firstNameUpdate").value = user.firstName
            document.getElementById("lastNameUpdate").value = user.lastName
            document.getElementById("ageUpdate").value = user.age

            const updateBtn = document.getElementById("updateUserBtn")
            updateBtn.dataset.userId = user.id;
            }

            //mostrar los datos en las celdas
            cellId.innerText=user.id;
            cellFirstName.innerText=user.firstName;
            cellLastName.innerText=user.lastName;
            cellPrice.innerText=user.age;

            //estructura para agregar los elementos
            register.appendChild(cellId);
            register.appendChild(cellFirstName);
            register.appendChild(cellLastName);
            register.appendChild(cellPrice);
            options.appendChild(deleteIcons)
            options.appendChild(document.createTextNode(" "))
            options.appendChild(updateIcons)
            register.appendChild(options)
            container.appendChild(register);
        }
    });
});