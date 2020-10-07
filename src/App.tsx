import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ColorPalette from "./components/ColorPalette/ColorPalette";
import { SnackbarProvider } from "notistack";

function App() {
    return (
        <div className="App">
            <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
            >
                <NavigationBar />
                <ColorPalette />
            </SnackbarProvider>
        </div>
    );
}

export default App;
