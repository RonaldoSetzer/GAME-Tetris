import { Event } from "@robotlegsjs/core";

export class GameEvent extends Event {
    public static CREATE_LEVEL = "createLevel";
    public static CLEAR_GRID = "clearGrid";
    public static GAME_OVER = "gameOver";

    public static PAUSE = "pause";
    public static RESUME = "resume";

    public static GET_NEXT_PIECE = "getNextPiece";
    public static INCREASE_POINTS = "increasePoints";

    public static UPDATE_DATA = "updateData";
    public static UPDATE_NEXT_PIECE = "updateNextPiece";

    public lines: number;

    constructor(type: string) {
        super(type);
    }
}
