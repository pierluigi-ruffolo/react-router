import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export default function SingoloProdotto() {
  const { id } = useParams();
  const [prodotto, setProdotto] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function OnClick() {
    navigate(-1);
  }

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => {
        if (resp.data === "") {
          navigate("/Prodotti");
        } else {
          setProdotto(resp.data);
          setLoading(true);
        }
      })
      .catch((errore) => {
        navigate("/Prodotti");
      });
  }, [id]);

  return (
    <div className="container fs-3 bg-secondary-subtle p-4 border rounded-3">
      {loading === false ? (
        <h1 className="text-center">Loading</h1>
      ) : (
        <div>
          <h3>{prodotto.title}</h3>
          <p>
            {prodotto.description}
            <span className=" ms-2 badge text-bg-success">
              prezzo :{prodotto.price}$
            </span>
          </p>
          <button onClick={OnClick} className="btn btn-info fs-5">
            Ritorna ai prodotti 👈
          </button>
          <div className="d-flex justify-content-center">
            <img src={prodotto.image} alt={prodotto.title} />
          </div>
        </div>
      )}
    </div>
  );
}
