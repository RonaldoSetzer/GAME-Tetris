import { GameEvent } from "./../events/GameEvent";
import { GameModel } from "./../models/GameModel";
import { GameService } from "./../services/GameService";
import { GameUtils } from "./../utils/GameUtils";

import { inject, injectable, ICommand } from "@robotlegsjs/core";

@injectable()
export class IncreasePointsCommand implements ICommand {

    @inject(GameModel)
    private model: GameModel;

    @inject(GameEvent)
    private event: GameEvent;

    @inject(GameService)
    private gameService: GameService;

    public execute(): void {
        this.model.score += GameUtils.getPointsByLines(this.event.lines);
        this.model.level = GameUtils.getCurrentLevel(this.model.lines);
        this.model.lines += this.event.lines;

        this.gameService.updateData();
    }
}
