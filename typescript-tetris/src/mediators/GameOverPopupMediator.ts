import { GameService } from "./../services/GameService";
import { FlowService } from "./../services/FlowService";
import { GameOverPopup } from "./../views/GameOverPopup";

import { Mediator } from "robotlegs-pixi";
import { injectable, inject } from "robotlegs";

@injectable()
export class GameOverPopupMediator extends Mediator<GameOverPopup> {

    @inject(FlowService)
    public flowService: FlowService;

    @inject(GameService)
    public gameService: GameService;

    public initialize(): void {
        this.eventMap.mapListener(this.view.homeButton, "click", this.homeButton_onClick, this);
        this.eventMap.mapListener(this.view.retryButton, "click", this.retryButton_onClick, this);
    }

    public destroy(): void {
        this.eventMap.unmapListeners();
    }

    private homeButton_onClick(e: any): void {
        this.flowService.setHomeView();
        this.flowService.closePopup();
    }

    private retryButton_onClick(e: any): void {
        this.flowService.closePopup();
        this.gameService.createLevel();
    }
}
