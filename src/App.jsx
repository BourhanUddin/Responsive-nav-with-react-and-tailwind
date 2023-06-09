import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PriceList from "./Components/PriceList/PriceList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
      <PriceList></PriceList>
    </div>
  );
}

export default App;
