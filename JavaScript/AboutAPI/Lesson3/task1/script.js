// Вы разрабатываете интернет-магазин и хотите добавить
// функциональность динамического фильтрации товаров по
// категориям. У вас есть форма с выпадающим списком (select), в
// котором пользователь может выбрать категорию товаров. При выборе
// категории товаров, необходимо динамически обновлять список
// отображаемых товаров на странице, чтобы пользователь видел
// только товары из выбранной категории.
// 1. Создайте интерфейс веб-страницы, который включает в себя
// следующие элементы:
// a. Выпадающий список (select) с категориями товаров.
// b. Список товаров, который будет отображать товары в
// соответствии с выбранной категорией.
// c. Каждый товар в списке должен содержать название и
// категорию.
// 2. Используйте HTML для создания элементов интерфейса.

const productsList = document.querySelector(".products-list");
const select = document.querySelector(".category");

const productsData = [
  { id: 1, name: "iPhone 13", category: "Смартфоны" },
  { id: 2, name: "MacBook Pro 16", category: "Компьютеры" },
  { id: 3, name: "Samsung Galaxy S21", category: "Смартфоны" },
  { id: 4, name: "Dell XPS 13", category: "Ноутбуки" },
  { id: 5, name: "iPad Pro", category: "Смартфоны" },
  { id: 6, name: "Apple Watch Series 6", category: "Смартфоны" },
  { id: 7, name: "HP Envy 13", category: "Ноутбуки" },
  { id: 8, name: "ASUS ROG Strix", category: "Ноутбуки" },
  { id: 9, name: "Xiaomi Mi 11", category: "Смартфоны" },
  { id: 10, name: "Lenovo IdeaPad 3", category: "Ноутбуки" },
  { id: 11, name: "Acer Nitro 5", category: "Ноутбуки" },
  { id: 12, name: "Google Pixel 6", category: "Смартфоны" },
  { id: 13, name: "Xiaomi Mi 10", category: "Смартфоны" },
  { id: 14, name: "ASUS ROG Zephyrus", category: "Ноутбуки" },
  { id: 15, name: "Apple MacBook Air", category: "Компьютеры" },
  { id: 16, name: "Lenovo Legion 5", category: "Ноутбуки" },
  { id: 17, name: "Dell XPS 15", category: "Ноутбуки" },
  { id: 18, name: "Samsung Galaxy S22", category: "Смартфоны" },
  { id: 19, name: "Apple MacBook Pro", category: "Компьютеры" },
  { id: 20, name: "Xiaomi Mi 12", category: "Смартфоны" },
];

const displayProducts = (category) => {
  productsList.innerHTML = "";
  productsData
    .filter((product) => product.category === category || category === "")
    .forEach((product) => {
      const li = document.createElement("li");
      li.innerHTML = `${product.name} - ${product.category}`;
      productsList.appendChild(li);
    });
};
  
select.addEventListener("change", () => {
  const selectedCategory = select.value;
  displayProducts(selectedCategory);
});

displayProducts("");