import "./App.css";
import ProductForm from "./components/ProductForm";
import { Router } from "@reach/router";
import Main from "./views/Main";
import DisplayProduct from "./components/DisplayProduct";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <DisplayProduct path="/:_id" />
      </Router>
    </div>
  );
}

export default App;
