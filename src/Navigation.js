import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import {Navbar,Nav} from "react-bootstrap";


export class Navigation extends Component{
    render(){
        return (
          <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                    <NavLink to="/">Home</NavLink>
    
            <NavLink to="/departman">Departman</NavLink>
    </Nav>
   
            </Navbar.Collapse>
          </Navbar>
        )
    };
}