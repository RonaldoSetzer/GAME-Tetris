import { Sprite, Texture } from "pixi.js";

import { AtlasKeys } from "./../../utils/AtlasKeys";

export class CustomButton extends Sprite {
    private _downState: Texture;
    private _overState: Texture;
    private _upState: Texture;

    private _isDown: boolean;
    private _isOver: boolean;

    constructor(atlasKey: string) {
        super(AtlasKeys.getTexture(atlasKey + "_up.png"));

        const downStateTexture: Texture = AtlasKeys.getTexture(atlasKey + "_over.png");
        const upStateTexture: Texture = AtlasKeys.getTexture(atlasKey + "_up.png");

        this._downState = downStateTexture;
        this._overState = downStateTexture;
        this._upState = upStateTexture;

        this.setInitialValues();
        this.setupInteractions();
    }
    private setInitialValues(): void {
        this.anchor.set(0.5);
        this.interactive = true;
        this.buttonMode = true;
    }
    private setupInteractions(): void {
        this.on("pointerup", this.onButtonUp);
        this.on("pointerupoutside", this.onButtonUp);
        this.on("pointerdown", this.onButtonDown);
        this.on("pointerover", this.onButtonOver);
        this.on("pointerout", this.onButtonOut);
    }
    private onButtonDown(): void {
        this._isDown = true;
        this.texture = this._downState;
        this.scale.set(0.95, 0.95);
    }
    private onButtonOut(): void {
        this._isOver = false;
        this.texture = this._upState;
        this.scale.set(1, 1);
    }
    private onButtonOver(): void {
        this._isOver = true;
        this.texture = this._overState;
    }
    private onButtonUp(): void {
        this._isDown = false;
        this.scale.set(1, 1);

        if (this._isOver) {
            this.texture = this._overState;
        } else {
            this.texture = this._upState;
        }
    }
}
