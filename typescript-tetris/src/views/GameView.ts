import { Container, Sprite } from "pixi.js";

import { AtlasKeys } from "./../utils/AtlasKeys";
import { MagicValues } from "./../utils/MagicValues";
import { PixiFactory } from "./../utils/PixiFactory";
import { ViewPortSize } from "./../utils/ViewPortSize";
import { GridComponent } from "./components/GridComponent";
import { HUDGameComponent } from "./components/HUDGameComponent";
import { NextPieceComponent } from "./components/NextPieceComponent";

export class GameView extends Container {
    private _gridComponent: GridComponent;
    private _nextPieceComponent: NextPieceComponent;
    private _hudComponent: HUDGameComponent;

    constructor() {
        super();
        this.createBackgrounds();
    }

    public destroy(): void {
        this.removeChild(this._gridComponent);
        this.removeChild(this._nextPieceComponent);
        this.removeChild(this._hudComponent);

        this._gridComponent = null;
        this._nextPieceComponent = null;
        this._hudComponent = null;
    }

    public createComponents(): void {
        this._nextPieceComponent = new NextPieceComponent();
        this._nextPieceComponent.x = ViewPortSize.MAX_WIDTH - 91 - MagicValues.BORDER_OFFSET + 1;
        this._nextPieceComponent.y = 76 + 1;
        this.addChild(this._nextPieceComponent);

        this._gridComponent = new GridComponent();
        this._gridComponent.x = MagicValues.BORDER_OFFSET;
        this._gridComponent.y = 76;
        this.addChild(this._gridComponent);

        this._hudComponent = new HUDGameComponent();
        this.addChild(this._hudComponent);
    }
    private createBackgrounds(): void {
        this.addChild(PixiFactory.getColorBackground());

        const grid: Sprite = PixiFactory.getImage(AtlasKeys.GRID);
        grid.x = MagicValues.BORDER_OFFSET;
        grid.y = 76;
        this.addChild(grid);

        const nextPieceBg: Sprite = PixiFactory.getImage(AtlasKeys.NEXT_TILE);
        nextPieceBg.x = ViewPortSize.MAX_WIDTH - nextPieceBg.width - MagicValues.BORDER_OFFSET;
        nextPieceBg.y = 76;
        this.addChild(nextPieceBg);
    }
}
