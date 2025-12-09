import axios from "axios";
import { useEffect, useState } from "react";
export default function Prodotti() {
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    axios
      .get(" https://fakestoreapi.com/products")
      .then((response) => console.log(response.data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">titolo</h5>
                <p className="card-text">Categoria</p>
                <span>descrizione</span>
                <span>price</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
