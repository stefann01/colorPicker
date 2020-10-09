import React from "react";
import styles from "./App.module.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ColorPalette from "./components/ColorPalette/ColorPalette";
import { SnackbarProvider } from "notistack";
import OptionBar from "./components/OptionBar/OptionBar";

function App() {
    return (
        <div style={{ height: "100%" }}>
            <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
            >
                <NavigationBar />
                <OptionBar />
                <ColorPalette />
            </SnackbarProvider>
        </div>
    );
}

export default App;
