import "./App.css";
import { Router, navigate } from "@reach/router";
import Main from "./views/Main";
import DisplayPirate from "./components/DisplayPirate";
import axios from "axios";

function App() {
    const handleDeletePirate = (id) => {
        console.log("ARGG");
        axios
            .delete(`http://localhost:8000/api/pirates/${id}`)
            .then((response) => {
        console.log("deleted", response);
        navigate("/");
    })
        .catch((err) => console.log(err));
};
return (
    <div className="App">
        <Router>
            <Main path="/" handleDeletePirate={handleDeletePirate} />
            <DisplayPirate
            handleDeletePirate={handleDeletePirate}
            path="/:_id"
        />
        </Router>
    </div>
        );
}

export default App;