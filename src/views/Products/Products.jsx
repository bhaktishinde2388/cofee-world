import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import Navbar from '../../components/Navbar/Navbar';
import useConfirmDelete from '../../hooks/useConfirmDelete';
import Footer from '../../components/Footer/Footer';
import "./Products.css";
import coffeeProducts from '../../data/mockProducts'; // import local data

function Products() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterDropdown, setFilterDropdown] = useState("");
  const [editProduct, setEditProduct] = useState(null);
  const [viewProduct, setViewProduct] = useState(null);

  const confirmDelete = useConfirmDelete("CoffeeWorld");

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const isSeller = currentUser?.role === "seller"; 
  const isCustomer = currentUser?.role === "user"; 

  // Load products from local mock data
  useEffect(() => {
    setProducts(coffeeProducts);
  }, []);

  // Get unique categories (trimmed & normalized)
  const categories = [...new Set(products.map(p => p.category.trim()))];

  // Filtered products
  const filteredProducts = products
    .filter(p => p.title.toLowerCase().includes(searchText.toLowerCase()))
    .filter(p => filterDropdown === "" ? true : p.category.trim().toLowerCase() === filterDropdown.toLowerCase());

  // ➕ Add Product
  const addProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const newProduct = {
      id: products.length + 1,
      title: form.title.value.trim(),
      price: Number(form.price.value),
      description: form.description.value.trim(),
      category: form.category.value.trim(),
      image: "https://images.unsplash.com/photo-1589308078053-9b9d6f93a7a4?auto=format&fit=crop&w=150&q=80", // Online coffee image
    };
    setProducts([...products, newProduct]);
    form.reset();
    alert("Product Added");
  };

  // ✏️ Update Product
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedProduct = {
      ...editProduct,
      title: form.title.value.trim(),
      price: Number(form.price.value),
      description: form.description.value.trim(),
      category: form.category.value.trim(),
    };
    setProducts(products.map(p => p.id === editProduct.id ? updatedProduct : p));
    setEditProduct(null);
    alert("Product Updated");
  };

  // ❌ Delete Product
  const handleDelete = (id, title) => {
    if (confirmDelete(title)) {
      setProducts(products.filter(p => p.id !== id));
      alert("Product Deleted");
    }
  };

  return (
    <div>
      <Navbar />

      {/* Search + Filter */}
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", margin: "20px 0" }}>
        <input
          type="text"
          className='inputBox searchbar'
          placeholder="Search Product..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select
          className='inputBox searchbar'
          value={filterDropdown}
          onChange={(e) => setFilterDropdown(e.target.value)}
        >
          <option value="">Filter by Category</option>
          {categories.map((c, i) => <option key={i} value={c}>{c}</option>)}
        </select>
      </div>

      {/* Add Product Form (Seller only) */}
      {isSeller && (
        <form onSubmit={addProduct} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", margin: "20px 0" }}>
          <input className='inputBox' name="title" placeholder="Title" required />
          <input className='inputBox' name="price" type="number" placeholder="Price" required />
          <input className='inputBox' name="description" placeholder="Description" required />
          <input className='inputBox' name="category" placeholder="Category" required />
          <Button type="submit" text="Add Product" />
        </form>
      )}

      {/* Products Table */}
      <table border="1" style={{ margin: "20px", width: "90%", marginLeft: "auto", marginRight: "auto" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(p => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>{p.price} Rs/-</td>
              <td>{p.description}</td>
              <td>{p.category}</td>
              <td>
                <Button text="View" onClick={() => setViewProduct(p)} />
                {isSeller && (
                  <>
                    <Button text="Edit" onClick={() => setEditProduct(p)} />
                    <Button text="Delete" onClick={() => handleDelete(p.id, p.title)} />
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* View Modal */}
      {viewProduct && (
        <Modal onClose={() => setViewProduct(null)}>
          <h3>Product Details</h3>
          <p><b>Title:</b> {viewProduct.title}</p>
          <p><b>Price:</b> {viewProduct.price} Rs/-</p>
          <p><b>Description:</b> {viewProduct.description}</p>
          <p><b>Category:</b> {viewProduct.category}</p>
          <img src={viewProduct.image} width="120" alt={viewProduct.title} />
          <Button text="Close" onClick={() => setViewProduct(null)} />
        </Modal>
      )}

      {/* Edit Modal */}
      {isSeller && editProduct && (
        <Modal onClose={() => setEditProduct(null)}>
          <h3>Edit Product</h3>
          <form onSubmit={handleUpdate} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input name="title" defaultValue={editProduct.title} required />
            <input name="price" type="number" defaultValue={editProduct.price} required />
            <input name="description" defaultValue={editProduct.description} required />
            <input name="category" defaultValue={editProduct.category} required />
            <div style={{ display: "flex", gap: "10px" }}>
              <Button type="submit" text="Update" />
              <Button text="Cancel" onClick={() => setEditProduct(null)} />
            </div>
          </form>
        </Modal>
      )}

      <Footer />
    </div>
  );
}

export default Products;
