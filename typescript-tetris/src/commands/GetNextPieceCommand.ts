import { GameService } from "./../services/GameService";
import { GameModel } from "./../models/GameModel";
import { TileGroupFactory } from "./../utils/TileGroupFactory";

import { inject, injectable, ICommand } from "@robotlegsjs/core";

@injectable()
export class GetNextPieceCommand implements ICommand {

    @inject(GameModel)
    private model: GameModel;

    @inject(GameService)
    private gameService: GameService;

    public execute(): void {
        this.model.currentPiece = this.model.nextPiece;
        this.model.nextPiece = TileGroupFactory.getRandomTileGroup();

        this.gameService.updateNextPiece();
        this.gameService.updateData();
    }
}
