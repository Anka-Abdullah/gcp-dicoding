(async () => {
  const buttonDrawer = document.querySelector('#buttonDrawer');
  const drawer = document.querySelector('#drawer')
  const mainContent = document.querySelector('main');

  buttonDrawer.addEventListener('click', () => {
    drawer.classList.add('open');
  });

  mainContent.addEventListener('click', () => {
    drawer.classList.remove('open');
  })
})()