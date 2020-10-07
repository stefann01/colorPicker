import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import copy from "copy-to-clipboard";
import { useSnackbar } from "notistack";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
class PaletteModel {
    constructor(public colors: Array<string>) {}
}

const initialColors = new PaletteModel(["#ff2345", "#dd5412", "#ccdf90", "#123456", "#0000aa"]);
function ColorPalette() {
    const [palette, setPallete] = useState<PaletteModel>(initialColors);
    const [height, setHeight] = useState<number>(0);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    useEffect(() => {
        const actualHeight = document.getElementById("picker")?.offsetHeight;
        if (actualHeight) {
            setHeight(actualHeight);
        }
    }, []);

    const handleKeyDown = (event: any) => {
        console.log("A key was pressed", event.keyCode);
        if (event.keyCode === 32) {
            let items: string[] = [];
            for (let i = 0; i < palette.colors.length; ++i) {
                items = [...items, "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")];
            }
            setPallete(new PaletteModel(items));
        }
    };
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);

    function changePalette(event: any, index: number) {
        let items = [...palette.colors];
        items[index] = event.target.value;
        setPallete(new PaletteModel(items));
    }

    function copyCodeToClipboard(color: string) {
        copy(color.toString());
        enqueueSnackbar("Copied to clipboard", {
            variant: "success",
            autoHideDuration: 1200,
        });
    }

    return (
        <Container fluid>
            <Row style={{ height: "400px", overflowY: "scroll", marginTop: "10px", marginBottom: "10px" }}>
                <Col>
                    <ListGroup id="picker">
                        {palette.colors.map((color, index) => (
                            <ListGroup.Item key={index} style={{ display: "flex", height: "60px" }}>
                                <label>
                                    <input type="color" value={color} onChange={(event) => changePalette(event, index)} />
                                </label>
                                <label style={{ float: "right", marginLeft: "auto", textAlign: "left" }}>{color}</label>

                                <Button
                                    onClick={() => {
                                        copyCodeToClipboard(color);
                                    }}
                                    style={{ float: "right" }}
                                    variant="primary"
                                >
                                    Clipboard
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
            <Row style={{ height: "400px" }}>
                {palette.colors.map((color, index) => (
                    <Col key={index} style={{ backgroundColor: color, width: "100%", height: height }}></Col>
                ))}
            </Row>
        </Container>
    );
}

export default React.memo(ColorPalette);
