import ColorModel from "../Models/Color";

export class ColorService {
    generateRandomColors(colors: Array<ColorModel>): ColorModel[] {
        let items = new Array<ColorModel>();
        for (let i = 0; i < colors.length; ++i) {
            items = colors[i].isLocked ? [...items, colors[i]] : [...items, new ColorModel("#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"), false)];
        }
        return items;
    }
    generateRandomColor(): ColorModel {
        return new ColorModel("#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"), false);
    }

    swapColors(colors: Array<ColorModel>, first: number, second: number) {
        let temp = colors[first];
        colors[first] = colors[second];
        colors[second] = temp;
        return colors;
    }
}
