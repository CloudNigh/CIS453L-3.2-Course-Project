import React, {Component} from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Contents/Home";
import Events from "./Contents/Events";
import AboutUs from "./Contents/AboutUs";
import Contact from "./Contents/Contact";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/Events">Events</NavLink></li>
                        <li><NavLink to="/AboutUs">About Us</NavLink></li>
                        <li><NavLink to="/Contact">Contact Us</NavLink></li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route exact path="/" element={<Home />}/>>
                            <Route path="/Events" element={<Events />}/>
                            <Route path="/AboutUs" element={<AboutUs />}/>
                            <Route path="/Contact" element={<Contact />}/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;