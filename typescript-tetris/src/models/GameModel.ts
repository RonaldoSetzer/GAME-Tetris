import { injectable } from "@robotlegsjs/core";

import { TileGroup } from "./TileGroup";

@injectable()
export class GameModel {
    public score: number;
    public level: number;
    public lines: number;
    public hiScore: number;

    public currentPiece: TileGroup;
    public nextPiece: TileGroup;

    public status: string;

    constructor() {
        this.clear();
    }

    public clear(): void {
        this.score = 0;
        this.level = 1;
        this.lines = 0;
    }
}
