import React from 'react';
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Kitavi Admin</h1>
                <p> react, redux, bucketlost, router 4, bootstrap.</p>
                <Link to="about" className="btn btn-primary btn-lg">Stupid</Link>
            </div>
        );
    }
}

export default HomePage;