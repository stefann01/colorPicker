import ColorModel from "../../Models/Color";
import { ColorService } from "../../service/colorService";


export const colorReducer = (
    colors: ColorModel[],
    action: any
) => {
    const colorService = new ColorService();
    switch (action.type) {
        case "Add Color":
            return [...colors, colorService.generateRandomColor()];
        case "Generate":
            return colorService.generateRandomColors(colors.length);
        case "Remove":
            return colors.filter( (item, index) => index !== action.payload);;
        default:
            return [ ...colors ];
    }
};
