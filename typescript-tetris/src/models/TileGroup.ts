import { Tile } from "./Tile";

export class TileGroup {
    private _tiles: Tile[];
    private _typeId: number;

    constructor(typeId: number, tiles: Tile[]) {
        this._typeId = typeId;
        this._tiles = tiles;
    }
    public moveVertical(direction = 1): void {
        for (let i = 0; i < this.tiles.length; i++) {
            this._tiles[i].bRow = this._tiles[i].row;
            this._tiles[i].row += direction;
        }
    }
    public moveHorizontal(direction: number): void {
        for (let i = 0; i < this.tiles.length; i++) {
            this._tiles[i].bCol = this._tiles[i].col;
            this._tiles[i].col += direction;
        }
    }
    public rotate(): void {
        const anchorTile: Tile = this._tiles[1];
        const newTile: Tile = new Tile();
        for (let i = 0; i < this._tiles.length; i++) {
            this._tiles[i].bCol = this._tiles[i].col;
            this._tiles[i].bRow = this._tiles[i].row;
            newTile.col = this._tiles[i].row - anchorTile.row;
            newTile.row = this._tiles[i].col - anchorTile.col;
            this._tiles[i].col = anchorTile.col - newTile.col;
            this._tiles[i].row = anchorTile.row + newTile.row;
        }
    }
    public rollback(): void {
        for (let i = 0; i < this._tiles.length; i++) {
            this._tiles[i].col = this._tiles[i].bCol;
            this._tiles[i].row = this._tiles[i].bRow;
        }
    }
    public rollbackX(): void {
        for (let i = 0; i < this._tiles.length; i++) {
            this._tiles[i].col = this._tiles[i].bCol;
        }
    }
    public rollbackY(): void {
        for (let i = 0; i < this._tiles.length; i++) {
            this._tiles[i].row = this._tiles[i].bRow;
        }
    }
    public get tiles(): Tile[] {
        return this._tiles;
    }
    public get typeId(): number {
        return this._typeId;
    }
}
