import { Sprite, Texture } from "pixi.js";

export class TileDisplay extends Sprite {
    private _typeId: number;

    public get typeId(): number {
        return this._typeId;
    }

    constructor(texture: Texture, typeId: number) {
        super(texture);

        this._typeId = typeId;
    }
    public removeFromParent(): void {
        this.parent.removeChild(this);
    }
}
