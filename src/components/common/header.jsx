import React from 'react'
import Link from "react-router/es/Link";
import {login, logout} from "../../actions/loginAction";

class Header extends React.Component {

    render() {
        const{module, onChangeNavigation}= this.props;
        const getClassName = (currentClass) => {
            return (module === currentClass) ? "nav-item active" : "nav-item";
        };
        return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className={getClassName("create")} onClick={() => onChangeNavigation("createTrip")}>
                        <a className="nav-link" href="#">Create Trip</a>
                    </li>
                    <li className={getClassName("getTripList")} onClick={() => onChangeNavigation("tripList")}>
                        <a className="nav-link" href="#">Get TripList</a>
                    </li>
                    <li className={getClassName("getTripList")}>

                        <a className="nav-link" href="/">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
}

export default Header;