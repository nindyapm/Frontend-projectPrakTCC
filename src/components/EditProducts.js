import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [namaProduct, setnamaProduct] = useState("");
  const [deskripsiProduct, setdeskripsiProduct] = useState("");
  const [hargaProduct, sethargaProduct] = useState("");
  const [persediaan, setpersediaan] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const updateProducts = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://backend-dot-final-project-388509.as.r.appspot.com/products/${id}`, {
        namaProduct,
        deskripsiProduct,
        hargaProduct,
        persediaan
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setnamaProduct(response.data.namaProduct);
    setdeskripsiProduct(response.data.deskripsiProduct);
    sethargaProduct(response.data.hargaProduct);
    setpersediaan(response.data.persediaan);
  };

  return (
    <div className="container">
      <div className="mt-5 text-top">Edit Data Product</div>
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
          <form onSubmit={updateProducts}>
          <div className="field">
              <label className="label">Nama Product</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={namaProduct}
                  onChange={(e) => setnamaProduct(e.target.value)}
                  placeholder="Nama Product"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Deskripsi Product</label>
              <div className="control">
                <input
                  type="textarea"
                  className="input"
                  value={deskripsiProduct}
                  onChange={(e) => setdeskripsiProduct(e.target.value)}
                  placeholder="Deskripsi Product"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Harga Product</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={hargaProduct}
                  onChange={(e) => sethargaProduct(e.target.value)}
                  placeholder="Harga Product"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Persediaan Product</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={persediaan}
                  onChange={(e) => setpersediaan(e.target.value)}
                  placeholder="Persediaan Product"
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
