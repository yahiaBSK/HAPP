//     OPEN THE MENU     ==>


  var Sidebar = document.getElementById('side-bar') ;
  var openSideIcon = document.getElementById('open-menu-icon')
  var closeSideIcon = document.getElementById('close-menu-icon')




function openSidebar(){
  
  if (openSideIcon.value = true ) {
    setTimeout(() => { Sidebar.style.visibility = "visible" ; Sidebar.style.height = "370px"}, 50);
    openSideIcon.style.visibility = "hidden"
    closeSideIcon.style.visibility = "visible"
  }
}

//     CLOSE THE MENU     ==>



function closeSidebar (){
  if(closeSideIcon.value = true){
    setTimeout(() => { Sidebar.style.visibility = "hidden" ; Sidebar.style.height = "0"}, 50);
    closeSideIcon.style.visibility = "hidden" 
    openSideIcon.style.visibility = "visible"
  }
}




//---------------------------------------------




//       LANGUAGES     ==>


var en_lang= document.getElementById('en-lang')
var ar_lang = document.getElementById('ar-lang')
var languages = document.getElementById('languages');
var url = 'translation.js'
var script = document.createElement('script')
script.src = "translation.js";




//  EN language


en_lang.onclick = function () {
 window.location.hash="#en"
 window.location.reload()
}


//  AR language


ar_lang.onclick = function () {
  window.location.hash = "#ar"
  window.location.reload()
 }
  
if (window.onload = true) {
  if (window.location.hash === "#ar") {
    document.head.appendChild(script);
  }
}
  


// ----------------------------------------------


