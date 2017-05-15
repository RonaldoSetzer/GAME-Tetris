import { GameEvent } from "./../events/GameEvent";
import { GameModel } from "./../models/GameModel";
import { GameService } from "./../services/GameService";
import { GameUtils } from "./../utils/GameUtils";

import { inject, injectable, ICommand } from "robotlegs";

@injectable()
export class IncreasePointsCommand implements ICommand {

    @inject(GameModel)
    public model: GameModel;

    @inject(GameEvent)
    public event: GameEvent;

    @inject(GameService)
    public gameService: GameService;

    public execute(): void {
        this.model.score += GameUtils.getPointsByLines(this.event.lines);
        this.model.level = GameUtils.getCurrentLevel(this.model.lines);
        this.model.lines += this.event.lines;

        this.gameService.updateData();
    }
}
