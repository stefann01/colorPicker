import ColorModel from "../../Models/Color";
import { ColorService } from "../../service/colorService";

export const colorReducer = (colors: ColorModel[], action: any) => {
    const colorService = new ColorService();
    switch (action.type) {
        case "Add Color":
            return colors.length < 10 ? [...colors, colorService.generateRandomColor()] : colors;
        case "Generate":
            return colorService.generateRandomColors(colors);
        case "Remove":
            return colors.filter((item, index) => index !== action.payload);
        case "Move Left": {
            let swappedColors = [...colors];
            if (action.payload.index > 0) {
                return colorService.swapColors(swappedColors, action.payload.index, action.payload.index - 1);
            } else {
                return colorService.swapColors(swappedColors, action.payload.index, swappedColors.length - 1);
            }
        }
        case "Move Right": {
            let swappedColors = [...colors];
            if (action.payload.index < swappedColors.length - 1) {
                return colorService.swapColors(swappedColors, action.payload.index, action.payload.index + 1);
            } else {
                return colorService.swapColors(swappedColors, action.payload.index, 0);
            }
        }
        case "Remove Last Color":
            return colors.slice(0, colors.length - 1);
        case "LockUnlock":
            return colors.map((color, index) => {
                if (action.payload.index !== index) {
                    return color;
                }
                return new ColorModel(color.hexCode, !color.isLocked);
            });

        default:
            return [...colors];
    }
};
