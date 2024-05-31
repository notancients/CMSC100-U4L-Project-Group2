import React from 'react';

const Menu = ({ menus, setCurrentTab, currentTab }) => {
  return (
    <nav>
      <ul className="menu">
        {menus.map(menu => (
          <li key={menu.id} className={currentTab === menu.id ? 'active' : ''}>
            <a href={menu.url} onClick={() => setCurrentTab(menu.id)}>
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}


export default Menu;
