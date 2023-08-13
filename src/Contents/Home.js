import React, {Component} from "react";
import Images from '../Images/donatemobile.jpg';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Welcome to SimpleGive</h2>
                <h3>We make giving too simple<br></br> to pass up!</h3>
                <img src={Images} atl="Donating Mobile" width="250" height="200" />
                    <p>
                    SimpleGive is a comprehensive giving solution 
                    allowing people to donate on<br></br> location from anywhere 
                    using text, mobile, and online giving. The interface 
                    is<br></br> designed to be the fastest and easiest to use.
                    </p>
            </div>
        );
    }
}

export default Home;