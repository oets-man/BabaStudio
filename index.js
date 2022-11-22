const sepatu = document.getElementById('btn-sepatu');
const ponsel = document.getElementById('btn-ponsel');
const kamera = document.getElementById('btn-kamera');
const cart = document.getElementById('cart');
const total = document.getElementById('total');
sepatu.addEventListener('click', () => {
	addToCart({
		item: 'Sepatu',
		harga: 100000,
	});
});
ponsel.addEventListener('click', () => {
	addToCart({
		item: 'Ponsel',
		harga: 200000,
	});
});
kamera.addEventListener('click', () => {
	addToCart({
		item: 'Kamera',
		harga: 300000,
	});
});
function addToCart(obj) {
	const { item, harga } = obj;
	const tr = document.createElement('tr');
	const tdItem = document.createElement('td');
	const tdQty = document.createElement('td');
	const tdHarga = document.createElement('td');
	const tdTotal = document.createElement('td');
	const tdHapus = document.createElement('td');
	tdTotal.className = 'total-item';

	tdItem.innerText = item;
	tdQty.innerText = 1;
	tdHarga.innerText = harga;
	tdTotal.innerText = harga;
	tdHapus.innerHTML = `
		<button class="btn btn-danger btn-sm" onClick="this.parentNode.parentNode.remove();">Hapus</button>
		<button class="btn btn-success btn-sm" onClick="tambah(this.parentNode.parentNode)">Tambah</button>
		<button class="btn btn-warning btn-sm" onClick="kurang(this.parentNode.parentNode)">Kurangi</button>
		`;
	tr.appendChild(tdItem);
	tr.appendChild(tdQty);
	tr.appendChild(tdHarga);
	tr.appendChild(tdTotal);
	tr.appendChild(tdHapus);
	cart.appendChild(tr);
	update();
}
function tambah(param) {
	param.children[1].innerText++;
	param.children[3].innerText = Number(param.children[1].innerText) * Number(param.children[2].innerText);
	update();
}
function kurang(param) {
	param.children[1].innerText--;
	param.children[3].innerText = Number(param.children[1].innerText) * Number(param.children[2].innerText);
	update();
}
function update() {
	const totalItem = document.getElementsByClassName('total-item');
	let result = 0;
	for (const item of totalItem) {
		result += Number(item.innerText);
	}

	total.innerText = result;
}
