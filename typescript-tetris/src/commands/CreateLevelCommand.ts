import { ICommand, inject, injectable } from "@robotlegsjs/core";

import { GameModel } from "./../models/GameModel";
import { GameStatus } from "./../models/GameStatus";
import { FlowService } from "./../services/FlowService";
import { GameService } from "./../services/GameService";
import { TileGroupFactory } from "./../utils/TileGroupFactory";

@injectable()
export class CreateLevelCommand implements ICommand {
    @inject(GameModel) private model: GameModel;
    @inject(GameService) private gameService: GameService;
    @inject(FlowService) private flowService: FlowService;

    public execute(): void {
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
