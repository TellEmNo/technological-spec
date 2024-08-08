const url = "./data.json";
const cart = [];
async function getData(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error.message);
	}
};

document.addEventListener('DOMContentLoaded', async (e) => {
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
					<p>
						${element.description}
					</p>
					<span>${element.price}</span>
				</div>
			</div>`)
	});

	document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
		button.addEventListener('click', addToCart);
	});
});

function addToCart(event) {
	const itemId = event.target.dataset.id;
	const item = cart.find((item) => item.id == itemId);
	if (item) {
		item.count++;
	} else {
		const itemData = getItemData(item, itemId);
		cart.push({ ...itemData, count: 1 });
	}

	renderCart();
}

async function getItemData(item, id) {
	// const allItems = [...document.querySelectorAll('.list-items__item')];
	// const item = allItems.find(i => i.querySelector('.add-to-cart-btn').dataset.id == id);
	const data = await getData(url);
	const itemData = data.find((i) => i.id === id);

	// if (!itemData) {
	// throw new Error('Item not found');
	// }
	// 
	console.log(data);
	console.log(itemData);
	console.log(id);
	return {
		id: id,
		img: item.querySelector('.item__img').style.backgroundImage.slice(5, -2),
		title: item.querySelector('.item__description h3').textContent,
		price: item.querySelector('.item__description span').textContent,
		color: itemData.color,
		size: itemData.size,
		quantity: itemData.quantity
	};
};

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
          <p>${item.color}</p>
          <p>${item.size}</p>
          <span>Quantity: ${item.count}</span>
        </div>
      </div>`;

		cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
	});

	if (cart.length > 0) {
		cartSection.style.display = 'block';
	} else {
		cartSection.style.display = 'none';
	}
}