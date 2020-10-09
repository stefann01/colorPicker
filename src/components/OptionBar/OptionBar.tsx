import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";

function OptionBar() {
    return (
        <>
            <Container fluid>
                <Navbar expand="lg" variant="dark" bg="dark">
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    <Navbar.Text>Create Pallete</Navbar.Text>
                </Navbar>
            </Container>
        </>
    );
}

export default OptionBar;
