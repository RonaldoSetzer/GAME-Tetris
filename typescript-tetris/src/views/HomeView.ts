import { Container, Sprite } from "pixi.js";

import { AtlasKeys } from "./../utils/AtlasKeys";
import { PixiFactory } from "./../utils/PixiFactory";
import { ViewPortSize } from "./../utils/ViewPortSize";
import { CustomButton } from "./components/CustomButton";

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
        const logo: Sprite = PixiFactory.getImage(AtlasKeys.LOGO);
        logo.anchor.set(0.5);
        logo.x = ViewPortSize.HALF_WIDTH;
        logo.y = ViewPortSize.MAX_HEIGHT * 0.3;
        this.addChild(logo);

        const setzer: Sprite = PixiFactory.getImage(AtlasKeys.LOGO_SETZER);
        setzer.anchor.set(0.5);
        setzer.x = 10;
        setzer.y = ViewPortSize.MAX_HEIGHT - 15;
        this.addChild(setzer);
    }
    private setupButtons(): void {
        this._startButton = PixiFactory.getButton(AtlasKeys.BUTTON_START);
        this._startButton.x = ViewPortSize.HALF_WIDTH;
        this._startButton.y = ViewPortSize.MAX_HEIGHT * 0.7;
        this.addChild(this._startButton);

        this._optionButton = PixiFactory.getButton(AtlasKeys.BUTTON_CONFIG);
        this._optionButton.x = ViewPortSize.HALF_WIDTH;
        this._optionButton.y = ViewPortSize.MAX_HEIGHT * 0.8;
        this.addChild(this._optionButton);
    }
}
