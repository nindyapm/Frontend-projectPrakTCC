import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/style.css";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("https://backend-dot-final-project-388509.as.r.appspot.com/products");
    setProducts(response.data);
  };

  const deleteProducts = async (id) => {
    try {
      await axios.delete(`https://backend-dot-final-project-388509.as.r.appspot.com/products/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="mt-5 text-top">Data Product Toko Serbada</div>
      <div className="columns mt-5">
        <div className="column">
          <Link to={`add`} className="button is-success">
            Add New
          </Link>
          <table className="table is-striped table-responsive mt-3">
            <thead>
              <tr>
                <th>No</th>
                <th style={{ width: '20%' }}>Nama Product</th>
                <th style={{ width: '30%' }}>Deskripsi</th>
                <th style={{ width: '15%' }}>Harga</th>
                <th style={{ width: '15%' }}>Persediaan</th>
                <th style={{ width: '20%' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.namaProduct}</td>
                  <td>{product.deskripsiProduct}</td>
                  <td>{product.hargaProduct}</td>
                  <td>{product.persediaan}</td>
                  <td>
                    <Link
                      to={`edit/${product.id}`}
                      className="button is-small is-info mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteProducts(product.id)}
                      className="button is-small is-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
