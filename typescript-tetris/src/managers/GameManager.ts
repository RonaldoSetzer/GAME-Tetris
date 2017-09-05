import { Grid } from "../models/Grid";
import { Tile } from "./../models/Tile";
import { TileGroup } from "../models/TileGroup";
import { GameService } from "../services/GameService";

import { injectable, inject } from "@robotlegsjs/core";

@injectable()
export class GameManager {

    @inject(GameService)
    private gameService: GameService;

    private _grid: Grid;
    private _currentPiece: TileGroup;
    private _tilesToUpdate: Array<Tile>;
    private _tilesToRemove: Array<Tile>;

    public createEmpytGrid(cols = 10, rows = 20): void {
        this._grid = new Grid(cols, rows);
        this._tilesToUpdate = new Array<Tile>();
        this._tilesToRemove = new Array<Tile>();
    }

    public addPiece(currentPiece: TileGroup): void {
        this._currentPiece = currentPiece;
        this._currentPiece.moveHorizontal(4);
        this.addTilesToUpdate(this._currentPiece.tiles);

        this.validateGameOver();
    }

    public tickUpdate(): void {
        this.moveCurrentPieceDown();
    }

    public rotateCurrentPiece(): void {
        this._currentPiece.rotate();

        if (this.isMovementValid() === false) {
            this._currentPiece.rollback();
        } else {
            this.addTilesToUpdate(this._currentPiece.tiles);
        }
    }

    public getTilesToUpdate(): Array<Tile> {
        return this._tilesToUpdate;
    }

    public getTilesToRemove(): Array<Tile> {
        return this._tilesToRemove;
    }

    public moveCurrentPieceLeft(): void {
        this._currentPiece.moveHorizontal(-1);

        if (this.isMovementValid() === false) {
            this._currentPiece.rollbackX();
        } else {
            this.addTilesToUpdate(this._currentPiece.tiles);
        }
    }

    public moveCurrentPieceRight(): void {
        this._currentPiece.moveHorizontal(1);

        if (this.isMovementValid() === false) {

            this._currentPiece.rollbackX();
        } else {

            this.addTilesToUpdate(this._currentPiece.tiles);
        }
    }

    public moveCurrentPieceDown(): void {
        this._currentPiece.moveVertical();

        if (this.isMovementValid() === false) {
            this._currentPiece.rollbackY();

            let tiles: Array<Tile> = this._currentPiece.tiles;
            for (let i = 0; i < tiles.length; i++) {
                this._grid.setTile(tiles[i], tiles[i].col, tiles[i].row);
            }
            this.solveCompletedRows();
            this.gameService.getNextPiece();
        } else {
            this.addTilesToUpdate(this._currentPiece.tiles);
        }
    }
    private solveCompletedRows(): void {
        let linesRemoved = 0;

        let updateTiles: Array<Tile> = new Array<Tile>();
        let removeTiles: Array<Tile> = new Array<Tile>();

        let isToRemove: boolean;
        let hasToUpdate: boolean;

        let tile: Tile;

        for (let row = this._grid.maxRows - 1; row > 0; row--) {
            isToRemove = true;
            for (let col = 0; col < this._grid.maxCols; col++) {
                tile = this._grid.getTile(col, row);

                if (tile && hasToUpdate) {
                    tile.setPosition(col, row);
                    this._tilesToUpdate.push(tile);
                }
                isToRemove = (isToRemove && (tile !== null));
            }
            if (isToRemove) {
                removeTiles = removeTiles.concat(this._grid.removeRow(row));
                hasToUpdate = true;
                row++;
                linesRemoved++;
            }
        }

        if (linesRemoved > 0) {
            this.gameService.increasePoints(linesRemoved);
        }

        this._tilesToUpdate = this._tilesToUpdate.concat(updateTiles);
        this._tilesToRemove = this._tilesToRemove.concat(removeTiles);
    }

    private isMovementValid(): boolean {
        for (let i = 0; i < this._currentPiece.tiles.length; i++) {
            let tile = this._currentPiece.tiles[i];
            if (this.isOffBounds(tile) || this.isNotEmptyTile(tile)) {
                return false;
            }
        }
        return true;
    }

    private addTilesToUpdate(tiles: Array<Tile>): void {
        this._tilesToUpdate = this._tilesToUpdate.concat(tiles);
    }

    private validateGameOver(): void {
        if (this.isMovementValid() === false) {
            this.gameService.gameOver();
        }
    }
    private isNotEmptyTile(tile: Tile): boolean {
        return !this._grid.isEmptyTile(tile.col, tile.row);
    }

    private isOffBounds(tile: Tile): boolean {
        return tile.col < 0 || tile.col >= this._grid.maxCols || tile.row < 0 || tile.row >= this._grid.maxRows;
    }
}
