import React from 'react';
import { Link } from 'react-router-dom';
import items from '../data';

function ListPage() {
  return (
    <div>
      <h1>Статьи:</h1>
      <ul style={{ listStyleType: 'none', padding: 0}}>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/details/${item.id}`} style={{ textDecoration: 'none', color: 'darkblue'}}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;
