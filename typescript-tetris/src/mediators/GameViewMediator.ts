import { GameService } from "./../services/GameService";
import { GameView } from "./../views/GameView";

import { Mediator } from "@robotlegsjs/pixi";
import { injectable, inject } from "@robotlegsjs/core";

@injectable()
export class GameViewMediator extends Mediator<GameView> {

    @inject(GameService)
    private gameService: GameService;

    public initialize(): void {
        this.view.createComponents();

        this.gameService.createLevel();
    }

    public destroy(): void {
        this.view.destroy();
    }
}
