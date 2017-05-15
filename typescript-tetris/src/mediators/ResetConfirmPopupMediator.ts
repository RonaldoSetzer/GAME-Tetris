import { ResetConfirmPopup } from "./../views/ResetConfirmPopup";
import { FlowService } from "./../services/FlowService";
import { HomeView } from "./../views/HomeView";

import { Mediator } from "robotlegs-pixi";
import { injectable, inject, EventDispatcher } from "robotlegs";

@injectable()
export class ResetConfirmPopupMediator extends Mediator<ResetConfirmPopup> {

    @inject(FlowService)
    public flowService: FlowService;

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
