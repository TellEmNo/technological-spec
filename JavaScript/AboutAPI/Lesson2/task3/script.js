// У вас есть кнопка "Купить". Создайте скрипт, который при клике на эту кнопку меняет её текст на "Товар
// добавлен в корзину" в течение 2 секунд, а затем возвращает исходный текст "Купить". В обработчике
// события клика также проверьте, является ли событие доверенным. Если событие является доверенным,
// выполните изменение текста кнопки и убедитесь, что после 2 секунд текст возвращается в исходное
// состояние.

const buyBtn = document.querySelector('.buy-btn');

const click = new Event('click');

buyBtn.addEventListener('click', (e) => {
  if (e.isTrusted) {
    console.log(e.isTrusted);
    const originalText = buyBtn.textContent;
    buyBtn.textContent = 'Товар добавлен в корзину';
    setTimeout(() => {
      buyBtn.textContent = originalText;
    }, 2000);
  } else {
    console.log('Это не доверенное событие');
  }
});

setTimeout(() => {
  buyBtn.dispatchEvent(click);
}, 3300)

