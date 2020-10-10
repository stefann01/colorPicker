import ColorModel from "../Models/Color";

export class ColorService{
    generateRandomColors(amount:number):ColorModel[] {
        let items = new Array<ColorModel>();
        for (let i = 0; i < amount; ++i) {
            items = [...items, new ColorModel("#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"))];
        }
        return items;
    }
    generateRandomColor():ColorModel{
        return new ColorModel("#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"));
    }
}