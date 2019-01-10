import React from 'react';
import NavBar from '../NavBar/NavBar';

class Home extends React.Component {
    render(){
        return( 
            <div className="home">
                <NavBar />
                <h1>Welcome to the future Home Page</h1>
            </div>
        )
    }
}

export default Home;