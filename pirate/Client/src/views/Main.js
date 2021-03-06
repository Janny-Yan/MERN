import ProductForm from "../components/PirateForm";
import ProductList from "../components/PirateList";
import React, { useState } from "react";

const Main = (props) => {
    const { handleDeletePirate } = props;
    const [hasBeenSubmittedDummy, setHasBeenSubmittedDummy] = useState(false);
return (
    <>
        <PirateForm
            setHasBeenSubmittedDummy={setHasBeenSubmittedDummy}
            hasBeenSubmittedDummy={hasBeenSubmittedDummy}
    />
    <hr />
        <PirateList
            hasBeenSubmittedDummy={hasBeenSubmittedDummy}
            setHasBeenSubmittedDummy={setHasBeenSubmittedDummy}
            handleDeletePirate={handleDeletePirate}
        />
    </>
    );
};

export default Main;