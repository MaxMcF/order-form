function pics(name, url, shown, clicked){
  this.name = name;
  this.url = url;
  this.shown = shown;
  this.clicked = clicked;
}
var picOne = new pics('bag', 'assets/bag.jpg', 0, 0);
var picTwo = new pics('banana', 'assets/banana.jpg', 0, 0);
var picThree = new pics('bathroom', 'assets/bathroom.jpg', 0, 0);
var picFour = new pics('boots', 'assets/boots.jpg', 0, 0);
var picFive = new pics('breakfast', 'assets/breakfast.jpg', 0, 0);
var picSix = new pics('bubblegum', 'assets/bubblegum.jpg', 0, 0);
var picSeven = new pics('chair', 'assets/chair.jpg', 0, 0);
var picEight = new pics('cthulhu', 'assets/cthulhu.jpg', 0, 0);
var picNine = new pics('dogDuck', 'assets/dog-duck.jpg', 0, 0);
var picTen = new pics('dragon', 'assets/dragon.jpg', 0, 0);
var picEleven = new pics('pen', 'assets/pen.jpg', 0, 0);
var picTwelve = new pics('petSweep', 'assets/pet-sweep.jpg', 0, 0);
var picThirteen = new pics('scissors', 'assets/scissors.jpg', 0, 0);
var picFourteen = new pics('shark', 'assets/shark.jpg', 0, 0);
var picFifteen = new pics('sweep', 'assets/sweep.png', 0, 0);
var picSixteen = new pics('tauntaun', 'assets/tauntaun.jpg', 0, 0);
var picSeventeen = new pics('unicorn', 'assets/unicorn.jpg', 0, 0);
var picEighteen = new pics('usb', 'assets/usb.gif', 0, 0);
var picNineteen = new pics('waterCan', 'assets/water-can.jpg', 0, 0);
var picTwenty = new pics('wineGlass', 'assets/wine-glass.jpg', 0, 0);
var mainArray = [picOne, picTwo, picThree, picFour, picFive, picSix, picSeven, picEight, picNine, picTen, picEleven, picTwelve, picThirteen, picFourteen, picFifteen, picSixteen, picSeventeen, picEighteen, picNineteen, picTwenty];

function fillTableWithCartItems() {
  var tableAnchor = document.getElementById('firstItem');
  for (var i = 0; i < JSON.parse(localStorage.main).length; i++) {
    var tableRow = document.createElement('tr');
    tableAnchor.appendChild(tableRow);
    var buttonData = document.createElement('td');
    tableRow.appendChild(buttonData);
    var deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('id', JSON.parse(localStorage.main)[i][0]);
    buttonData.appendChild(deleteBtn);
    var xImage = document.createElement('img');
    console.log(JSON.parse(localStorage.main)[i][0]);
    xImage.setAttribute('class', 'fa fa-times-circle-o');
    xImage.setAttribute('aria-hidden', 'true');
    deleteBtn.appendChild(xImage);
    // deleteBtn.innerHTML = <i class="fa fa-times-circle-o" aria-hidden="true"></i>;
    var itemName = document.createElement('td');
    itemName.innerText = JSON.parse(localStorage.main)[i][0];
    tableRow.appendChild(itemName);
    var thumbnailHold = document.createElement('td');
    tableRow.appendChild(thumbnailHold);
    for(var k = 0; k < mainArray.length; k++){
      if(mainArray[k].name == JSON.parse(localStorage.main)[i][0]){
        var thumbnail = document.createElement('img');
        thumbnail.src = mainArray[k].url;
        thumbnailHold.appendChild(thumbnail);
      }
    }
    var quantity = document.createElement('td');
    quantity.innerText = JSON.parse(localStorage.main)[i][1];
    tableRow.appendChild(quantity);
    var custName = document.createElement('td');
    custName.innerText = JSON.parse(localStorage.main)[i][2];
    tableRow.appendChild(custName);
    var address = document.createElement('td');
    address.innerText = JSON.parse(localStorage.main)[i][3];
    tableRow.appendChild(address);
  }
  eventFunc();
}
var eventFunc = function (){
  for (var i = 0; i < JSON.parse(localStorage.main).length; i++){
    var elementId = JSON.parse(localStorage.main)[i][0];
    console.log(elementId);
    console.log(elementId.toString());
    var deleteItem = document.getElementById(elementId);
    deleteItem.addEventListener('click', deleteItemFromCart);
  }
};
function deleteItemFromCart (event) {
  var itemToDelete = event.currentTarget;
  var rowToDelete = itemToDelete.parentNode.parentNode;
  var tableParent = rowToDelete.parentNode;
  tableParent.removeChild(rowToDelete);
  for (var i = 0; i < JSON.parse(localStorage.main).length; i++){
    if (JSON.parse(localStorage.main)[i][0] == event.currentTarget.id){
      var updateStorage = JSON.parse(localStorage.main);
      updateStorage.splice(i, 1);
      localStorage.setItem('main', JSON.stringify(updateStorage));
    }
  }
}
fillTableWithCartItems();
