import { EventDispatcher, IEventDispatcher, inject, injectable } from "@robotlegsjs/core";

import { GameEvent } from "./../events/GameEvent";

@injectable()
export class GameService {
    @inject(IEventDispatcher) private eventDispatcher: IEventDispatcher;

    public createLevel(): void {
        this.dispatchEventWith(GameEvent.CREATE_LEVEL);
    }
    public pause(): void {
        this.dispatchEventWith(GameEvent.PAUSE);
    }
    public resume(): void {
        this.dispatchEventWith(GameEvent.RESUME);
    }
    public gameOver(): void {
        this.dispatchEventWith(GameEvent.GAME_OVER);
    }
    public clearGrid(): void {
        this.dispatchEventWith(GameEvent.CLEAR_GRID);
    }
    public getNextPiece(): void {
        this.dispatchEventWith(GameEvent.GET_NEXT_PIECE);
    }
    public increasePoints(linesRemoved: number): void {
        const event: GameEvent = new GameEvent(GameEvent.INCREASE_POINTS);
        event.lines = linesRemoved;
        this.eventDispatcher.dispatchEvent(event);
    }
    public updateData(): void {
        this.eventDispatcher.dispatchEvent(new GameEvent(GameEvent.UPDATE_DATA));
    }
    public updateNextPiece(): void {
        this.eventDispatcher.dispatchEvent(new GameEvent(GameEvent.UPDATE_NEXT_PIECE));
    }
    public dispatchEventWith(type: string): void {
        (<EventDispatcher>this.eventDispatcher).dispatchEventWith(type);
    }
}
