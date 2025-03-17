import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ isLoggedIn, children }) {
    if(!isLoggedIn) {
        return <Navigate to="/login" replace />; //Redirect if not logged in
    }
    return children;
}

const Profile = ({ isLoggedIn }) => {
    //passing props with Outlet
    const [data, setData] = useState("Initial Data");

    //practice <Navigate />
    const [shouldRedirect, setShouldRedirect] = useState(false);
    if(shouldRedirect){
        return <Navigate to="spinach" replace/>;
    }
    
    //passing props with Outlet
    const updateData = (newData) => {
        setData(newData);
    };
    const contextValue = {
        data,
        updateData,
    };

    return (
        <div>
            <p>My Component</p>
            <button onClick={() => setShouldRedirect(true)}>Redirect</button>
            <ProtectedRoute isLoggedIn={isLoggedIn}>
                <div>
                <h1>Hello from profile page!</h1>
                <p>So, how are you?</p>
                <hr />
                <h2>The profile visited is here:</h2>
                <Outlet context={contextValue} />
                </div>
            </ProtectedRoute>
        </div>        
    );
};

export default Profile;