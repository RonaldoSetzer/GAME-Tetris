import { CustomButton } from "./components/CustomButton";

import { AtlasKeys } from "./../utils/AtlasKeys";
import { Colors } from "./../utils/Colors";
import { PixiFactory } from "./../utils/PixiFactory";
import { ViewPortSize } from "./../utils/ViewPortSize";

import { Container, Sprite } from "pixi.js";

export class HomeView extends Container {

    private _startButton: CustomButton;
    public get startButton(): CustomButton {
        return this._startButton;
    }

    private _optionButton: CustomButton;
    public get optionButton(): CustomButton {
        return this._optionButton;
    }

    constructor() {
        super();

        this.setupBackground();
        this.setupImages();
        this.setupButtons();
    }

    private setupBackground(): void {
        this.addChild(PixiFactory.getColorBackground());
    }

    private setupImages(): void {
        let logo: Sprite = PixiFactory.getImage(AtlasKeys.LOGO);
        logo.anchor.set(.5);
        logo.x = ViewPortSize.HALF_WIDTH;
        logo.y = ViewPortSize.MAX_HEIGHT * .3;
        this.addChild(logo);

        let setzer: Sprite = PixiFactory.getImage(AtlasKeys.LOGO_SETZER);
        setzer.anchor.set(.5);
        setzer.x = 10;
        setzer.y = ViewPortSize.MAX_HEIGHT - 15;
        this.addChild(setzer);
    }

    private setupButtons(): void {
        this._startButton = PixiFactory.getButton(AtlasKeys.BUTTON_START);
        this._startButton.x = ViewPortSize.HALF_WIDTH;
        this._startButton.y = ViewPortSize.MAX_HEIGHT * .7;
        this.addChild(this._startButton);

        this._optionButton = PixiFactory.getButton(AtlasKeys.BUTTON_CONFIG);
        this._optionButton.x = ViewPortSize.HALF_WIDTH;
        this._optionButton.y = ViewPortSize.MAX_HEIGHT * .8;
        this.addChild(this._optionButton);
    }
}
