import { Container, Text } from "pixi.js";

import { AtlasKeys } from "./../utils/AtlasKeys";
import { Colors } from "./../utils/Colors";
import { MagicValues } from "./../utils/MagicValues";
import { PixiFactory } from "./../utils/PixiFactory";
import { Texts } from "./../utils/Texts";
import { ViewPortSize } from "./../utils/ViewPortSize";
import { CustomButton } from "./components/CustomButton";

export class PausePopup extends Container {
    private _homeButton: CustomButton;
    public get homeButton(): CustomButton {
        return this._homeButton;
    }

    private _resumeButton: CustomButton;
    public get resumeButton(): CustomButton {
        return this._resumeButton;
    }

    private _retryButton: CustomButton;
    public get retryButton(): CustomButton {
        return this._retryButton;
    }

    constructor() {
        super();

        this.interactive = true;

        this.setupBackgrounds();
        this.setupButtons();
        this.setupText();
    }
    private setupBackgrounds(): void {
        this.addChild(PixiFactory.getShadowBackground());
        this.addChild(PixiFactory.getBoardBackground());
    }
    private setupButtons(): void {
        this._homeButton = PixiFactory.getButton(AtlasKeys.BUTTON_HOME);
        this._homeButton.x = ViewPortSize.HALF_WIDTH + 25;
        this._homeButton.y = ViewPortSize.HALF_HEIGHT + 15;
        this.addChild(this._homeButton);

        this._resumeButton = PixiFactory.getButton(AtlasKeys.BUTTON_RESUME);
        this._resumeButton.x = ViewPortSize.MAX_WIDTH - 32;
        this._resumeButton.y = MagicValues.BORDER_OFFSET + 15;
        this.addChild(this._resumeButton);

        this._retryButton = PixiFactory.getButton(AtlasKeys.BUTTON_RETRY);
        this._retryButton.x = ViewPortSize.HALF_WIDTH - 25;
        this._retryButton.y = ViewPortSize.HALF_HEIGHT + 15;
        this.addChild(this._retryButton);
    }
    private setupText(): void {
        const tilte: Text = PixiFactory.getText(Texts.PAUSED, Colors.DYNAMIC_TEXT, Texts.FONT_SIZE_DEFAULT + 8);
        tilte.x = ViewPortSize.HALF_WIDTH;
        tilte.y = ViewPortSize.HALF_HEIGHT - 35;
        tilte.anchor.set(0.5);
        this.addChild(tilte);
    }
}
