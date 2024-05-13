import React from 'react';

const Menu = ({ menus }) => {
  return (
    <nav>
      <ul className="menu">
        {menus.map(menu => (
          <li key={menu.id}><a href={menu.url}>{menu.name}</a></li>
        ))}
        <li className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;