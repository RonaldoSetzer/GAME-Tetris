import { Container, Text } from "pixi.js";

import { Colors } from "./../../utils/Colors";
import { PixiFactory } from "./../../utils/PixiFactory";

export class DoubleTextField extends Container {
    private _text: Text;
    public get text(): string {
        return this._text.text;
    }
    public set text(value: string) {
        this._text.text = value;
    }

    constructor(label: string) {
        super();

        const labelField: Text = PixiFactory.getText(label, Colors.STATIC_TEXT);
        labelField.anchor.x = 1;
        this.addChild(labelField);

        this._text = PixiFactory.getText("0", Colors.DYNAMIC_TEXT);
        this._text.anchor.x = 1;
        this._text.y = labelField.y + 30;
        this.addChild(this._text);
    }
}
