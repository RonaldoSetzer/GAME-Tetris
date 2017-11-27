import { ICommand, inject, injectable } from "@robotlegsjs/core";

import { GameModel } from "./../models/GameModel";
import { GameStatus } from "./../models/GameStatus";
import { FlowService } from "./../services/FlowService";

@injectable()
export class GameOverCommand implements ICommand {
    @inject(GameModel) private model: GameModel;
    @inject(FlowService) private flowService: FlowService;

    public execute(): void {
        this.model.status = GameStatus.GAMEOVER;
        this.flowService.showGameOverPopup();
    }
}
