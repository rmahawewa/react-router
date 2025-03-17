import { Link, useOutletContext } from "react-router-dom";

const Spinach = () => {
    const { data } = useOutletContext();
    return (
        <>
            <p>Hi!, I am Spinach! Popeye loves to eat me!</p>
            <hr />
            <p>Data: {data}</p>
            <hr />
            <Link to="/">Click here to go back</Link>
        </>
    );
};

export default Spinach;