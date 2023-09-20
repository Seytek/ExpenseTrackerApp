"use strict";

const addBtn = document.querySelector(".add-btn");
const category = document.querySelector("#category-select");
const amount = document.querySelector("#amount-input");
const date = document.querySelector("#date-input");
const table = document.querySelector(".table");


date.valueAsDate = new Date();

addBtn.addEventListener("click", function() {

    let row = table.insertRow(1);

    let categoryCell = row.insertCell();
    let amountCell = row.insertCell();
    let dateCell = row.insertCell();
    let deleteBtnCell = document.createElement("button");

    row.appendChild(deleteBtnCell);

    categoryCell.innerHTML = category.value;
    amountCell.innerHTML = amount.value;
    dateCell.innerHTML = date.value;
    deleteBtnCell.textContent = "Delete";

    deleteBtnCell.addEventListener("click", function() {
        deleteBtnCell.closest('tr').remove();
    });
});


