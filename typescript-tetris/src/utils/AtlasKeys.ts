import { Texture } from "pixi.js";

export class AtlasKeys {
    public static BUTTON_CANCEL = "button_cancel";
    public static BUTTON_CONFIG = "button_config";
    public static BUTTON_CONFIRM = "button_confirm";
    public static BUTTON_HOME = "button_home";
    public static BUTTON_PAUSE = "button_pause";
    public static BUTTON_RESET = "button_reset";
    public static BUTTON_RESUME = "button_resume";
    public static BUTTON_RETRY = "button_retry";
    public static BUTTON_START = "button_start";

    public static LOGO = "logo_tetris.png";
    public static LOGO_SETZER = "logo_setzer.png";
    public static LOGO_TYPESCRIPT = "./assets/logo_typescript.png";

    public static GRID = "grid.png";
    public static NEXT_TILE = "next_tile.png";

    /* TILES */
    public static TILE_01 = "tile_01.png";
    public static TILE_02 = "tile_02.png";
    public static TILE_03 = "tile_03.png";
    public static TILE_04 = "tile_04.png";
    public static TILE_05 = "tile_05.png";
    public static TILE_06 = "tile_06.png";
    public static TILE_07 = "tile_07.png";
    public static TILE_08 = "tile_08.png";

    public static ATLAS_XML = "./assets/tetris-pixijs-atlas.json";
    public static ATLAS_PNG = "./assets/tetris-pixijs-atlas.png";

    private static resources: any;
    private static textureCache: any;

    public static update(): void {
        this.resources = PIXI.loader.resources;
        this.textureCache = PIXI.utils.TextureCache;
    }
    public static getTexture(atlasKey): Texture {
        return this.textureCache[atlasKey];
    }
    public static getTileTexture(id): Texture {
        const ids: string[] = [
            this.TILE_01,
            this.TILE_02,
            this.TILE_03,
            this.TILE_04,
            this.TILE_05,
            this.TILE_06,
            this.TILE_07,
            this.TILE_08
        ];
        return this.textureCache[ids[id] || ids[0]];
    }
}
