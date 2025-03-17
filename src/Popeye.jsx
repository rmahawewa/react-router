import React from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

const Popeye = () => {
    const { data, updateData } = useOutletContext();

    const handleUpdate = () => {
        updateData("Data updated from child");
    };

    return(
        <>
            <p>Hi, I am Popeye! I love to eat Spinach!</p>
            <hr />
            <p>Data: {data}</p>
            <button onClick={handleUpdate}>Update Data</button>
            <hr />
            <Link to="/">Click here to go back</Link> ---
            <Link to="/profile/spinach">Click here to go to spinach</Link>
        </>
    );
};

export default Popeye;