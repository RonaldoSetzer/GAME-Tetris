import { IConfig, IContext, IEventCommandMap, inject, injectable } from "@robotlegsjs/core";

import { CreateLevelCommand } from "./../commands/CreateLevelCommand";
import { GameOverCommand } from "./../commands/GameOverCommand";
import { GetNextPieceCommand } from "./../commands/GetNextPieceCommand";
import { IncreasePointsCommand } from "./../commands/IncreasePointsCommand";
import { GameEvent } from "./../events/GameEvent";
import { GameManager } from "./../managers/GameManager";
import { GameModel } from "./../models/GameModel";
import { GameService } from "./../services/GameService";
import { TilePool } from "./../utils/TilePool";

@injectable()
export class GameConfig implements IConfig {
    @inject(IContext) private context: IContext;
    @inject(IEventCommandMap) private commandMap: IEventCommandMap;

    public configure(): void {
        TilePool.init();

        this.mapCommands();
        this.mapManager();
        this.mapModels();
    }
    private mapCommands(): void {
        this.commandMap.map(GameEvent.CREATE_LEVEL).toCommand(CreateLevelCommand);
        this.commandMap.map(GameEvent.GAME_OVER).toCommand(GameOverCommand);
        this.commandMap.map(GameEvent.GET_NEXT_PIECE).toCommand(GetNextPieceCommand);
        this.commandMap.map(GameEvent.INCREASE_POINTS).toCommand(IncreasePointsCommand);
    }
    private mapManager(): void {
        this.context.injector
            .bind(GameService)
            .to(GameService)
            .inSingletonScope();
        this.context.injector
            .bind(GameManager)
            .to(GameManager)
            .inSingletonScope();
        // this.context.injector.bind( SharedObjectManager ).to(SharedObjectManager).inSingletonScope();*
    }
    private mapModels(): void {
        this.context.injector
            .bind(GameModel)
            .to(GameModel)
            .inSingletonScope();
    }
}
