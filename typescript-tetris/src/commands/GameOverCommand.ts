import { FlowService } from "./../services/FlowService";
import { GameModel } from "./../models/GameModel";
import { GameStatus } from "./../models/GameStatus";

import { inject, injectable, ICommand } from "robotlegs";

@injectable()
export class GameOverCommand implements ICommand {

    @inject(GameModel)
    public model: GameModel;

    @inject(FlowService)
    public flowService: FlowService;

    /*@inject(SharedObjectManager)
    public sharedObjectManager:SharedObjectManager;*/

    public execute(): void {
        this.model.status = GameStatus.GAMEOVER;

        /*this.sharedObjectManager.updateHighScore();*/

        this.flowService.showGameOverPopup();
    }
}
