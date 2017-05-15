import { GameService } from "./../services/GameService";
import { GameModel } from "./../models/GameModel";
import { TileGroupFactory } from "./../utils/TileGroupFactory";

import { inject, injectable, ICommand } from "robotlegs";

@injectable()
export class GetNextPieceCommand implements ICommand {

    @inject(GameModel)
    public model: GameModel;

    @inject(GameService)
    public gameService: GameService;

    public execute(): void {
        this.model.currentPiece = this.model.nextPiece;
        this.model.nextPiece = TileGroupFactory.getRandomTileGroup();

        this.gameService.updateNextPiece();
        this.gameService.updateData();
    }
}
