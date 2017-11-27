import { Container, Text } from "pixi.js";

import { AtlasKeys } from "./../utils/AtlasKeys";
import { PixiFactory } from "./../utils/PixiFactory";
import { Texts } from "./../utils/Texts";
import { ViewPortSize } from "./../utils/ViewPortSize";
import { CustomButton } from "./components/CustomButton";

export class GameOverPopup extends Container {
    private _homeButton: CustomButton;
    public get homeButton(): CustomButton {
        return this._homeButton;
    }

    private _retryButton: CustomButton;
    public get retryButton(): CustomButton {
        return this._retryButton;
    }

    constructor() {
        super();

        this.interactive = true;

        this.setupBackgrounds();
        this.setupTexts();
        this.setupButtons();
    }
    private setupBackgrounds(): void {
        this.addChild(PixiFactory.getShadowBackground());
        this.addChild(PixiFactory.getBoardBackground());
    }
    private setupTexts(): void {
        const title: Text = PixiFactory.getText(Texts.GAME_OVER);
        title.x = ViewPortSize.HALF_WIDTH;
        title.y = ViewPortSize.HALF_HEIGHT - 30;
        title.anchor.set(0.5);
        this.addChild(title);
    }
    private setupButtons(): void {
        this._homeButton = PixiFactory.getButton(AtlasKeys.BUTTON_HOME);
        this._homeButton.x = ViewPortSize.HALF_WIDTH + 25;
        this._homeButton.y = ViewPortSize.HALF_HEIGHT + 15;
        this.addChild(this._homeButton);

        this._retryButton = PixiFactory.getButton(AtlasKeys.BUTTON_RETRY);
        this._retryButton.x = ViewPortSize.HALF_WIDTH - 25;
        this._retryButton.y = ViewPortSize.HALF_HEIGHT + 15;
        this.addChild(this._retryButton);
    }
}
