import { GameService } from "./../services/GameService";
import { FlowService } from "./../services/FlowService";
import { GameOverPopup } from "./../views/GameOverPopup";

import { Mediator } from "@robotlegsjs/pixi";
import { injectable, inject } from "@robotlegsjs/core";

@injectable()
export class GameOverPopupMediator extends Mediator<GameOverPopup> {

    @inject(FlowService)
    private flowService: FlowService;

    @inject(GameService)
    private gameService: GameService;

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
