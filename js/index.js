//Mouse
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:' + (e.pageY - 15) + 'px; left:' + (e.pageX -18) + 'px;')
})

//Menu
const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menu-icon');

menuToggle.addEventListener('click', function(){
  menu.classList.toggle("hide");
  menuToggle.classList.toggle("rotate");
});



let i = 0;
const txt = 'world';
const speed = 150;

const typeWriter = function() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

typeWriter();