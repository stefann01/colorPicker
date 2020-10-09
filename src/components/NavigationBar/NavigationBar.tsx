import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavigationBar.module.scss";
import Container from "react-bootstrap/esm/Container";

function NavigationBar() {
    return (
        <Container fluid>
            <Navbar expand="lg" variant="dark" bg="dark">
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Navbar.Text
                    onClick={() => {
                        console.log("Clicked");
                    }}
                    className={styles.test}
                >
                    Create Pallete
                </Navbar.Text>
            </Navbar>
        </Container>
    );
}

export default NavigationBar;
