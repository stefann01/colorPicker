import React, { useContext, useReducer } from "react";
import ColorModel from "../Models/Color";
import { ColorService } from "../service/colorService";
import { colorReducer } from "./Reducers/colorReducer";

export class ColorContextModel {
    constructor(public colors: ColorModel[], public dispatchColorAction: React.Dispatch<any>) {}
}
const colorService = new ColorService();
const defaultColorValues = colorService.generateRandomColors(new Array<ColorModel>(5).fill(new ColorModel(colorService.generateRandomColor().hexCode, false)));
const ColorContext = React.createContext<ColorContextModel>({} as ColorContextModel);

export function ColorContextProvider(props: any) {
    const [colors, dispatchColorAction] = useReducer(colorReducer, defaultColorValues);
    return <ColorContext.Provider value={{ colors, dispatchColorAction }}>{props.children}</ColorContext.Provider>;
}

export function useColorContext() {
    return useContext(ColorContext);
}
