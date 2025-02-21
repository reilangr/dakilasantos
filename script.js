document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const menuItems = [
      { text: 'Home', link: 'index.html' },
      { text: 'Mapa Morros', link: '#map_morros.html' },
      { text: 'Kit de Emergência', link: 'kit.html' },
      { text: 'MDPL', link: 'mdpl.html' }
  ];

  const ul = document.createElement('ul');
  menuItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.link;
      a.textContent = item.text;
      li.appendChild(a);
      ul.appendChild(li);
  });

  menu.appendChild(ul);
});