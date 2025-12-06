import React,{useState,useEffect} from 'react'
import Button from '../../components/Button/Button';
import axios from 'axios';

function Products() {
    const [products, setProducts] = useState([]);

useEffect(() => {
  axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
}, []);



  return (
<div>
      <h2>Products</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>{p.price}</td>
              <td>{p.description}</td>
              <td>{p.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products