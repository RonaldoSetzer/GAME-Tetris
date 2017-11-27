import { Sprite } from "pixi.js";

import { Tile } from "../models/Tile";

export class GameUtils {
    public static getCurrentLevel(lines: number): number {
        return Math.floor(lines / 10 + 1);
    }
    public static getCurrentSpeed(level: number): number {
        return Math.max(4, 19 - level);
    }
    public static getPointsByLines(lines: number): number {
        const bonus: number = Math.floor(lines * 0.9);
        return (lines + bonus) * 100;
    }
    public static updateDisplayPositionByTile(tile: Tile, display: Sprite): void {
        if (display == null || tile == null) {
            return;
        }
        display.x = tile.col * Tile.TILE_WIDTH;
        display.y = tile.row * Tile.TILE_WIDTH;
    }
}
