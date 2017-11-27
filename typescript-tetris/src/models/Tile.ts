export class Tile {
    public static TILE_WIDTH = 18;

    public row: number;
    public col: number;
    public bRow: number;
    public bCol: number;

    constructor(col = 0, row = 0) {
        this.col = col;
        this.row = row;
        this.bCol = col;
        this.bRow = row;
    }
    public clone(): Tile {
        const tile: Tile = new Tile();
        tile.col = this.col;
        tile.row = this.row;
        tile.bCol = this.bCol;
        tile.bRow = this.bRow;

        return tile;
    }
    public setPosition(col: number, row: number): void {
        this.col = col;
        this.row = row;
    }
    public toString(): String {
        return "tile_col_" + this.col + "_row_" + this.row;
    }
}
