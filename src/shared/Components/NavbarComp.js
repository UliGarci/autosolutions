import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { FaHome } from 'react-icons/fa';


import Home from './Home';
import { TablesBuy } from './TablesBuy';
import { TablesCategory } from './TablesCategory';
import { TablesPerson } from './TablesPerson';
import { TablesProduct } from './TablesProduct';
import { TablesWorkShop } from './TablesWorkShop';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand>
                            <Nav.Link style={styles.navbar} as={Link} to="/product">
                                <FaHome style={{ height: "auto", width: "40px", color: "#fff" }} />
                            </Nav.Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                {/* <Nav.Link style={styles.navbar} as={Link} to="/home">HOME</Nav.Link> */}
                                <Nav.Link style={styles.navbar} as={Link} to="/buy">Compras</Nav.Link>
                                <Nav.Link style={styles.navbar} as={Link} to="/category">Categorias</Nav.Link>
                                <Nav.Link style={styles.navbar} as={Link} to="/person">Personas</Nav.Link>
                                <Nav.Link style={styles.navbar} as={Link} to="/product">Productos</Nav.Link>
                                <Nav.Link style={styles.navbar} as={Link} to="/workshop">Talleres</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/buy">
                            <TablesBuy />
                        </Route>
                        <Route path="/category">
                            <TablesCategory />
                        </Route>
                        <Route path="/person">
                            <TablesPerson />
                        </Route>
                        <Route path="/product">
                            <TablesProduct />
                        </Route>
                        <Route path="/workshop">
                            <TablesWorkShop />
                        </Route>
                      
                    </Switch>
                </div>
            </Router>
        )
    }
}

const styles = {
    navbar: {
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
    }
}