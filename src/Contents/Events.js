import React, {Component} from "react";
import Images from '../Images/events.jpg';

class Events extends Component {
    render() {
        return (
            <div>
                <img src={Images} atl="Event Registration" width="250" height="200" />
                <h2>Event Registration</h2>
                    <p>
                    You have the power to set up, edit, and report on event<br></br> 
                    registration forms, such as for youth events, retreats,<br></br> 
                    or special fundraisers. Unlimited events means your active<br></br>
                     church never has to worry about adding another registration form!
                    </p>
            </div>
        );
    }
}

export default Events;