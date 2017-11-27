import { inject, injectable } from "@robotlegsjs/core";
import { Mediator } from "@robotlegsjs/pixi";
import { Sprite } from "pixi.js";

import { GameEvent } from "./../events/GameEvent";
import { GameManager } from "./../managers/GameManager";
import { GameModel } from "./../models/GameModel";
import { Tile } from "./../models/Tile";
import { TileGroup } from "./../models/TileGroup";
import { GameService } from "./../services/GameService";
import { GameUtils } from "./../utils/GameUtils";
import { PixiFactory } from "./../utils/PixiFactory";
import { TilePool } from "./../utils/TilePool";
import { GridComponent } from "./../views/components/GridComponent";
import { TileDisplay } from "./../views/components/TileDisplay";

@injectable()
export class GridComponentMediator extends Mediator<GridComponent> {
    @inject(GameModel) private model: GameModel;
    @inject(GameService) private gameService: GameService;
    @inject(GameManager) private gameManager: GameManager;

    private _displays: Map<Tile, Sprite>;

    private _tick: number;

    private _paused: boolean;

    public initialize(): void {
        this._paused = false;

        this.eventMap.mapListener(this.eventDispatcher, GameEvent.UPDATE_NEXT_PIECE, this.game_onUpdateNextPiece, this);
        this.eventMap.mapListener(this.eventDispatcher, GameEvent.RESUME, this.game_onResumeGame, this);
        this.eventMap.mapListener(this.eventDispatcher, GameEvent.PAUSE, this.game_onPauseGame, this);
        this.eventMap.mapListener(this.eventDispatcher, GameEvent.GAME_OVER, this.game_onGameOVer, this);
        this.eventMap.mapListener(this.eventDispatcher, GameEvent.CLEAR_GRID, this.game_onClearGrid, this);
    }
    public destroy(): void {
        this._paused = true;
        this.eventMap.unmapListeners();
        document.removeEventListener("keydown", this.onKeyDownMovement.bind(this));
    }
    private addPiece(): void {
        this.gameManager.addPiece(this.model.currentPiece);

        let display: TileDisplay;
        const group: TileGroup = this.model.currentPiece;
        for (let i = 0; i < group.tiles.length; i++) {
            display = PixiFactory.getTileDisplay(group.typeId);
            this.addDisplayToStage(group.tiles[i], display);
            GameUtils.updateDisplayPositionByTile(group.tiles[i], display);
        }
    }
    private addDisplayToStage(tile: Tile, display: Sprite): void {
        this.view.addChild(display);
        this._displays.set(tile, display);
    }
    private updateDisplaysPositions(tiles: Tile[]): void {
        let tile: Tile;
        while (tiles.length > 0) {
            tile = tiles.pop();
            GameUtils.updateDisplayPositionByTile(tile, this._displays.get(tile));
        }
    }
    private removeDisplays(tiles: Tile[]): void {
        let tile: Tile;
        let tileDisplay: TileDisplay;

        while (tiles.length > 0) {
            tile = tiles.pop();
            tileDisplay = <TileDisplay>this._displays.get(tile);
            tileDisplay.removeFromParent();

            TilePool.back(tileDisplay);

            this._displays.delete(tile);
        }
    }
    private updateDisplays(): void {
        this.updateDisplaysPositions(this.gameManager.getTilesToUpdate());
        this.removeDisplays(this.gameManager.getTilesToRemove());
    }
    private game_onUpdateNextPiece(e: GameEvent): void {
        this.addPiece();
    }
    private game_onClearGrid(e: any): void {
        this._displays = new Map<Tile, Sprite>();
        this._tick = 0;

        this.gameManager.createEmpytGrid();
        this.view.clear();
    }
    private game_onGameOVer(e: any): void {
        this._paused = true;
        document.removeEventListener("keydown", this.onKeyDownMovement.bind(this));
    }
    private game_onPauseGame(e: any): void {
        this._paused = true;
        document.removeEventListener("keydown", this.onKeyDownMovement.bind(this));
    }
    private game_onResumeGame(e: any): void {
        this._paused = false;
        document.addEventListener("keydown", this.onKeyDownMovement.bind(this));
        window.requestAnimationFrame(this.onEnterFrame.bind(this));
    }
    private onKeyDownMovement(e: KeyboardEvent) {
        if (e.keyCode === 37 || e.keyCode === 65) {
            this.gameManager.moveCurrentPieceLeft();
        } else if (e.keyCode === 39 || e.keyCode === 68) {
            this.gameManager.moveCurrentPieceRight();
        } else if (e.keyCode === 38 || e.keyCode === 87) {
            this.gameManager.rotateCurrentPiece();
        } else if (e.keyCode === 40 || e.keyCode === 83) {
            this.gameManager.moveCurrentPieceDown();
        }
        this.updateDisplays();
    }
    private onEnterFrame(e: any): void {
        if (this._paused === true) {
            return;
        }

        this._tick++;

        if (this._tick > GameUtils.getCurrentSpeed(this.model.level)) {
            this.gameManager.tickUpdate();
            this._tick = 0;
        }

        this.updateDisplays();
        window.requestAnimationFrame(this.onEnterFrame.bind(this));
    }
}
