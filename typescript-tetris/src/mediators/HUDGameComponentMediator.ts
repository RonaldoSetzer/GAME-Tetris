import { inject, injectable } from "@robotlegsjs/core";
import { Mediator } from "@robotlegsjs/pixi";

import { GameEvent } from "./../events/GameEvent";
import { GameModel } from "./../models/GameModel";
import { FlowService } from "./../services/FlowService";
import { GameService } from "./../services/GameService";
import { HUDGameComponent } from "./../views/components/HUDGameComponent";

@injectable()
export class HUDGameComponentMediator extends Mediator<HUDGameComponent> {
    @inject(GameModel) private model: GameModel;
    @inject(GameService) private gameService: GameService;
    @inject(FlowService) private flowService: FlowService;

    public initialize(): void {
        this.eventMap.mapListener(this.view.pauseButton, "click", this.pauseButton_onClick, this);
        this.eventMap.mapListener(this.eventDispatcher, GameEvent.UPDATE_DATA, this.game_onUpdate, this);
    }
    public destroy(): void {
        this.eventMap.unmapListeners();
    }
    private game_onUpdate(e: any): void {
        this.view.updateData(this.model);
    }
    private pauseButton_onClick(e: any): void {
        this.gameService.pause();
        this.flowService.showPausePopup();
    }
}
