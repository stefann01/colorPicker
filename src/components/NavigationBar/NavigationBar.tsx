import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "./NavigationBar.module.scss";

function NavigationBar() {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand>Color Picker</Navbar.Brand>
                <Nav>
                    <Nav.Link
                        onClick={() => {
                            console.log("Clicked");
                        }}
                        className={styles.test}
                    >
                        Create Pallete
                    </Nav.Link>
                    <Nav.Link>Choose from Image</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}

export default NavigationBar;
