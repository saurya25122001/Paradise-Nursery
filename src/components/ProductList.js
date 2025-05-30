import React from 'react';

const plants = [
  { id: 1, name: 'Snake Plant', price: 15, category: 'Easy Care', img: 'https://cdn.pixabay.com/photo/2016/11/29/04/19/plant-1867759_1280.jpg' },
  { id: 2, name: 'Spider Plant', price: 12, category: 'Easy Care', img: 'https://cdn.pixabay.com/photo/2016/10/12/20/21/spider-plant-1733024_1280.jpg' },
  { id: 3, name: 'Fiddle Leaf Fig', price: 40, category: 'Showy Plants', img: 'https://cdn.pixabay.com/photo/2017/02/17/12/23/plant-2078907_1280.jpg' },
  { id: 4, name: 'Monstera', price: 30, category: 'Showy Plants', img: 'https://cdn.pixabay.com/photo/2019/06/18/15/23/monstera-4284887_1280.jpg' },
  { id: 5, name: 'Succulent', price: 10, category: 'Succulents', img: 'https://cdn.pixabay.com/photo/2018/08/16/22/38/succulent-3607554_1280.jpg' },
  { id: 6, name: 'Aloe Vera', price: 8, category: 'Succulents', img: 'https://cdn.pixabay.com/photo/2017/07/03/16/30/aloe-2461719_1280.jpg' },
];

function ProductList({ addToCart }) {
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {plants.filter(p => p.category === category).map(plant => (
              <div key={plant.id} style={{ border: '1px solid #ccc', padding: '10px', width: '150px' }}>
                <img src={plant.img} alt={plant.name} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button onClick={() => addToCart(plant)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
