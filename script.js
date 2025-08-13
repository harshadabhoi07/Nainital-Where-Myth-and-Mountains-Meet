// Add/remove class on scroll
document.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.getElementById('hhome').addEventListener('mouseover',() =>{
  document.getElementById('navbar').style.backgroundColor = 'rgb(201, 104, 183)';
  document.getElementById('fhome').style.color = 'blue';
});

document.getElementById('hhome').addEventListener('mouseleave',() =>{
  document.getElementById('navbar').style.backgroundColor = ' #ae6868'
  document.getElementById('fhome').style.color = 'black';

});
document.getElementById('sservices').addEventListener('mouseover',() =>{
  document.getElementById('navbar').style.backgroundColor = ' #525091';
  document.getElementById('fhome').style.color = 'blue';

});

document.getElementById('sservices').addEventListener('mouseleave',() =>{
  document.getElementById('navbar').style.backgroundColor = ' #ae6868'
  document.getElementById('fhome').style.color = 'black';

});
document.getElementById('aabout').addEventListener('mouseover',() =>{
  document.getElementById('navbar').style.backgroundColor = '#50915c';
  document.getElementById('fhome').style.color = 'blue';

});

document.getElementById('aabout').addEventListener('mouseleave',() =>{
  document.getElementById('navbar').style.backgroundColor = ' #ae6868'
  document.getElementById('fhome').style.color = 'black';

});
document.getElementById('ccontact').addEventListener('mouseover',() =>{
  document.getElementById('navbar').style.backgroundColor = '#98b05f';
  document.getElementById('fhome').style.color = 'blue';

});

document.getElementById('ccontact').addEventListener('mouseleave',() =>{
  document.getElementById('navbar').style.backgroundColor = ' #ae6868'
  document.getElementById('fhome').style.color = 'black';

});