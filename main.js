const products = [
  {
    name: 'Niacinamide',
    price: 8.99,
    stars: 4,
    reviews: 250,
    seller: 'The Ordinary',
    image:
      'https://images.unsplash.com/photo-1642162229036-cc0617ea36fc?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Hialuronic Acid',
    price: 7.99,
    stars: 5,
    reviews: 320,
    seller: 'The Ordinary',
    image:
      'https://images.unsplash.com/photo-1642005799051-a43dfbe7dc2e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'AHA + BHA',
    price: 55.0,
    stars: 4.8,
    reviews: 2100,
    seller: 'The Ordinary',
    image:
      'https://images.unsplash.com/photo-1696025487682-9916beeb73e6?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Salicilic Acid',
    price: 9.99,
    stars: 4.6,
    reviews: 1560,
    seller: 'The Ordinary',
    image:
      'https://images.unsplash.com/photo-1719132881586-9f54b7016f4c?q=80&w=707&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'COMBO Retinol + Moisturizer',
    price: 28.5,
    stars: 4.9,
    reviews: 980,
    seller: 'The Ordinary',
    image:
      'https://images.unsplash.com/photo-1679394041910-0a0d16d61c22?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'COMBO Hialuronic Acid + AHA + BHA',
    price: 30.99,
    stars: 4.4,
    reviews: 870,
    seller: 'The Ordinary',
    image:
      'https://images.unsplash.com/photo-1702505591042-8707edef01eb?q=80&w=669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Caffeine Solution',
    price: 49.0,
    stars: 4.7,
    reviews: 540,
    seller: 'The Ordinary',
    image:
      'https://images.unsplash.com/photo-1681907426544-82586584d240?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'SPECIAL PACK: 3 IN 1',
    price: 32.99,
    stars: 4.5,
    reviews: 650,
    seller: 'The Ordinary',
    image:
      'https://images.unsplash.com/photo-1636918201023-cfedef251470?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Moisturizer',
    price: 15.5,
    stars: 4.8,
    reviews: 1120,
    seller: 'The Ordinary',
    image:
      'https://images.unsplash.com/photo-1679394042175-717ca34ef0f2?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'SPECIAL PACK: MOURNING ROUTINE',
    price: 32.0,
    stars: 4.9,
    reviews: 1890,
    seller: 'The Ordinary',
    image:
      'https://images.unsplash.com/photo-1621553845587-dd7094ef9c03?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]
const productsSection = document.getElementById('products')

products.forEach((product) => {
  const template = `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}, ${product.price.toFixed(
    2
  )} €, seller ${product.seller}">
      <h3>${product.name}</h3>
      <p class="price">${product.price.toFixed(2)} €</p>
      <p><span class="heart">❤️</span> ${product.stars} (${
    product.reviews
  } reviews)</p>
      <p class="seller">Seller: ${product.seller}</p>
    </article>
  `
  productsSection.innerHTML += template
})
const filtersSection = document.getElementById('filters')
filtersSection.innerHTML = `
  <h2>Filters</h2>
  <label>
    <span>Maximum price:</span>
    <input type="number" id="maxPrice" placeholder="Ej: 50">
  </label>
  <label>
    <span>Brand:</span>
    <select id="brandFilter">
      <option value="">All</option>
      ${[...new Set(products.map((p) => p.seller))]
        .map((brand) => `<option value="${brand}">${brand}</option>`)
        .join('')}
    </select>
  </label>
`

const maxPriceInput = document.getElementById('maxPrice')
function renderProducts(filteredProducts) {
  productsSection.innerHTML = ''
  filteredProducts.forEach((product) => {
    const template = `
      <article class="product-card">
        <img src="${product.image}" alt="${
      product.name
    }, ${product.price.toFixed(2)} €, seller ${product.seller}">
        <h3>${product.name}</h3>
        <p class="price">${product.price.toFixed(2)} €</p>
        <p><span class="heart">❤️</span> ${product.stars} (${
      product.reviews
    } reviews)</p>
        <p class="seller">Seller: ${product.seller}</p>
      </article>
    `
    productsSection.innerHTML += template
  })
}
renderProducts(products)
maxPriceInput.addEventListener('input', (e) => {
  const maxPrice = parseFloat(e.target.value)
  if (isNaN(maxPrice)) {
    renderProducts(products)
    return
  }
  const filtered = products.filter((product) => product.price <= maxPrice)
  renderProducts(filtered)
})
