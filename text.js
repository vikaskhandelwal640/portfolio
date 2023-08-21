var tablinks = document.getElementsByClassName("tab-links");
     var tabcontents = document.getElementsByClassName("tab-contents");  
     function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
     }
     for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab");
}



const goTopBtn = document.querySelector('.go-top-btn');

function checkHeight(){
  if(window.scrollY > 400) {
    goTopBtn.style.display = "flex"
  } else {
    goTopBtn.style.display = "none"
  }
}
window.addEventListener('scroll', checkHeight)

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

var sidemenu =document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right="0";
}
function closemenu(){
  sidemenu.style.right="-200px";
}