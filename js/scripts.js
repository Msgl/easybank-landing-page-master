const navMenu = document.getElementById('nav-menu');
const navItems = document.querySelectorAll('.nav-items');

const toggleNav = () => {
  navMenu.classList.toggle('active');
  navMenu.classList.toggle('boxshadow');
};

//When a menu item is clicked (on mobile view), the background shadow & the menu are removed
navItems.forEach(function (item) {
  item.addEventListener('click', function () {
    navMenu.classList.remove('active');
    navMenu.classList.remove('boxshadow');
  });
});
