let rowCounter = 1;
let carsId = 1;

function addCarToTable()
{
    addBrand = document.getElementById("addBrand").value;
    addModel = document.getElementById("addModel").value;
    addDoors = document.getElementById("addDoors").value;
    addPrice = document.getElementById("addPrice").value;
    console.log(addBrand, addModel, addDoors, addPrice);

    let table = document.getElementById("carsTable");
    console.log(table);
    let row = table.insertRow(rowCounter);
    row.setAttribute("rowId", carsId);
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);

    cell0.innerHTML = carsId;
    cell1.innerHTML = addBrand;
    cell2.innerHTML = addModel;
    cell3.innerHTML = addDoors;
    cell4.innerHTML = addPrice;

    rowCounter ++;
    carsId ++;

}

function removeCarById()
{
    let deleteNumber = document.getElementById("idForDelete").value;

    document.getElementById("carsTable").deleteRow(deleteNumber);
}