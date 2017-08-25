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
var submitArray = [];
for (var i = 0; i < mainArray.length; i++){
  var dropDown = document.getElementsByTagName('select')[0];
  var productDropDown = document.createElement('option');
  productDropDown.setAttribute('value', mainArray[i].name);
  productDropDown.innerText = mainArray[i].name;
  dropDown.appendChild(productDropDown);
}

var addToCart = function(event){
  var currentArray = [];
  var productsSubmit = event.target.products.value;
  currentArray.push(productsSubmit);
  var quantitySubmit = event.target.quantity.value;
  currentArray.push(quantitySubmit);
  var submitName = event.target.nameForm.value;
  currentArray.push(submitName);
  var submitStreet = event.target.street.value;
  currentArray.push(submitStreet);
  var submitCity = event.target.city.value;
  currentArray.push(submitCity);
  var submitState = event.target.state.value;
  currentArray.push(submitState);
  var submitZip = event.target.zip.value;
  currentArray.push(submitZip);
  var submitPhone = event.target.phone.value;
  currentArray.push(submitPhone);
  var submitCCNum = event.target.ccNum.value;
  currentArray.push(submitCCNum);
  if (localStorage.getItem('main')){
    submitArray = [];
    submitArray = (JSON.parse(localStorage.main));
    submitArray.push(currentArray);
    localStorage.setItem('main', JSON.stringify(submitArray));
  } else{
    submitArray.push(currentArray);
    localStorage.setItem('main', JSON.stringify(submitArray));
  }
  document.getElementById('formElement').reset();
};
var stopSubmission = function (event){
  event.preventDefault();
};
var formSubmit = document.getElementById('formElement');
formSubmit.addEventListener('submit', stopSubmission);
formSubmit.addEventListener('submit', addToCart);
