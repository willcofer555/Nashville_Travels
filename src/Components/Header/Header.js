import React from 'react';
import Nav from '../Nav/Nav';
import Lower from './Lower';
import PropertyList from '../PropertyList/PropertyList';
import './Header.css';



class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            submission: 'unsent'
            
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit() {
        this.setState({ submission: 'sent' });
    }
    


    render() {
            return(
                <>
                    <Lower/>
            </>
            ) 

        
    }
}
export default Header;