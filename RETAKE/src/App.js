import "./App.css";
import { Router} from "@reach/router";
import PirateList from "./components/PirateList";
import PirateForm from "./components/PirateForm";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Router>
        <PirateList path="/" />
        <PirateForm path="/new" />
      </Router>
    </div>
  );
}

export default App;
