const url = "./data.json";
const cart = [];

async function getData(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error.message);
		return []; // В случае ошибки возвращаем пустой массив
	}
}

document.addEventListener('DOMContentLoaded', async () => {
	const data = await getData(url);
	const list = document.querySelector('.list-items__wrapper');

	data.forEach(element => {
		list.insertAdjacentHTML('beforeend', `
			<div class="list-items__item">
				<div class="item__img" style="background-image: url('${element.img}')">
					<div class="item__img_blackout">
						<button class="add-to-cart-btn" data-id="${element.id}">Add to Cart</button>
					</div>
				</div>
				<div class="item__description">
					<h3>${element.title}</h3>
					<p>${element.description}</p>
					<span>${element.price}</span>
				</div>
			</div>
		`);
	});

	document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
		button.addEventListener('click', addToCart);
	});
});

async function addToCart(event) {
	const itemId = event.target.dataset.id;
	let item = cart.find((item) => item.id == itemId);
	if (item) {
		item.count++;
	} else {
		try {
			const itemData = await getItemData(itemId); // Используем await, так как функция асинхронная
			cart.push({ ...itemData, count: 1 });
		} catch (error) {
			console.error(error.message);
		}
	}

	renderCart();
}

async function getItemData(id) {
	const data = await getData(url);
	const itemData = data.find((i) => i.id == id);

	// Проверка, найден ли элемент в JSON
	if (!itemData) {
		console.error(`Item with ID ${id} not found in JSON data.`);
		throw new Error('Item not found');
	}

	// Возвращаем объект с данными
	return {
		id: id,
		img: itemData.img,
		title: itemData.title,
		price: itemData.price,
		color: itemData.color,
		size: itemData.size,
		quantity: itemData.quantity
	};
}

function renderCart() {
	const cartSection = document.querySelector('.cart-items');
	const cartWrapper = document.querySelector('.cart-items__wrapper');
	cartWrapper.innerHTML = '';

	cart.forEach(item => {
		const cartItemHTML = `
			<div class="cart-item">
				<img src="${item.img}" alt="${item.title}">
				<div class="cart-item__details">
					<h4>${item.title}</h4>
					<p>${item.price}</p>
					<p>Color: ${item.color}</p>
					<p>Size: ${item.size}</p>
					<span>Quantity: ${item.count}</span>
				</div>
			</div>`;

		cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
	});

	cartSection.style.display = cart.length > 0 ? 'block' : 'none';
}
