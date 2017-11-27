import { TileDisplay } from "./../views/components/TileDisplay";
import { AtlasKeys } from "./AtlasKeys";

export class TilePool {
    private static _dictionary: Map<number, TileDisplay[]>;

    public static init(): void {
        this._dictionary = new Map<number, TileDisplay[]>();
    }
    public static getTileDisplay(typeId: number): TileDisplay {
        if (this._dictionary.get(typeId) === undefined) {
            this._dictionary.set(typeId, new Array<TileDisplay>());
        }
        const list: TileDisplay[] = this._dictionary.get(typeId);
        let tileDisplay: TileDisplay;
        if (list.length === 0) {
            tileDisplay = new TileDisplay(AtlasKeys.getTileTexture(typeId), typeId);
        } else {
            tileDisplay = list.shift();
        }
        tileDisplay.visible = true;

        return tileDisplay;
    }
    public static back(tile: TileDisplay): void {
        const list: TileDisplay[] = this._dictionary.get(tile.typeId);
        tile.visible = false;

        if (list.indexOf(tile) === -1) {
            list.push(tile);
        }
    }
}
