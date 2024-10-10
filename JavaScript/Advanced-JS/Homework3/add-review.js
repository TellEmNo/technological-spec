document.querySelector('.add-review-button').addEventListener('click', () => {
  const productName = document.querySelector('.product-name').value.trim();
  const reviewText = document.querySelector('.review-text').value.trim();
  const message = document.querySelector('.message');

  if (!productName || !reviewText) {
    message.textContent = 'Пожалуйста, заполните все поля!';
    return;
  }

  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

  reviews.push({ product: productName, text: reviewText });

  localStorage.setItem('reviews', JSON.stringify(reviews));

  message.textContent = 'Отзыв успешно добавлен!';
  
  document.querySelector('.product-name').value = '';
  document.querySelector('.review-text').value = '';
});
