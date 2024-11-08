import React from 'react';
import { useParams, Link } from 'react-router-dom';
import items from '../data';

function DetailPage() {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div style={{ padding: '20px', border: '1px solid black' }}>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <Link to="/" style={{ display: 'block', marginTop: '20px', textDecoration: 'none', color: 'darkblue' }}>Back to Articles</Link>
    </div>
  );
}

export default DetailPage;
