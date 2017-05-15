import { FlowService } from "./../services/FlowService";
import { GameService } from "./../services/GameService";
import { GameModel } from "./../models/GameModel";
import { GameStatus } from "./../models/GameStatus";
import { TileGroupFactory } from "./../utils/TileGroupFactory";

import { ICommand, injectable, inject } from "robotlegs";

@injectable()
export class CreateLevelCommand implements ICommand {

    @inject(GameModel)
    public model: GameModel;

    @inject(GameService)
    public gameService: GameService;

    @inject(FlowService)
    public flowService: FlowService;

    /*@inject(SharedObjectManager)
    public sharedObjectManager: SharedObjectManager;*/

    public execute(): void {
        // sharedObjectManager.getExternalData();

        this.model.clear();
        this.model.currentPiece = TileGroupFactory.getRandomTileGroup();
        this.model.nextPiece = TileGroupFactory.getRandomTileGroup();

        this.gameService.clearGrid();
        this.gameService.updateNextPiece();
        this.gameService.updateData();

        if (this.model.status) {
            this.flowService.showStartingPopup();
        } else {
            this.flowService.showInfoPopup();
        }
        this.model.status = GameStatus.GAME;
    }
}
