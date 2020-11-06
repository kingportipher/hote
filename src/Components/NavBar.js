import React, {Component} from 'react'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'



export default class NavBar extends Component {
    state = {
      isOpen: false
    };
    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen});
    };
        render() {
            return (
            <nav className="navbar">
                <div>
                    <div className="nav-header">
                        <Link to="/">
                            <h2 className="title">Fair View Hotel</h2>
                        
                        </Link>
                        <button>
                            <FaAlignRight type="button" className="nav-btn" onclick={this.handleToggle}/>
                        </button>


                    </div>
                    <ul className={this.state.isOpen? "nav-links show-nav": "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/rooms">Rooms</Link>
                        </li>
                        <Link to="/signup">sign Up</Link>


                    </ul>
                </div>

            </nav>
         )}
}
