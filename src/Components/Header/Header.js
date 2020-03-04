import React from 'react';
import Nav from '../Nav/Nav';
import Lower from './Lower';
import PropertyList from '../PropertyList/PropertyList';
import './Header.css';



class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
        
    }

    


    render() {
        return(
            <>
            <div id="heading" className="jumbotron jumbotron-fluid bg-light">
                <Nav />
                <Lower />
            </div>
            <PropertyList />
        </>
        )
    }
}
export default Header;