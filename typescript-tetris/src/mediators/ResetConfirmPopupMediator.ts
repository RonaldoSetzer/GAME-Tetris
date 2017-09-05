import { ResetConfirmPopup } from "./../views/ResetConfirmPopup";
import { FlowService } from "./../services/FlowService";
import { HomeView } from "./../views/HomeView";

import { Mediator } from "@robotlegsjs/pixi";
import { injectable, inject, EventDispatcher } from "@robotlegsjs/core";

@injectable()
export class ResetConfirmPopupMediator extends Mediator<ResetConfirmPopup> {

    @inject(FlowService)
    private flowService: FlowService;

    public initialize(): void {
        this.eventMap.mapListener(this.view.confirmButton, "click", this.confirmButton_onClick, this);
        this.eventMap.mapListener(this.view.cancelButton, "click", this.cancelButton_onClick, this);
    }

    public destroy(): void {
        this.eventMap.unmapListeners();
    }

    private confirmButton_onClick(e: any): void {
        this.flowService.closePopup();
    }

    private cancelButton_onClick(e: any): void {
        this.flowService.closePopup();
    }
}
