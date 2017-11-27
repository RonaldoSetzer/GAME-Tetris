import { Container, Text } from "pixi.js";

import { AtlasKeys } from "./../utils/AtlasKeys";
import { MagicValues } from "./../utils/MagicValues";
import { PixiFactory } from "./../utils/PixiFactory";
import { Texts } from "./../utils/Texts";
import { ViewPortSize } from "./../utils/ViewPortSize";
import { CustomButton } from "./components/CustomButton";

export class InfoPopup extends Container {
    private _closeButton: CustomButton;
    public get closeButton(): CustomButton {
        return this._closeButton;
    }

    constructor() {
        super();

        this.setupBackgrounds();
        this.setupText();
        this.setupButtons();
    }
    private setupBackgrounds(): void {
        this.addChild(PixiFactory.getShadowBackground());
        this.addChild(PixiFactory.getBoardBackground());
    }
    private setupButtons(): void {
        this._closeButton = PixiFactory.getButton(AtlasKeys.BUTTON_CANCEL);
        this._closeButton.x = ViewPortSize.MAX_WIDTH - 32;
        this._closeButton.y = MagicValues.BORDER_OFFSET + 15;
        this.addChild(this._closeButton);
    }
    private setupText(): void {
        const msg: Text = PixiFactory.getText(Texts.COMMANDS);
        msg.x = ViewPortSize.HALF_WIDTH;
        msg.y = ViewPortSize.HALF_HEIGHT - 10;
        msg.anchor.set(0.5);
        this.addChild(msg);
    }
}
