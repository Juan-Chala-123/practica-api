function createTable({
    tableId,
    columns,
    data = [],
    onEdit,
    onDelete
}) {
    // Encabezados dinamicos
    generateTableHead(`#${tableId}-head`, columns);

    return new DataTable(`#${tableId}`, {
        data,
        columns: [
            ...columns.map(col => ({ data: col.data })),
            { data: null, orderable: false }
        ],

        createdRow: function (row, rowData, dataIndex) {

            const optionsCell = row.lastElementChild;
            optionsCell.innerHTML = "";

            var deleteIcons = document.createElement("i");
            deleteIcons.className = "bi bi-trash3";
            deleteIcons.style.cursor = "pointer";
            deleteIcons.setAttribute("data-bs-toggle", "modal");
            deleteIcons.setAttribute("data-bs-target", "#deleteModal");

            deleteIcons.onclick = function () {
                onDelete(rowData);
            };

            var updateIcons = document.createElement("i");
            updateIcons.className = "bi bi-pencil-square";
            updateIcons.style.cursor = "pointer";
            updateIcons.setAttribute("data-bs-toggle", "modal");
            updateIcons.setAttribute("data-bs-target", "#updateModal");

            updateIcons.onclick = function () {
                onEdit(rowData);
            };

            optionsCell.appendChild(deleteIcons);
            optionsCell.appendChild(document.createTextNode(" "));
            optionsCell.appendChild(updateIcons);
        }
    });
};

// console.log(typeof DataTable);