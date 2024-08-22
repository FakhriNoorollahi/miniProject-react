import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

const data = [
  {
    id: 1,
    imageUrl: "/src/assets/perspolis.jpg",
    city: "Shiraz",
    placeName: "Perspolis",
  },
  {
    id: 2,
    imageUrl: "/src/assets/ali-qapu.jpg",
    city: "Esfahan",
    placeName: "Ali-Qapu",
  },
  {
    id: 3,
    imageUrl: "/src/assets/shah-goli.jpg",
    city: "Tabriz",
    placeName: "Shah-Goli",
  },
];

function App() {
  const [id, setId] = useState(
    JSON.parse(localStorage.getItem("Last-Tab")) || 1
  );

  const submitHandler = (e) => {
    const btnId = +e.target.dataset.id;
    setId(btnId);
    localStorage.setItem("Last-Tab", JSON.stringify(btnId));
  };

  return (
    <>
      <Header onSubmitHandler={submitHandler} btnId={id} data={data} />
      <Content btnId={id} data={data} />
    </>
  );
}

export default App;
