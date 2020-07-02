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
const speed = 70;

const typeWriter = function() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

typeWriter();


function loadJSON() {
  fetch('https://api.github.com/users/thamaragerigr/repos')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
      response.json().then(function(res) {
        console.log(res);
        const data = res
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error', err);
  });

}

//Scroll animation

ScrollReveal().reveal('.section', { delay: 300 })