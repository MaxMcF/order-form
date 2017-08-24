
// for loop that runs through the array of all items added to cart to append them to the table

function fillTableWithCartItems() {
  var tableAnchor = document.getElementById('firstItem');
  var fillTableWithItems = document.createElement('tr');
  tableAnchor.appendChild(fillTableWithItems);
  for (var i = 0; i < submitArray.length; i++) {
    var itemName = document.createElement('td');
    itemName.innerText = this.name;
    fillTableWithItems.appendChild(itemName);
    var thumbnail = document.createElement('img');
    thumbnail.src = submitArray[i].filepath;
    var quantity = document.createElement('td');
    quantity.innerText = this.quantity;
    thumbnail.appendChild(quantity);
    var address = document.createElement('td');
    address.innerText = this.address;
    quantity.appendChild(address);
    var description = document.createElement('td');
    description.innerText = this.description;
    address.appendChild(description);
}

//add event listeners to delete buttons to remove items from array
//when clicked the items are removed from the array
