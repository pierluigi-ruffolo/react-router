import { useParams } from "react-router-dom";

export default function SingoloProdotto() {
  const { id } = useParams();
  console.log(id);
  return <h1>prodotto: {id}</h1>;
}
