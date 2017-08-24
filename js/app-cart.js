
// for loop that runs through the array of all items added to cart to append them to the table

function fillTableWithCartItems() {
  var tableAnchor = document.getElementById('firstItem');
  var fillTableWithItems = document.createElement('tr');
  tableAnchor.appendChild(fillTableWithItems);
  for (var i = 0; i < submitArray.length; i++) {
    var itemName = document.createElement('td');
    itemName.innerText = this.name;
    
}

//add event listeners to delete buttons to remove items from array
//when clicked the items are removed from the array
