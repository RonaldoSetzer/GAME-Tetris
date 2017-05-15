import { FlowService } from "./../services/FlowService";
import { HomeView } from "./../views/HomeView";

import { Mediator } from "robotlegs-pixi";
import { injectable, inject, EventDispatcher } from "robotlegs";

@injectable()
export class HomeViewMediator extends Mediator<HomeView> {

    @inject(FlowService)
    public flowService: FlowService;

    public initialize(): void {
        this.eventMap.mapListener(this.view.startButton, "click", this.startButton_onClick, this);
        this.eventMap.mapListener(this.view.optionButton, "click", this.optionsButton_onClick, this);
    }

    public destroy(): void {
        this.eventMap.unmapListeners();
    }

    private startButton_onClick(e: any): void {
        this.flowService.setGameView();
    }

    private optionsButton_onClick(e: any): void {
        this.flowService.setOptionsView();
    }
}
