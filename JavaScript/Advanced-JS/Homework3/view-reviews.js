const displayProducts = () => {
  const productList = document.querySelector('.product-list');
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

  if (reviews.length === 0) {
    productList.textContent = 'Отзывы не найдены.';
    return;
  }

  const products = [...new Set(reviews.map(review => review.product))];

  productList.innerHTML = '';

  products.forEach(product => {
    const productButton = document.createElement('button');
    productButton.textContent = product;
    productButton.addEventListener('click', () => displayReviews(product));
    productList.appendChild(productButton);
  });
};

const displayReviews = (product) => {
  const reviewList = document.querySelector('.review-list');
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  
  const productReviews = reviews.filter(review => review.product === product);
  
  reviewList.innerHTML = `<h2>Отзывы о ${product}</h2>`;

  productReviews.forEach((review, index) => {
    const reviewItem = document.createElement('div');
    reviewItem.innerHTML = `
      <p>${review.text}</p>
      <button class="delete-review" data-index="${index}">Удалить</button>
    `;
    reviewList.appendChild(reviewItem);
  });

  document.querySelectorAll('.delete-review').forEach(button => {
    button.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-index');
      reviews.splice(index, 1);
      localStorage.setItem('reviews', JSON.stringify(reviews));
      displayReviews(product);
    });
  });
};

displayProducts();
