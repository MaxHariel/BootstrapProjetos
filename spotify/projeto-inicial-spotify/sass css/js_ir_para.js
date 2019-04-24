const menuItems = document.querySelectorAll('.irPara');

menuItems.forEach(item => {
    item.addEventListener('click', scroolPara)
});

function scroolPara(event) {
  const element = event.target;
  const id = element.getAttribute('href');
  const section = document.querySelector(id);
  
}