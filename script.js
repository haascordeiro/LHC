// toggle submenu
function toggleSubmenu(event, submenuId) {
    event.preventDefault();
    const submenu = document.getElementById(submenuId);


// Hide all other submenus before showing the selected one
const submenus = document.getElementsByClassName('submenu');
for (let i = 0; i < submenus.length; i++) {
  const currentSubmenu = submenus[i];
  if (currentSubmenu.id !== submenuId) {
    currentSubmenu.classList.remove('show');
  }
}

    submenu.classList.toggle('show');
  }