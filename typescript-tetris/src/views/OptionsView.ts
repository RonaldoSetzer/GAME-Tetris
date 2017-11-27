import { Container, Text } from "pixi.js";

import { AtlasKeys } from "./../utils/AtlasKeys";
import { Colors } from "./../utils/Colors";
import { PixiFactory } from "./../utils/PixiFactory";
import { Texts } from "./../utils/Texts";
import { ViewPortSize } from "./../utils/ViewPortSize";
import { CustomButton } from "./components/CustomButton";

export class OptionsView extends Container {
    private _homeButton: CustomButton;
    public get homeButton(): CustomButton {
        return this._homeButton;
    }

    private _resetButton: CustomButton;
    public get resetButton(): CustomButton {
        return this._resetButton;
    }

    constructor() {
        super();

        this.setupBackground();
        this.setupButtons();
        this.setupTexts();
    }
    private setupBackground(): void {
        this.addChild(PixiFactory.getColorBackground());
    }
    private setupButtons(): void {
        this._homeButton = PixiFactory.getButton(AtlasKeys.BUTTON_HOME);
        this._homeButton.x = ViewPortSize.MAX_WIDTH - 30;
        this._homeButton.y = 30;
        this.addChild(this._homeButton);

        this._resetButton = PixiFactory.getButton(AtlasKeys.BUTTON_RESET);
        this._resetButton.x = ViewPortSize.MAX_WIDTH - 76;
        this._resetButton.y = 116;
        this.addChild(this._resetButton);
    }
    private setupTexts(): void {
        const title: Text = PixiFactory.getText(Texts.CONFIG);
        title.x = 15;
        title.y = 18;
        this.addChild(title);

        const hiScore: Text = PixiFactory.getText(Texts.HI_SCORE, Colors.STATIC_TEXT);
        hiScore.x = 15;
        hiScore.y = 105;
        this.addChild(hiScore);
    }
}
