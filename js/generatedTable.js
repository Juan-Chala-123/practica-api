function generateTableHead(headSelector, columns, includeActions = true) {
    const thead = document.querySelector(headSelector);
    thead.innerHTML = "";

    const tr = document.createElement("tr");

    columns.forEach(col => {
        const th = document.createElement("th");
        th.textContent = col.title;
        tr.appendChild(th);
    });

    if (includeActions) {
        const th = document.createElement("th");
        th.textContent = "Actions";
        tr.appendChild(th);
    }

    thead.appendChild(tr);
}