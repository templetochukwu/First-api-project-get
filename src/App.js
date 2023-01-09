import Axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [dog, setDog] = useState("");

  const getDog = () => {
    Axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      setDog(response.data?.message);
    });
  };

  return (
    <div className="App">
      <h1>
        Hellow Temple!
        <span>
          <button onClick={getDog}>Change dog</button>
        </span>
      </h1>
      {dog && <img src={dog} alt="dog" />}
    </div>
  );
}

export default App;
