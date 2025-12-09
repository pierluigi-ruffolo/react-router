import axios from "axios";
import { useEffect, useState } from "react";
export default function Prodotti() {
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    axios
      .get(" https://fakestoreapi.com/products")
      .then((response) => setProdotti(response.data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {console.log(prodotti)}
        {prodotti.map((prodotto) => {
          return (
            <div className="col-6 mb-5 p-3" key={prodotto.id}>
              <div className="card h-100 bg-secondary-subtle">
                <div className="p-5 text-center">
                  <img src={prodotto.image} alt={prodotto.title} />
                </div>
                <div className="card-body">
                  <h5 className="card-title fs-2">{prodotto.title}</h5>
                  <p className="card-text fs-4">{prodotto.category}</p>
                  <p className="card-text fs-4">{prodotto.description}</p>
                  <p className="card-text fs-3">Prezzo: {prodotto.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

{
  /*   <div className="col">
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
        </div> */
}
