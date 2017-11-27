import { inject, injectable } from "@robotlegsjs/core";
import { Mediator } from "@robotlegsjs/pixi";

import { FlowService } from "./../services/FlowService";
import { ResetConfirmPopup } from "./../views/ResetConfirmPopup";

@injectable()
export class ResetConfirmPopupMediator extends Mediator<ResetConfirmPopup> {
    @inject(FlowService) private flowService: FlowService;

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
