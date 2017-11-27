import { Tile } from "./../../src/models/Tile";
import { Grid } from "./../../src/models/Grid";
import { assert } from "chai";

describe("Grid", () => {
    let grid: Grid;

    beforeEach(() => {
        grid = new Grid();
    });

    afterEach(() => {
        grid = null;
    });

    it("RemoveRow: The values must be null", () => {
        let row = 5;
        for (let col = 0; col < grid.maxCols; col++) {
            grid.setTile(new Tile(col, row), col, row);
        }
        let removedRow: Array<Tile> = grid.removeRow(row);
        let result = true;
        for (let col = 0; col < grid.maxCols; col++) {
            result = result && grid.getTile(col, row) === null;
        }
        assert.isTrue(result);
    });

    it("RemoveRow: The method has to return the removed tiles", () => {
        let tiles: Array<Tile> = new Array<Tile>();
        let row = 5;
        for (let col = 0; col < grid.maxCols; col++) {
            let tile = new Tile(col, row);
            grid.setTile(tile, col, row);
            tiles.push(tile);
        }
        let removedRow: Array<Tile> = grid.removeRow(row);
        let result = true;
        for (let i = 0; i < grid.maxCols; i++) {
            result = result && removedRow[i] === tiles[i];
        }

        assert.isTrue(result);
    });

    it("GetRow: Get the list of tiles from the row", () => {
        let tiles: Array<Tile> = new Array<Tile>();
        let row = 5;
        for (let col = 0; col < grid.maxCols; col++) {
            let tile = new Tile(col, row);
            grid.setTile(tile, col, row);
            tiles.push(tile);
        }
        let getRow: Array<Tile> = grid.getRow(row);
        let result = true;
        for (let i = 0; i < grid.maxCols; i++) {
            result = result && getRow[i] === tiles[i];
        }
        assert.isTrue(result);
    });

    it("Initial values: The grid must start with null values", () => {
        let result = true;
        for (let row = 0; row < grid.maxRows; row++) {
            for (let col = 0; col < grid.maxCols; col++) {
                result = result && grid.getTile(col, row) === null;
            }
        }
        assert.isTrue(result);
    });

    it("IsEmptyTile: When the tile is null, then the Tile is Empty", () => {
        let col = 0;
        let row = 0;
        grid.setTile(null, col, row);
        assert.isTrue(grid.isEmptyTile(col, row));
    });

    it("IsEmptyTile: When the tile is not null, then the Tile is not Empty", () => {
        let col = 0;
        let row = 0;
        grid.setTile(new Tile(col, row), col, row);
        assert.isFalse(grid.isEmptyTile(col, row));
    });

    it("GetTile: Returns the Tile", () => {
        let col = 2;
        let row = 2;
        let tile = new Tile(col, row);
        grid.setTile(tile, col, row);
        tile = grid.getTile(col, row);

        assert.isTrue(tile.col === col && tile.row === row);
    });

    it("SetTile: Set the Tile in the position", () => {
        let col = 0;
        let row = 0;
        let tile = new Tile(col, row);
        grid.setTile(tile, col, row);
        assert.deepEqual(tile, grid.getTile(col, row));
    });
});
