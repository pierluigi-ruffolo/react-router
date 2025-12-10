import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export default function SingoloProdotto() {
  const { id } = useParams();
  const [prodotto, setProdotto] = useState(null);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
      setProdotto(resp.data);
      console.log(resp.data);
    });
  }, [id]);

  return (
    <div className="container fs-3">
      {prodotto && (
        <div>
          <h3>{prodotto.title}</h3>
          <p>
            {prodotto.description}
            <span class=" ms-2 badge text-bg-success">
              prezzo :{prodotto.price}$
            </span>
          </p>
          <div className="d-flex justify-content-center">
            <img src={prodotto.image} alt={prodotto.title} />
          </div>
        </div>
      )}
    </div>
  );
}
