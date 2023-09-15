// Initialize product list
let products = [];

// Store the index of the product being edited
let editIndex = -1;

// Function to add or edit a product
function addProduct(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const price = parseFloat(document.getElementById('price').value);
  const quantity = parseInt(document.getElementById('quantity').value);

  // Create a new product object
  const product = {
    name,
    price,
    quantity
  };

  if (editIndex === -1) {
    // Add new product to the list
    products.push(product);
  } else {
    // Update existing product
    products[editIndex] = product;
    editIndex = -1; // Reset the edit index
  }

  // Clear form inputs
  document.getElementById('name').value = '';
  document.getElementById('price').value = '';
  document.getElementById('quantity').value = '';

  // Refresh the product list
  displayProducts();
}

// Function to display products
function displayProducts(productsArray = products) {
  const productList = document.getElementById('productList');

  // Clear previous list
  productList.innerHTML = '';

  // Render each product as a table row
  productsArray.forEach((product, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.quantity}</td>
      <td>
        <button class="btn btn-sm btn-danger mt-1" onclick="deleteProduct(${index})">Delete</button>
        <button class="btn btn-sm btn-primary mt-1" onclick="editProduct(${index})">Edit</button>
      </td>
    `;

    productList.appendChild(row);
  });
}

// Function to delete a product
function deleteProduct(index) {
  // Remove the product from the list
  products.splice(index, 1);

  // Refresh the product list
  displayProducts();
}

// Function to edit a product
function editProduct(index) {
  // Retrieve the product details
  const product = products[index];

  // Fill the form with the product details
  document.getElementById('name').value = product.name;
  document.getElementById('price').value = product.price;
  document.getElementById('quantity').value = product.quantity;

  // Set the edit index
  editIndex = index;
}

// Function to cancel editing and clear the form
function cancelEdit() {
  document.getElementById('name').value = '';
  document.getElementById('price').value = '';
  document.getElementById('quantity').value = '';

  // Reset the edit index
  editIndex = -1;
}

// Attach event listener to the form submit event
const productForm = document.getElementById('productForm');
productForm.addEventListener('submit', addProduct);

// Function to search for a product
function searchProduct() {
  const searchTerm = document.getElementById('searchTerm').value.toLowerCase();

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  // Display filtered products
  displayProducts(filteredProducts);
}

// Attach event listener to the search input
const searchInput = document.getElementById('searchTerm');
searchInput.addEventListener('input', searchProduct);

// Initial display of products
displayProducts();  