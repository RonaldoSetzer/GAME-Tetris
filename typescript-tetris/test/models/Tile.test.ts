import { Tile } from "./../../src/models/Tile";
import { assert } from "chai";

describe("Tile", () => {
    let tile: Tile;

    beforeEach(() => {
        tile = new Tile();
    });

    afterEach(() => {
        tile = null;
    });

    it("Clone: Returns a new Tile with the same values", () => {
        tile.row = 1;
        tile.col = 1;

        let clone: Tile = tile.clone();
        let result = tile.col === clone.col && tile.row === clone.row;
        assert.isTrue(result);
    });

    it("SetPosition: Changes the Tile position", () => {
        let row = 1;
        let col = 1;

        tile.setPosition(col, row);
        let result = tile.col === col && tile.row === row;
        assert.isTrue(result);
    });
});
