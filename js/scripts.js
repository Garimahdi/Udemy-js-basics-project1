// Need review
// Mobile Menu
let hamburgerIcon = document.getElementById('hamburguer-icon');
let slidingHeaderMenuOuter = document.getElementById('sliding-header-menu-outer');
let closeIcon = document.getElementById('sliding-header-menu-close-button');

hamburgerIcon.onclick = function(){
  slidingHeaderMenuOuter.style['right'] = '0px';
}

closeIcon.onclick = function(){
  slidingHeaderMenuOuter.style['right'] = '-320px';
}


// About us Tab

var aboutUs = {
  "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

let singleTab = document.getElementsByClassName('single-tab');
let boxText = document.getElementById('box-text');
let x,y;

// Checking the dtype
console.log(singleTab);

for(x = 0; x < singleTab.length; x++){
  // First loop is for applying the onclick event on each class' item
  console.log(singleTab[x].innerHTML);
  console.log(singleTab[x]);
  let singleTabInner = singleTab[x].innerHTML;

  singleTab[x].onclick = function(){
    console.log('Current tab = '+this.innerHTML);
    console.log(this);
    //boxText.innerHTML = '';
    boxText.innerHTML = aboutUs[singleTabInner];
    // At this point, the tab is not 'alive' in term of colour

    for(y = 0; y < singleTab.length; y++){
      // Second loop is needed to set the BG colour into default setting when not selected (which is grey and normal font weight)
      console.log('Tab that is not selected = '+singleTab[y].innerHTML);
      singleTab[y].style['background-color'] = unseletectedColor;
      singleTab[y].style['font-weight'] = 'normal';
      }

    // At this point, there's no difference when an tab element is clicked or not
    // Recolouring selected element and making the font bold are needed to differ the selected and the unselected ones
    this.style['background-color'] = seletectedColor;
    this.style['font-weight'] = 'bold';
  }
}

// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];
let servicePrevious = document.getElementById('service-previous');
let serviceTitle = document.getElementById('service-title');
let serviceText = document.getElementById('service-text');
let serviceNext = document.getElementById('service-next');
let startingPoint = 0;

// When left arrow is clicked
servicePrevious.onclick = function(){
  if(startingPoint == 0){
    startingPoint = ourServices.length - 1;
  }
  else{
    startingPoint--;
  }
  console.log(startingPoint);

  serviceTitle.innerHTML = ourServices[startingPoint]['title'];
  serviceText.innerHTML = ourServices[startingPoint]['text'];
}

// When right arrow is clicked
serviceNext.onclick = function(){
  if(startingPoint == ourServices.length-1){
    startingPoint = 0;
  }
  else{
    startingPoint++;
  }
  console.log(startingPoint);

  serviceTitle.innerHTML = ourServices[startingPoint]['title'];
  serviceText.innerHTML = ourServices[startingPoint]['text'];
}

// Contact form is handled in the html document.

// Footer
let currentYear = document.getElementById('current_year');
let thisYear = new Date().getFullYear();
console.log(typeof thisYear, thisYear);
currentYear.innerHTML = String(thisYear);