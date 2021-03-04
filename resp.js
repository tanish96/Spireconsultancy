burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightNav=document.querySelector('.rightNav')
burger .addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});


function start(){
    document.getElementById("mytuto").classList.toggle("show");
}
window.onclick=function(event){
    if (!event.target.matches('.bt')) {
        var dropdowns = document.getElementsByClassName("tuto-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
}
function st(){
  document.getElementById("mystu").classList.toggle("show");
}
window.onclick=function(event){
  if (!event.target.matches('.st')) {
      var dropdowns = document.getElementsByClassName("stu-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
        
      }
    }
}
function myFunction() {
  alert("There are no course available now ! ");
}
