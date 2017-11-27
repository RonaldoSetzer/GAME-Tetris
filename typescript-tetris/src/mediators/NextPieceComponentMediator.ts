import { inject, injectable } from "@robotlegsjs/core";
import { Mediator } from "@robotlegsjs/pixi";
import { Sprite } from "pixi.js";

import { GameEvent } from "./../events/GameEvent";
import { GameModel } from "./../models/GameModel";
import { Tile } from "./../models/Tile";
import { GameService } from "./../services/GameService";
import { PixiFactory } from "./../utils/PixiFactory";
import { NextPieceComponent } from "./../views/components/NextPieceComponent";

@injectable()
export class NextPieceComponentMediator extends Mediator<NextPieceComponent> {
    @inject(GameModel) private model: GameModel;
    @inject(GameService) private gameService: GameService;

    public initialize(): void {
        this.eventMap.mapListener(this.eventDispatcher, GameEvent.UPDATE_NEXT_PIECE, this.game_updateNextPiece, this);
    }
    public destroy(): void {
        this.eventMap.unmapListeners();
    }
    private game_updateNextPiece(e: any): void {
        this.view.removeChildren();

        let display: Sprite;
        for (let i = 0; i < this.model.nextPiece.tiles.length; i++) {
            display = this.createDisplay(this.model.nextPiece.typeId);
            display.x = (this.model.nextPiece.tiles[i].col + 2) * Tile.TILE_WIDTH;
            display.y = this.model.nextPiece.tiles[i].row * Tile.TILE_WIDTH;
            display.anchor.x = 0.5;
            this.view.addChild(display);
        }
    }
    private createDisplay(assetId: number): Sprite {
        return PixiFactory.getTileDisplay(assetId);
    }
}
