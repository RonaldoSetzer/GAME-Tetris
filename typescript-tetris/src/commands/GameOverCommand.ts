import { FlowService } from "./../services/FlowService";
import { GameModel } from "./../models/GameModel";
import { GameStatus } from "./../models/GameStatus";

import { inject, injectable, ICommand } from "@robotlegsjs/core";

@injectable()
export class GameOverCommand implements ICommand {

    @inject(GameModel)
    private model: GameModel;

    @inject(FlowService)
    private flowService: FlowService;

    /*@inject(SharedObjectManager)
    public sharedObjectManager:SharedObjectManager;*/

    public execute(): void {
        this.model.status = GameStatus.GAMEOVER;

        /*this.sharedObjectManager.updateHighScore();*/

        this.flowService.showGameOverPopup();
    }
}
