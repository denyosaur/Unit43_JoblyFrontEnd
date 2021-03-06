import React, { useEffect } from "react";

const Homepage = () => {
    let username = localStorage.getItem("username") || false
    useEffect(() => {
        username = localStorage.getItem("username")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div className="Homepage">
        <div className="Homepage-story">
            <h1>Homepage</h1>
            <div>
                <p>Hello {username}</p>
            </div>
        </div>
        <div className="Fullstory-reset">
            <button>Reset</button>
        </div>
    </div>
};

export default Homepage;