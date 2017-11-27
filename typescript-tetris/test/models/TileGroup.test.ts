import { TileGroupFactory } from "./../../src/utils/TileGroupFactory";
import { TileGroup } from "./../../src/models/TileGroup";
import { Tile } from "./../../src/models/Tile";
import { assert } from "chai";

describe("TileGroup", () => {
    function generateTilesBackup(tiles: Array<Tile>): Array<Tile> {
        let bkpTiles: Array<Tile> = new Array<Tile>();
        for (let i = 0; i < tiles.length; i++) {
            bkpTiles.push(tiles[i].clone());
        }
        return bkpTiles;
    }

    let tileGroup: TileGroup;
    let tilesBackup: Array<Tile>;
    let tile: Tile;
    let tileBefore: Tile;
    let result;

    beforeEach(() => {
        tileGroup = TileGroupFactory.getRandomTileGroup();
        tilesBackup = generateTilesBackup(tileGroup.tiles);

        result = true;
    });

    afterEach(() => {
        tileGroup = null;
        tilesBackup = null;
        tile = null;
        tileBefore = null;
    });

    it("MoveVertical: Moves the group to down", () => {
        tileGroup.moveVertical(1);

        for (let i = 0; i < tileGroup.tiles.length; i++) {
            tile = tileGroup.tiles[i];
            tileBefore = tilesBackup[i];
            tileBefore.row += 1;

            result = result && tileBefore.col === tile.col;
            result = result && tileBefore.row === tile.row;
        }
        assert.isTrue(result);
    });

    it("MoveVertical: Moves the group to up", () => {
        tileGroup.moveVertical(-1);

        for (let i = 0; i < tileGroup.tiles.length; i++) {
            tile = tileGroup.tiles[i];
            tileBefore = tilesBackup[i];
            tileBefore.row -= 1;

            result = result && tileBefore.col === tile.col;
            result = result && tileBefore.row === tile.row;
        }
        assert.isTrue(result);
    });

    it("MoveHorizontal: Moves the group to right", () => {
        tileGroup.moveHorizontal(1);

        for (let i = 0; i < tileGroup.tiles.length; i++) {
            tile = tileGroup.tiles[i];
            tileBefore = tilesBackup[i];
            tileBefore.col += 1;

            result = result && tileBefore.col === tile.col;
            result = result && tileBefore.row === tile.row;
        }
        assert.isTrue(result);
    });

    it("MoveHorizontal: Moves the group to left", () => {
        tileGroup.moveHorizontal(-1);

        for (let i = 0; i < tileGroup.tiles.length; i++) {
            tile = tileGroup.tiles[i];
            tileBefore = tilesBackup[i];
            tileBefore.col -= 1;

            result = result && tileBefore.col === tile.col;
            result = result && tileBefore.row === tile.row;
        }
        assert.isTrue(result);
    });

    it("Rotate: Applies the rotation algorithm to the group", () => {
        tileGroup.rotate();

        let tempAnchor: Tile = tilesBackup[1];
        let tempTile: Tile = new Tile();
        for (let i = 0; i < tileGroup.tiles.length; i++) {
            tile = tileGroup.tiles[i];
            tileBefore = tilesBackup[i];

            tempTile.col = tileBefore.row - tempAnchor.row;
            tempTile.row = tileBefore.col - tempAnchor.col;
            tileBefore.col = tempAnchor.col - tempTile.col;
            tileBefore.row = tempAnchor.row + tempTile.row;

            result = result && tileBefore.col === tile.col;
            result = result && tileBefore.row === tile.row;
        }
        assert.isTrue(result);
    });

    it("RollbackX: Returns to the last valid position after a horizontal movement", () => {
        tileGroup.moveHorizontal(1);
        tileGroup.rollbackX();

        for (let i = 0; i < tileGroup.tiles.length; i++) {
            tile = tileGroup.tiles[i];
            tileBefore = tilesBackup[i];

            result = result && tile.col === tileBefore.col;
            result = result && tile.col === tile.bCol;
        }
        assert.isTrue(result);
    });

    it("RollbackY: Returns to the last valid position after a vertical movement", () => {
        tileGroup.moveVertical(1);
        tileGroup.rollbackY();

        for (let i = 0; i < tileGroup.tiles.length; i++) {
            tile = tileGroup.tiles[i];
            tileBefore = tilesBackup[i];

            result = result && tile.row === tileBefore.row;
            result = result && tile.row === tile.bRow;
        }
        assert.isTrue(result);
    });

    it("Rollback: Returns to the last valid position after any movement", () => {
        tileGroup.moveVertical(1);
        tileGroup.moveHorizontal(1);
        tileGroup.rollback();

        for (let i = 0; i < tileGroup.tiles.length; i++) {
            tile = tileGroup.tiles[i];
            tileBefore = tilesBackup[i];

            result = result && tile.col === tileBefore.col;
            result = result && tile.row === tileBefore.row;

            result = result && tile.col === tile.bCol;
            result = result && tile.row === tile.bRow;
        }
        assert.isTrue(result);
    });
});
