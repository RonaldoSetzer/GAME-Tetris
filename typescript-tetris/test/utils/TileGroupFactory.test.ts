import { Equal } from "tslint/lib/utils";
import { Tile } from "./../../src/models/Tile";
import { TileGroup } from "./../../src/models/TileGroup";
import { TileGroupType } from "./../../src/models/TileGroupType";
import { TileGroupFactory } from "./../../src/utils/TileGroupFactory";
import { assert } from "chai";

describe("TileGroupFactory", () => {
    it("testGetTileGroup: notNull", () => {
        let tileGroup: TileGroup = TileGroupFactory.getTileGroup(TileGroupType.TYPE_I);
        assert.isNotNull(tileGroup);
    });

    it("testGetTileGroup: right values", () => {
        let tileGroup: TileGroup = TileGroupFactory.getTileGroup(TileGroupType.TYPE_I);
        let result = true;
        result = result && tileGroup.typeId === TileGroupType.TYPE_I;
        result = result && tileGroup.tiles.length === 4;
        assert.equal(tileGroup.typeId, TileGroupType.TYPE_I);
        assert.isTrue(result);
    });

    it("testGetRandomTileGroup: ", () => {
        let tileGroup: TileGroup = TileGroupFactory.getRandomTileGroup();
        assert.isNotNull(tileGroup);
    });

    it("testGetTilesByTypeArray: Is not Null", () => {
        let array: Array<number> = TileGroupType.getTypeArray(TileGroupType.TYPE_L);
        let tiles: Array<Tile> = TileGroupFactory.getTilesByTypeArray(array);
        assert.isNotNull(tiles);
    });

    it("testGetTilesByTypeArray: right values", () => {
        let array: Array<number> = TileGroupType.getTypeArray(TileGroupType.TYPE_L);
        let tiles: Array<Tile> = TileGroupFactory.getTilesByTypeArray(array);
        let result = true;

        result = result && tiles.length === array.length;
        result = result && tiles[0].col === Math.floor(array[0] % 2);
        result = result && tiles[0].row === Math.floor(array[0] / 2);
        assert.isTrue(result);
    });
});
