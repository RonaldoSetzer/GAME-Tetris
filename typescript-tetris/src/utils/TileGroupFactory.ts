import { Tile } from "./../models/Tile";
import { TileGroup } from "../models/TileGroup";
import { TileGroupType } from "../models/TileGroupType";

export class TileGroupFactory {

    public static getTileGroup( typeId: number ): TileGroup {
        let tiles: Array<Tile> = this.getTilesByTypeArray( TileGroupType.getTypeArray( typeId ));
        return new TileGroup( typeId, tiles );
    }

    public static getRandomTileGroup(): TileGroup {
        let types: Array<number> = [
            TileGroupType.TYPE_I,
            TileGroupType.TYPE_Z,
            TileGroupType.TYPE_S,
            TileGroupType.TYPE_T,
            TileGroupType.TYPE_L,
            TileGroupType.TYPE_J,
            TileGroupType.TYPE_O];
        let rndType: number = Math.floor( Math.random() * types.length );
        return this.getTileGroup( types[rndType] );
    }

    public static getTilesByTypeArray( typeArray: Array<number> ): Array<Tile> {
        let tiles: Array<Tile> = new Array<Tile>();
        let tile: Tile;

        for ( let i = 0; i < typeArray.length; i++ ) {
            tile = new Tile();
            tile.col =  Math.floor(typeArray[i] % 2);
            tile.row =  Math.floor(typeArray[i] / 2);
            tiles.push( tile );
        }
        return tiles;
    }
}
