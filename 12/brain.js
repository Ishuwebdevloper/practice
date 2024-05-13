let selctedRow = null;

function onFormSubmit(e) {
    event.preventDefault();
    let formData = readFormData();
    if (selctedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData)

    }
    resetForm();

}

// retrieve

function readFormData() {
    let formData = {};
    formData["ProductCode"] = document.getElementById("ProductCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perprice"] = document.getElementById("perprice").value;
    return formData;
}

// insert the data
function insertNewRecord(data) {
    let table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);

    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.ProductCode
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.product
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qty
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.perprice
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onclick='onedit(this)'>Edit</button> <button onclick='onDelete(this)'>Delete</button>`

}

// editdata
function onedit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('ProductCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('product').value = selectedRow.cells[1].innerHTML;
    document.getElementById('qty').value = selectedRow.cells[2].innerHTML;
    document.getElementById('perprice').value = selectedRow.cells[3].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productcode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perprice;


}

// deletedata
function onDelete(td) {
    if (confirm('do you want delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storelist').deleteRow(row.rowIndex);

    }
    resetForm();
}

//reset data

function resetForm() {
    document.getElementById('ProductCode').value = '';
    document.getElementById('Product').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('perprice').value = '';
}


