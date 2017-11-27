import { inject, injectable } from "@robotlegsjs/core";
import { Mediator } from "@robotlegsjs/pixi";

import { FlowService } from "./../services/FlowService";
import { OptionsView } from "./../views/OptionsView";

@injectable()
export class OptionsViewMediator extends Mediator<OptionsView> {
    @inject(FlowService) private flowService: FlowService;

    public initialize(): void {
        this.eventMap.mapListener(this.view.homeButton, "click", this.homeButton_onClick, this);
        this.eventMap.mapListener(this.view.resetButton, "click", this.resetButton_onClick, this);
    }
    public destroy(): void {
        this.eventMap.unmapListeners();
    }
    private homeButton_onClick(e: any, thisObject: any): void {
        this.flowService.setHomeView();
    }
    private resetButton_onClick(e: any): void {
        this.flowService.showResetConfirmPopup();
    }
}
