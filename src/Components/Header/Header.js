import React from 'react';
import Nav from '../Nav/Nav';
import Lower from './Lower';
import PropertyList from '../PropertyList/PropertyList';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
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
            
            <Switch>     
            <Route path='/home' render={()=> <Lower />}> </Route>
            <Route exact path='/properties'> </Route>
            <Route path='/search' render={()=> <Lower />}> </Route>
            <Redirect to='/home' />
            </Switch> 
            </>

        ) 
    }
}
export default withRouter(Header);